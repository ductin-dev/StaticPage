import App from "next/app";
import Head from "next/head";

import "@asset/theme/global.scss";
import faviconImg from "@asset/image/favicon.ico";

import MiddlewareFactory from "@middleware/MiddlewareFactory";
import ReduxMiddleware from "@middleware/redux/ReduxMiddleware";
import LayoutMiddleware from "@middleware/layout/LayoutMiddleware";
import ApolloMiddleware from "@middleware/apollo/ApolloMiddleware";

export default class ReactNextApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <MiddlewareFactory
                OuterApp={<></>}
                InnerApp={<Component {...pageProps} />}
                middlewares={[
                    LayoutMiddleware,
                    ReduxMiddleware,
                    ApolloMiddleware
                ]}
            />
        );
    };
};
