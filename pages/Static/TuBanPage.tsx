import React, { FC, useState, useRef, useEffect } from "react";
import { createRoot } from 'react-dom/client';
import { toast, Toaster } from "react-hot-toast";
import styled, { keyframes } from "styled-components";
import { useRouter } from "next/router";

import bruhCardImg from "@asset/image/MiniGame/FPTCare.png"
import styles from './style.module.css';

import { useCombineClasses } from "@hook/useCombineClasses";
import { useInterval } from "@hook/useInterval";
import { useDidMountEffect } from "@hook/useDidMountEffect";
import { useTimeout } from "@hook/useTimeout";
import { useAppDispatch, useAppSelector } from "@hook/useRedux";
import { MousePosition, useMouseOverPosition } from "@hook/useMouseOverPosition";

import { changeName, loseFBTHealth, resetGame, setFBTHealth, upLevel, useBruh } from "@middleware/redux/action/MiniGameAction";

import SimpleLabel from "@presentation/component/Label/SimpleLabel";
import NotificationPopup from "@presentation/component/Toast/NotificationPopup";
import AleartPopup from "@presentation/component/Toast/AleartPopup";
import { validString } from "@presentation/common/UIInputValidator";

export interface BulletType {
    id: number,
    x: number,
    y: number,
    damage: number,
    styled: any,
    innerRef?: React.RefObject<any>,
    upstreamRef: (ref: React.RefObject<any>) => void
};

export interface TuBanPageType {
};

