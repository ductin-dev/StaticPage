import React, { FC } from 'react';
import { Spinner } from 'reactstrap';

import styles from './style.module.css';

export interface LoadingLayoutType {
    className?: string;
    parentCondition?: boolean;
    children: JSX.Element;
};

const LoadingLayout: FC<LoadingLayoutType> = ({ parentCondition = true, children }) => {
    return (parentCondition ?
        children :
        <div className="container">
            <Spinner color="dark" />
        </div>
    );
};

export default LoadingLayout;
