import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    };
};

export default AppDocument;
