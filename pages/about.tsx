import type { NextPage } from "next";
import Head from "next/head";
import { HeroPage } from "../components/HeroPage";
import { createClient } from "../prismicio";
import { PrismicDocument } from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import { GetStaticProps } from "next";
import { AboutPageDocument } from "../.slicemachine/prismicio";

interface Props {
    page: AboutPageDocument<string>;
}

export const getStaticProps: GetStaticProps<Props> = async ({ previewData }) => {
    const client = createClient({ previewData });
    const page = await client.getSingle("about-page");
    return { props: { page } };
};

const About: NextPage<Props> = ({ page }) => (
    <>
        <Head>
            <title>Sam Davis - Front End Developer</title>
            <meta
                name="description"
                content="Sam Davis - Sydney based frontend developer based out of Sydney, Australia"
            />
        </Head>

        <HeroPage title={page.data.title ?? ""} />

        <div className="page-content">
            <div className="container">
                <div className="row align-center">
                    <div className="columns md-7">
                        <PrismicRichText field={page.data.content} />
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default About;
