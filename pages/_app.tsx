import "../scss/main.scss";
import type { AppProps } from "next/app";
import { PageBase } from "../components/PageBase";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PageBase>
            <Component {...pageProps} />
        </PageBase>
    );
}

export default MyApp;
