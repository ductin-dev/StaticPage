import { useRouter } from 'next/router'
import { FC, useLayoutEffect } from "react";

import styles from './style.module.css';

export interface ScrollToTopLayoutType {
    children: JSX.Element;
};

const ScrollToTopLayout: FC<ScrollToTopLayoutType> = ({ children }) => {

    const router = useRouter();

    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [router.asPath]);

    return children;
};

export default ScrollToTopLayout;