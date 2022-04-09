import "../scss/main.scss";
import type { AppProps } from "next/app";
import { PageBase } from "../components/PageBase";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { linkResolver, repositoryName } from "../prismicio";
import Link from "next/link";

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
            <PageBase>
                <PrismicPreview repositoryName={repositoryName}>
                    <Component {...pageProps} />
                </PrismicPreview>
            </PageBase>
        </PrismicProvider>
    );
}

export default MyApp;
