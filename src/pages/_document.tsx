import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@200..800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@1..900&family=Stick+No+Bills:wght@200..800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap"
                    rel="stylesheet"
                />

				<link rel="icon" href="/icon.ico" />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
