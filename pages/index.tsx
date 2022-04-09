import type { NextPage } from "next";
import Head from "next/head";
import HeroHome from "../components/HeroHome";
import { PageBase } from "../components/PageBase";

const Home: NextPage = () => (
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
            title="Sam Davis"
            ctaLabel="About Me"
            content={
                <p>
                    A passionate <span className="highlight-purple">web developer</span>
                    <br /> working out of <span className="highlight-blue">Sydney, Australia</span>
                </p>
            }
        />
    </>
);

export default Home;
