import ProjectCard, { ProjectCardProps } from "../ui/project-card";

const projects: ProjectCardProps[] = [
    {
        img: "/somewhere.png",
        title: "Interactive Comments Section",
        subtitle: "Real-time updates and Auth functionality",
        stack: [],
    },
    {
        img: "/somewhere.png",
        title: "Interactive Comments Section",
        subtitle: "Real-time updates and Auth functionality",
        stack: [],
    },
];

export default function Projects() {
    return (
        <div>
            <h2>My Projects</h2>
            <ul>
                {projects.map((_, index) => (
                    <li key={index} className="project">
                        <ProjectCard />
                    </li>
                ))}
            </ul>
        </div>
    );
}
