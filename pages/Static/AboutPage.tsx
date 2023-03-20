import { useCombineClasses } from "@hook/useCombineClasses";
import FlyingHearts from "@presentation/component/FlyingHearts/FlyingHearts";
import { FC } from "react";

import styles from './style.module.css';

export interface AboutPageType {
};

const AboutPage: FC<AboutPageType> = () => {
    const effectTextClasses = useCombineClasses(
        "link",
        styles.link_underline,
        styles.link_underline_black,
        "text-black");

    return (
        <div>
            <div style={{
                position: "absolute",
                backgroundImage: "url('https://img1.picmix.com/output/stamp/normal/9/9/4/3/1503499_8efaf.gif')",
                width: "100%",
                height: "100%"
            }}>

            </div>


            <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <p className="font-display max-w-sm text-2xl font-bold leading-tight">
                        <span className={effectTextClasses}> Hi em yêu ! </span>
                    </p>
                    <br />
                    <br />
                    <p className="font-display max-w-sm text-2xl leading-tight">
                        <span className={effectTextClasses}> Chúc em êu thật <b>hạnh phúc</b> và luôn <b> mỉm cười</b> thật nhiềuuu</span>
                    </p>
                    <br />
                    <br />
                    <p className="font-display max-w-sm text-2xl font-bold leading-tight">
                        <span className={effectTextClasses}> Bởi vì hôm nay là ngày </span>
                    </p>
                    <br />
                    <br />
                    <p className="font-display max-w-sm text-2xl leading-tight">
                        <span className={effectTextClasses}><b><a target="_blank" href="https://fb.com/satfomacej">Quốc tế hạnh phúc đó</a></b> heheheeee</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;