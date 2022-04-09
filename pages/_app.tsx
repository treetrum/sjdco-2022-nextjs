import "../scss/main.scss";
import type { AppProps } from "next/app";
import { PageBase } from "../components/PageBase";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import Link from "next/link";
import NextNProgress from "nextjs-progressbar";
import { Colors } from "../constants/Colors";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PrismicProvider
            linkResolver={linkResolver}
            internalLinkComponent={({ href, children, ...props }) => (
                <Link href={href}>
                    <a {...props}>{children}</a>
                </Link>
            )}
        >
            <NextNProgress color={Colors.green} />
            <PageBase>
                <PrismicPreview repositoryName={repositoryName}>
                    <Component {...pageProps} />
                </PrismicPreview>
            </PageBase>
        </PrismicProvider>
    );
}

export default MyApp;
