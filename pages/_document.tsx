import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script
                        data-goatcounter="https://akashdev.goatcounter.com/count"
                        async src="//gc.zgo.at/count.js"
                    />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
