import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useGetRouterByPath } from "@hook/useGetRouter";
import ProtectedRouterMiddleware from "@middleware/authentication/ProtectedRouterMiddleware";
import AUTH_SCOPE_TYPE from "@middleware/authentication/authenticationScopeData";

//Layout
import Header from "@presentation/layout/Header/Header";
import Footer from "@presentation/layout/Footer/Footer";
import ScrollToTop from "@presentation/layout/ScrollToTopLayout/ScrollToTopLayout";
import LoadingLayout from "@presentation/layout/LoadingLayout/LoadingLayout";
import BruhGiftLayout from "@presentation/layout/BruhGiftLayout/BruhGiftLayout";

export interface LayoutMiddlewareType {
};

const LayoutMiddleware: FC<LayoutMiddlewareType> = (props: PropsWithChildren<LayoutMiddlewareType>) => {

    const router = useGetRouterByPath(useRouter().asPath);

    return (
        <LoadingLayout>
            <ScrollToTop>
                <>
                    {router && router.useHelmet && <Head>
                        <meta charSet="utf-8" />

                        <title>{router.title}</title>
                        {router.description && <meta name="description" content={router.description} />}

                        <meta property="og:title" content={router.title} />
                        {router.description && <meta property="og:description" content={router.description} />}
                        {router.thumbnail && <meta property="og:image" content={router.thumbnail} />}
                    </Head>}
                    <Header show={router && router.useLayoutHeaderFooter ? true : false} />
                    {/* <BruhGiftLayout show={router.useLayoutBruhGift ? true : false} /> */}
                    <ProtectedRouterMiddleware scope={AUTH_SCOPE_TYPE.NOTREQ_LOGIN} authMess={""} protectedContent={props.children} />
                    <Footer show={router && router.useLayoutHeaderFooter ? true : false} />
                </>
            </ScrollToTop>
        </LoadingLayout>
    );
};

export default LayoutMiddleware;
