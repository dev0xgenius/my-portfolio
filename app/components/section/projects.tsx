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
        <div className="px-6">
            <h2 className="mb-2">My Projects</h2>
            <ul className="list gap-4">
                {projects.map((_, index) => (
                    <li
                        key={index}
                        className="list-row border border-black rounded-sm"
                    >
                        <ProjectCard />
                    </li>
                ))}
            </ul>
        </div>
    );
}
