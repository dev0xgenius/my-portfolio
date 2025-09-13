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
        <div className="px-2 flex flex-col gap-4">
            {/* <h2>My Projects</h2> */}
            <ul className="list gap-4 w-full">
                {projects.map((_, index) => (
                    <li
                        key={index}
                        className="list-row grow p-0 rounded-none gap-0"
                    >
                        <ProjectCard />
                    </li>
                ))}
            </ul>
        </div>
    );
}
