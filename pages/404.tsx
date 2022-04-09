import type { NextPage } from "next";
import Head from "next/head";
import { HeroPage } from "../components/HeroPage";

interface Props {}

const About: NextPage<Props> = () => (
    <>
        <Head>
            <title>Page Not Found - Sam Davis - Front End Developer</title>
            <meta
                name="description"
                content="Sam Davis - Sydney based frontend developer based out of Sydney, Australia"
            />
            <link rel="icon" href="/favicon.png" />
        </Head>

        <HeroPage title={"Page not found"} fullHeight />
    </>
);

export default About;
