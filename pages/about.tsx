import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/atoms/Container";
import { HeroPage } from "../components/HeroPage";

const About: NextPage = () => (
    <>
        <Head>
            <title>About - Sam Davis - Front End Developer</title>
            <meta
                name="description"
                content="Sam Davis - Sydney based frontend developer based out of Sydney, Australia"
            />
            <link rel="icon" href="/favicon.png" />
        </Head>

        <HeroPage title={"About Me / Contact"} />

        <div className="page-content">
            <div className="container">
                <div className="row align-center">
                    <div className="columns md-7">
                        <p>Hey 👋 I’m Sam Davis, a web developer working out of Sydney, Australia.</p>
                        <p>
                            I have over 7 years of experience working as a web developer across a wide variety of
                            clients, products and services. I currently specialise in front end development with a focus
                            on making beautiful product come to life. I have extensive experience with various
                            languages, specifically HTML/CSS (Sass/Less), JavaScript/ES6/Flow/Typescript, React, React
                            Native as well as the common front-end tools such as Webpack, Babel, Gulp, NPM, etc. I have
                            backend development experience in NodeJS and PHP/Wordpress. I am very comfortable with a
                            command line and am able to spin up headless server without issue. I love to learn and am
                            always looking to better myself – I work best when building something I care about, both in
                            a team and independently.
                        </p>
                        <p>
                            I currently work as a Software Engineer at{" "}
                            <a target="_blank" rel="noopener noreferrer" href="https://www.atlassian.com">
                                Atlassian
                            </a>
                            .
                        </p>
                        <p>
                            If you’d like to get in touch with me regarding work (or you just want to say hello!), shoot
                            an email to <pre>sam at sjd dot co</pre>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default About;
