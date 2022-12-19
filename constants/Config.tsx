import React from "react";
import { MastodonIcon } from "../components/atoms/Icons";

const config = {
    recaptcha: {
        sitekey: "6Ld11uEUAAAAAGudGuZI6jkrKftEzwewgf8IrOfX",
    },
    socialLinks: [
        {
            icon: "github",
            link: "https://github.com/treetrum",
        },
        {
            icon: "mastodon",
            iconSvg: <MastodonIcon />,
            link: "https://mstdn.social/@treetrum",
            rel: "me",
        },
        {
            icon: "twitter",
            link: "https://twitter.com/samjdavis",
        },
        {
            icon: "instagram",
            link: "https://www.instagram.com/samjdavis",
        },
        {
            icon: "linkedin",
            link: "https://www.linkedin.com/in/sam-davis-174aa7163",
        },
    ],
};

export default config;
