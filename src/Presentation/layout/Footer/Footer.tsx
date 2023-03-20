import React, { FC } from 'react';

import logoImg from '@asset/image/Logo.png';
import styles from './style.module.css';

import { useCombineClasses } from '@hook/useCombineClasses';

export interface FooterType {
    show: boolean;
    className?: string;
};

const Footer: FC<FooterType> = ({ show }) => {
    return show ? (
        <div className={useCombineClasses("mx-auto", styles.footer_container)}>
            <footer className={useCombineClasses("p-4", "bg-white rounded-lg", "shadow", "md:px-6", "md:py-8", "dark:bg-gray-800", styles.footer)}>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="https://satdevelop.com" target="_blank" className="flex items-center mb-4 sm:mb-0" style={{ userSelect: "none" }}>
                        <img src={logoImg.src} className="mr-4 h-8" alt="Satdevelop Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Satellite Begi Development</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
                        <li>
                            <a href="#"
                                className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact Our Team</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://satdevelop.com" target="_blank" className="hover:underline">Satdevelop™</a>. Begi only All Rights Reserved.
                </span>
            </footer>
        </div>
    ) : <></>;
};

export default Footer;