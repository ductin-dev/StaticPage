import React, { FC } from "react";

import MiddlewareCombine from "./MiddlewareCombine";
import { ApolloMiddlewareType } from "./apollo/ApolloMiddleware";
import { ProtectedRouterMiddlewareType } from "./authentication/ProtectedRouterMiddleware";
import { ReduxMiddlewareType } from "./redux/ReduxMiddleware";
import { LayoutMiddlewareType } from "./layout/LayoutMiddleware";

export type IMiddlewareType = ApolloMiddlewareType | ProtectedRouterMiddlewareType | ReduxMiddlewareType | LayoutMiddlewareType;

export interface MiddlewareFactoryType {
    OuterApp: JSX.Element;
    InnerApp: JSX.Element;
    middlewares?: React.FC<IMiddlewareType>[];
};

const MiddlewareFactory: FC<MiddlewareFactoryType> = ({ OuterApp, InnerApp, middlewares }) => {
    var com = InnerApp;

    middlewares && middlewares.forEach((middleware, id) => {
        com = <MiddlewareCombine children={com} Middleware={middleware} />
    });
    return (
        <>
            {com}
        </>
    );
};

export default MiddlewareFactory;