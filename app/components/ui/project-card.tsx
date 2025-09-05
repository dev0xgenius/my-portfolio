export interface ProjectCardProps {
    img: string;
    title: string;
    subtitle: string;
    stack: unknown[];
}

export default function ProjectCard() {
    return (
        <div className="container">
            <span className="project__img"></span>
            <span className="project__title">Interactive Comments Section</span>
            <p className="project__subtitle">
                Real-time updates and Auth Functionality
            </p>
            <div className="project__stack">
                <a href="#">Tailwindcss</a>
                <a href="#">React</a>
                <a href="#">Express</a>
            </div>
            <div>
                <a href="#">View Code</a>
                <a href="#">View Site</a>
            </div>
        </div>
    );
}
