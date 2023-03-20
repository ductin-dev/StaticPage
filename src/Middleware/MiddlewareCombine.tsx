import React, { FC } from "react";

import { IMiddlewareType } from "@middleware/MiddlewareFactory";

export interface MiddlewareCombineType {
    children: JSX.Element;
    Middleware: React.FC<IMiddlewareType>;
};

const MiddlewareCombine: FC<MiddlewareCombineType> = ({ children, Middleware }): JSX.Element => {
    return (
        <Middleware>
            {children}
        </Middleware>
    );
};

export default MiddlewareCombine;