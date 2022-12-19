import React, { useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { ProjectDocument } from "../.slicemachine/prismicio";
import { ProjectSlideover } from "./ProjectSlideover";
import { WorkTile } from "./WorkTile";

interface Props {
    projects: ProjectDocument[];
    initialProject: ProjectDocument | null;
}

const MyWork: React.FC<Props> = (props) => {
    // Get all the projects from the query above
    const allProjects = props.projects;
    const projects = allProjects;
    // .sort((a, b) => a.data.sortOrder - b.data.sortOrder);

    const [activeProject, _setActiveProject] = React.useState<undefined | ProjectDocument>(
        props.initialProject ?? undefined
    );

    const setActiveProject = (project: ProjectDocument | undefined) => {
        if (project) {
            window.history.pushState({ project }, "", `/project/${project.uid}`);
        } else {
            window.history.pushState({}, "", `/`);
        }
        _setActiveProject(project);
    };

    React.useEffect(() => {
        const handle = ({ state }: { state: any }) => {
            if (state && state.project) {
                _setActiveProject(state.project);
            } else {
                _setActiveProject(undefined);
            }
        };
        window.addEventListener("popstate", handle);
        return () => {
            window.removeEventListener("popstate", handle);
        };
    }, []);

    return (
        <>
            <section className="my-work" id="my-work">
                <div className="container">
                    <div className="my-work__intro">
                        <h3 className="section-title">My Work</h3>
                    </div>
                    <div className="my-work__projects">
                        {projects.map((project, index) => {
                            return (
                                <WorkTile
                                    key={project.uid}
                                    title={project.data.title ?? ""}
                                    image={project.data.thumbnail}
                                    subtitle={project.data.shortDescription ?? ""}
                                    onClick={() => {
                                        setActiveProject(project);
                                    }}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            {projects.map((project) => (
                <CSSTransition
                    key={project.uid}
                    in={project.data.title === activeProject?.data.title}
                    timeout={500}
                    classNames="slideover"
                    unmountOnExit
                >
                    <ProjectSlideover
                        project={project}
                        onClose={() => {
                            setActiveProject(undefined);
                        }}
                    />
                </CSSTransition>
            ))}
        </>
    );
};

export default MyWork;
