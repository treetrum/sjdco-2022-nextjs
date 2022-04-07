import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "../components/Context";
import HeroHome from "../components/HeroHome";
import { MobileMenu } from "../components/MobileMenu";
import { NavBar } from "../components/NavBar";

const Home: NextPage = () => (
    <ThemeProvider>
        <Head>
            <title>Sam Davis - Front End Developer</title>
            <meta
                name="description"
                content="Sam Davis - Sydney based frontend developer based out of Sydney, Australia"
            />
            <link rel="icon" href="/favicon.png" />
        </Head>

        <NavBar />
        <MobileMenu />

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
    </ThemeProvider>
);

export default Home;
