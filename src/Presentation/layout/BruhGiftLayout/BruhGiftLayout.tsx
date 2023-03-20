import { FC, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import FPTCareImg from '@asset/image/MiniGame/FPTCare.png';
import styles from './style.module.css';

import { useAppDispatch, useAppSelector } from '@hook/useRedux';
import { grantBruh } from '@middleware/redux/action/MiniGameAction';
import AleartPopup from '@presentation/component/Toast/AleartPopup';

export interface BruhGiftLayoutType {
    show: boolean;
};

const BruhGiftLayout: FC<BruhGiftLayoutType> = ({ show }) => {

    const dispatch = useAppDispatch();
    const { bruh, nickname } = useAppSelector((state) => state.miniGameReducer);

    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);

    const [randomGiftAmount, setRandomGiftAmount] = useState<boolean>(Math.floor(Math.random() * 10) > 4);

    const getBruh = () => {
        const bruhAmount = Math.floor(Math.random() * 10);
        toast(<AleartPopup
            type={"success"}
            detail={`Bạn đã liếm được ${bruhAmount} bruh - tổng bruh là ${bruhAmount + bruh}`}
        />);
        grantBruh(bruhAmount, dispatch);
    }

    return show ? (
        <>
            <Toaster toastOptions={{
                className: '',
                duration: 2500,
                style: {
                    padding: 0,
                    background: '#363636',
                    margin: 0,
                    color: '#fff',
                }
            }} />
            {randomGiftAmount &&
                <div className={styles.container}>
                    <img onClick={getBruh} className={styles.gift} src={FPTCareImg.src} style={{
                        left: `${x}vw`,
                        top: `${y}vh`
                    }} />
                </div>
            }
        </>
    ) : <></>;
};

export default BruhGiftLayout;
