import type { NextPage } from "next";
import Head from "next/head";
import HeroHome from "../components/HeroHome";
import { createClient } from "../prismicio";
import { PrismicDocument } from "@prismicio/types";
import { PrismicRichText } from "@prismicio/react";
import { GetStaticProps } from "next";
import { ProjectDocument } from "../interfaces/Project";
import MyWork from "../components/MyWork";
import { useEffect } from "react";

interface Props {
    page: PrismicDocument;
    projects: ProjectDocument[];
    initialProject: ProjectDocument | null;
}

export const getStaticProps: GetStaticProps<Props> = async ({ previewData, params }) => {
    const client = createClient({ previewData });
    const page = await client.getSingle("home-page");
    const projects = await client.getAllByType<ProjectDocument>("project", {
        orderings: {
            field: "my.project.sortOrder",
            direction: "asc",
        },
    });
    const projectFromURL = projects.find((p) => p.uid === params?.project);
    return { props: { page, projects, initialProject: projectFromURL ?? null } };
};

const Home: NextPage<Props> = ({ page, projects, initialProject }) => {
    return (
        <>
            <Head>
                <title>Sam Davis - Front End Developer</title>
                <meta
                    name="description"
                    content="Sam Davis - Sydney based frontend developer based out of Sydney, Australia"
                />
            </Head>

            <HeroHome
                title={page.data.title}
                ctaLabel={page.data.ctaText}
                content={<PrismicRichText field={page.data.subtitle} />}
                anchorLabel={page.data.workAnchorText}
            />

            <MyWork projects={projects} initialProject={initialProject} />
        </>
    );
};

export default Home;
