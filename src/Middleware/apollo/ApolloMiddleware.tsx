import React, { FC, PropsWithChildren } from "react";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "@hook/useApollo";

export interface ApolloMiddlewareType {
};

const ApolloMiddleware: FC<ApolloMiddlewareType> = (props: PropsWithChildren<ApolloMiddlewareType>) => {
    const apolloClient = useApollo();

    return (
        <ApolloProvider client={apolloClient}>
            {props.children}
        </ApolloProvider>
    );
};

export default ApolloMiddleware;