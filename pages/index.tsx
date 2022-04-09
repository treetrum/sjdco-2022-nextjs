import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import HeroHome from "../components/HeroHome";
import { createClient } from "../prismicio";
import { PrismicDocument } from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";

interface Props {
    page: PrismicDocument;
}

export async function getStaticProps({ previewData }: { previewData: any }): Promise<{ props: Props }> {
    const client = createClient({ previewData });
    const page = await client.getSingle("home-page");
    return { props: { page } };
}

const Home: NextPage<Props> = ({ page }) => {
    useEffect(() => {
        console.log(page);
    });
    return (
        <>
            <Head>
                <title>Sam Davis - Front End Developer</title>
                <meta
                    name="description"
                    content="Sam Davis - Sydney based frontend developer based out of Sydney, Australia"
                />
                <link rel="icon" href="/favicon.png" />
            </Head>

            <HeroHome
                title={page.data.title}
                ctaLabel={page.data.ctaText}
                content={<PrismicRichText field={page.data.subtitle} />}
            />
        </>
    );
};

export default Home;
