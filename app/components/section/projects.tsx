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
            <div className="carousel rounded-box p-0 h-auto">
                {projects.map((_, index) => (
                    <div key={index} className="carousel-item w-full">
                        <ProjectCard />
                    </div>
                ))}
            </div>
        </div>
    );
}