const TuBanPage: FC<TuBanPageType> = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();
    const { bruh, nickname, levelshoot, fbtHealth, fbtMaxHealth } = useAppSelector((state) => state.miniGameReducer);

    const shooterRef = useRef(null);
    const fbtRef = useRef(null);
    const bulletContainerRef = useRef(null);

    const [typedName, setTypedName] = useState<string>("");
    const [activeBullets, setActiveBullets] = useState<BulletType[]>([]);
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
    const [fbtDestroyed, setFbtDestroyed] = useState<Boolean>(false);
    const [isCheating, setIsCheating] = useState<Boolean>(false);

    // Targeting mouse X Y
    useMouseOverPosition(mousePosition, setMousePosition, useEffect);

    // Check cheatting
    useInterval(() => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        if (vw < 1250) {
            setIsCheating(true);
        } else {
            setIsCheating(false);
        }
    }, 1000, useEffect, activeBullets);
    useEffect(() => {
        if (isCheating) {
            alert("Mở rộng cửa sổ trình duyệt TỐI ĐA và dùng PC để có thể chơi game");
            toast(<AleartPopup
                type={"warning"}
                detail={`Mở rộng cửa sổ trình duyệt TỐI ĐA và dùng PC để có thể chơi game`}
            />);
        }
    }, [isCheating])

    // Check collision
    useInterval(() => {
        if (fbtDestroyed) {
            return;
        };
        const bulletEleBoundings = activeBullets.map((element) => element.innerRef?.current?.getBoundingClientRect());
        const fbtElement = fbtRef.current as unknown as HTMLDivElement;
        const fbtBounding = fbtElement?.getBoundingClientRect();
        for (let i = 0; i < bulletEleBoundings.length; i++) {
            if (
                bulletEleBoundings[i] && fbtBounding &&
                bulletEleBoundings[i].left < fbtBounding.right &&
                bulletEleBoundings[i].right > fbtBounding.left &&
                bulletEleBoundings[i].top < fbtBounding.bottom &&
                bulletEleBoundings[i].bottom > fbtBounding.top
            ) {
                useTimeout(
                    () => { fbtElement.style.filter = "hue-rotate(312deg)"; },
                    () => { fbtElement.style.filter = "none"; },
                    50
                );
                if (fbtHealth > 0) {
                    loseFBTHealth(activeBullets[i].damage, dispatch);
                } else {
                    setFBTHealth(0, dispatch);
                };
            };
        };
    }, 100, useEffect, activeBullets);

    // Remove un-active bullets
    useInterval(() => {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const bulletEleBoundings = activeBullets.map((element) => element.innerRef?.current?.getBoundingClientRect());
        for (let i = 0; i < bulletEleBoundings.length; i++) {
            if (
                bulletEleBoundings[i] &&
                bulletEleBoundings[i].right >= vw * 90 / 100
            ) {
                document.getElementById(`bruh_game_bullet_${activeBullets[i].id}`)?.remove();
            };
        };
    }, 1000, useEffect, activeBullets);

    // Game over ?
    useEffect(() => {
        if (fbtHealth == 0) {
            if (levelshoot < 5) {
                upLevel(dispatch);
            } else {
                setFbtDestroyed(true);
            };
        } else if (fbtHealth < 0) {
            setFBTHealth(0, dispatch);
        }
    }, [fbtHealth]);
    useDidMountEffect(() => {
        if (levelshoot > 1) {
            toast(<NotificationPopup
                title={"⚠️⚠️ Game is not over! 😥"}
                image={"https://i.chungta.vn/2017/12/22/LogoFPT-2017-copy-3042-1513928399.jpg"}
                sender={"TƯ BẢN"}
                detail={`Tôi ĐÃ PHÁT TRIỂN lên level ${levelshoot}/5, còn bạn nhận thêm ${levelshoot * 5} bruh cho cuộc kháng chiến tiếp theo`}
                onClose={() => { }}
            />);
        };
    }, [levelshoot]);

    // Begin: Game Actions ---------------------------------------------------------------------
    const getLevel = (): string => {
        switch (levelshoot) {
            case 1: return styles.bruh_game_target_level1;
            case 2: return styles.bruh_game_target_level2;
            case 3: return styles.bruh_game_target_level3;
            case 4: return styles.bruh_game_target_level4;
            case 5: return styles.bruh_game_target_level5;
        }
        return "";
    };

    const shoot = () => {
        if (bruh > 0) {
            const shooterEle = shooterRef.current as unknown as HTMLDivElement;
            const bulletsEle = bulletContainerRef.current as unknown as HTMLDivElement;

            const shoooterX = shooterEle.offsetLeft;
            const shoooterY = shooterEle.offsetTop + 40;

            const trueMousePositionY = mousePosition.y - 64;
            let shootingTargetY = trueMousePositionY - shoooterY;

            var moveTowardFrames = keyframes`
                from {
                    transform: translate(${shoooterX}px, ${shoooterY}px);
                }
                to {
                    transform: translate(90vw, ${shootingTargetY + 250}px);
                }
            `;

            const bulletStyleDiv = styled.div`
                z-index: 1;
                position: absolute;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: rgb(255, 140, 0);
                text-align: center;
                animation: ${moveTowardFrames} 3s linear forwards;
            `;

            let newBullet: BulletType = {
                id: activeBullets.length,
                x: shoooterX,
                y: shoooterY,
                damage: Math.random() * 4,
                styled: bulletStyleDiv,
                upstreamRef: (ref) => { }
            };

            const bulletComponent = <Bullet
                id={newBullet.id} x={newBullet.x} y={newBullet.y}
                damage={newBullet.damage} styled={newBullet.styled}
                upstreamRef={(ref) => {
                    newBullet.innerRef = ref;
                }}
            />;
            const bulletNode = document.createElement('div');
            bulletNode.id = `bruh_game_bullet_${newBullet.id}`;
            createRoot(bulletNode).render(bulletComponent);

            bulletsEle.appendChild(bulletNode);

            setActiveBullets([...activeBullets, newBullet]);
            useBruh(1, dispatch);
        } else {
            toast(<AleartPopup
                type={"error"}
                detail={`Bạn đã hết bruh để có thể đánh tư bản. Thu thập thêm bruh - thứ được hiển thị ngẫu nhiên khi bạn dạo quanh trang web`}
            />);
        };

    };

    const playAgain = (hardReset: boolean) => {
        resetGame(hardReset, dispatch);
        router.reload();
    };

    const changeNameHandler = () => {
        if (validString(typedName, true, false, 0, 30)) {
            changeName(typedName, dispatch);
        };
    };
    // End: Game Actions ---------------------------------------------------------------------

    // Bullet Component
    class Bullet extends React.Component<BulletType> {
        innerRef: React.RefObject<any>;

        constructor(props: BulletType) {
            super(props);
            this.innerRef = React.createRef();
        };

        componentDidMount(): void {
            this.props.upstreamRef(this.innerRef);
        };

        render() {
            return (
                <this.props.styled ref={this.innerRef}>
                </this.props.styled>
            );
        };
    };

    // RENDER
    return (
        <div className="global-container-screen-prototype">
            <Toaster toastOptions={{
                className: '',
                duration: 8000,
                style: {
                    padding: 0,
                    background: '#363636',
                    margin: 0,
                    color: '#fff',
                }
            }} />
            <div style={{ position: "absolute", background: "none", zIndex: "3" }}>
                <p className="ml-2 mt-2">Welcome <SimpleLabel text={nickname} color="gray" />
                    <b style={{ color: "green" }}>Suc the company and recurse people!</b></p>
                <div className="ml-2 p-2 bg-white border shadow rounded w-96">
                    <div className="flex justify-between items-center">
                        <input type="text" placeholder="Change your name here"
                            className="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-blue-500"
                            value={typedName} onChange={(e) => setTypedName(e.target.value)} />
                        <button type="button" className="btn bg-gray-200 hover:bg-gray-300 px-4 py-2 font-medium rounded"
                            onClick={changeNameHandler}>Change</button>
                    </div>
                </div>
                <div className="flex">
                    <p className="ml-2">Your bruh left:
                        <b>{bruh <= 0 ? <SimpleLabel text={bruh} color="red" /> : <SimpleLabel text={bruh} color="emerald" />}</b>
                    </p>&nbsp;|&nbsp;
                    <p className="ml-2 mb-2">Current Level of FBT: <SimpleLabel text={levelshoot} color="red" /></p>
                </div>
                <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded ml-2" style={{ fontSize: "11px" }} onClick={() => playAgain(true)}>Tôi xin thua (reset)</button>
                <div style={{ top: "350px", position: "absolute" }}>Your can collect in other screens this: <img src={bruhCardImg.src} width={100} height={100} /> to incresing the bruh amount </div>
            </div>
            <div className={styles.bruh_game}>
                <div ref={shooterRef} className={styles.bruh_game_shooter}></div>
                {!isCheating && <div ref={fbtRef} className={
                    useCombineClasses(
                        styles.bruh_game_target,
                        fbtDestroyed ? styles.bruh_game_target_destroy : getLevel(),
                    )}>
                    <b className={styles.bruh_game_target_health_text}>{parseFloat(fbtHealth?.toString()).toFixed(3)}</b>
                    <div className={useCombineClasses("w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-100", styles.bruh_game_target_health)}>
                        <div className="bg-yellow-400 h-2.5 rounded-full" style={{
                            width: `${fbtHealth / fbtMaxHealth * 100}%`
                        }}></div>
                    </div>
                    {fbtDestroyed && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{ width: "100%" }} onClick={() => playAgain(false)}>Cứu tư bản (⚠️ Play again ⚠️)</button>}
                </div>}
                <div className="bulletContainer" ref={bulletContainerRef}>
                </div>
            </div>
            <div onClick={() => shoot()} className={styles.bruh_playholder}>
                <span style={{ userSelect: "none", top: "50%", width: "100%", textAlign: "center", position: "absolute", cursor: "pointer" }}>
                    {isCheating ? "Mở rộng cửa sổ trình duyệt TỐI ĐA vì cửa sổ hẹp thì dễ bắn trúng bỏ mẹ, và dùng PC để chơi nhé" : "CLICK ANYWHERE IN THIS BOX TO FIRE"}
                </span>
            </div>
        </div >
    );
};

export default TuBanPage;