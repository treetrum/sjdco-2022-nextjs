export { default, getStaticProps } from "../index";

import { GetStaticPaths } from "next";
import { ProjectDocument } from "../../interfaces/Project";
import { createClient } from "../../prismicio";

export const getStaticPaths: GetStaticPaths = async () => {
    const client = createClient();
    const projects = await client.getAllByType<ProjectDocument>("project");

    return {
        paths: projects.map((p) => `/project/${[p.uid]}`),
        fallback: false,
    };
};
