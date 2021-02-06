import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme, Fonts } from '../utils/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Gradient Clock</title>
                <meta name="description" content="A beautifully simple online date and time display in front of a colorful moving gradient." />

                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="msapplication-config" content="/clock/browserconfig.xml" />
                <meta name="theme-color" content="#000000" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://akash.dev/clock/" />
                <meta property="og:title" content="Gradient Clock" />
                <meta property="og:description" content="A beautifully simple online date and time display in front of a colorful moving gradient." />
                <meta property="og:image" content="https://akash.dev/clock/thumbnail.png" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:image:alt" content="Large clock in front of gradient" />

                <link rel="icon" type="image/x-icon" href="/clock/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/clock/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/clock/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/clock/favicon-16x16.png" />
                <link rel="manifest" href="/clock/site.webmanifest" />
                <link rel="mask-icon" href="/clock/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/clock/favicon.ico" />
            </Head>
            <ChakraProvider theme={theme}>
                <Fonts />
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    );
}
