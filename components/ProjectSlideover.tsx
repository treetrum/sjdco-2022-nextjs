import * as React from "react";
import Head from "next/head";
import LockBodyScroll from "./atoms/LockBodyScroll";
import Image from "next/image";
import { asImageSrc } from "@prismicio/helpers";
import { PrismicRichText } from "@prismicio/react";
import { ProjectDocument } from "../.slicemachine/prismicio";

interface Props {
    project: ProjectDocument;
    onClose: () => void;
}

export const ProjectSlideover: React.FC<Props> = (props) => {
    const scrollingRef = React.useRef<HTMLDivElement>(null);
    const { project } = props;
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                props.onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [props]);

    return (
        <div className="project-slideover">
            <LockBodyScroll scrollingRef={scrollingRef} />
            <Head>
                <title>{project.data.title}</title>
            </Head>
            <button type="button" className="project-slideover__overlay" onClick={props.onClose} />
            <button onClick={props.onClose} className="project-slideover__back">
                <i className="icon icon-arrow-left" />
            </button>
            <div className="project-slideover__main" ref={scrollingRef}>
                <div className="project-slideover__thumb">
                    <Image
                        alt=""
                        src={asImageSrc(project.data.thumbnail) ?? ""}
                        width={450}
                        height={500}
                        layout="raw"
                    />
                </div>
                <div className="project-slideover__content">
                    <h3 className="project-slideover__title">{project.data.title}</h3>
                    <div className="rte">
                        <PrismicRichText field={project.data.description} />
                    </div>
                    <div className="project-slideover__tags">
                        <div className="project-slideover__tags__list">
                            {(project.data.tags ?? "")
                                .split(",")
                                .map((tag) => tag.trim())
                                .map((tag) => (
                                    <span key={tag} className="project-slideover__tags__tag">
                                        {tag}
                                    </span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
