import * as React from "react";
import { CSSTransition } from "react-transition-group";
import { ProjectSlideover } from "./ProjectSlideover";
import { WorkTile } from "./WorkTile";
import { PrismicDocument } from "@prismicio/types";
import { Project } from "../interfaces/Project";

const MyWork: React.FC<{ projects: PrismicDocument<Project>[] }> = (props) => {
    // Get all the projects from the query above
    const allProjects = props.projects;
    const projects = allProjects;

    const projectFromURL = allProjects.find((p) =>
        typeof window !== "undefined"
            ? p.data.uid ===
              window.location.pathname
                  .split("/")
                  .filter((a) => !!a)
                  .pop()
            : undefined
    );

    const [activeProject, _setActiveProject] = React.useState<undefined | PrismicDocument<Project>>(projectFromURL);

    const setActiveProject = (project: PrismicDocument<Project> | undefined) => {
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
                                    title={project.data.title}
                                    image={project.data.thumbnail}
                                    subtitle={project.data.shortDescription}
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
