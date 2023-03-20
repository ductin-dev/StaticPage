import React, { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";

import AUTH_SCOPE_TYPE from "./authenticationScopeData";

export interface ProtectedRouterMiddlewareType {
    scope: AUTH_SCOPE_TYPE;
    authMess: string;
    protectedContent: React.ReactNode | React.ReactNode[] | null;
};

const ProtectedRouterMiddleware: FC<ProtectedRouterMiddlewareType> = ({ scope, authMess, protectedContent }) => {

    const router = useRouter();

    switch (scope) {
        case AUTH_SCOPE_TYPE.REQUIRED_LOGIN:
            router.push("/login");
            return <></>;
        case AUTH_SCOPE_TYPE.NOTREQ_LOGIN:
            return <>{protectedContent}</>;
        default:
            return <>{protectedContent}</>;
    }
};

export default ProtectedRouterMiddleware;