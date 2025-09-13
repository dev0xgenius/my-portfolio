import Image from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
    img: string;
    title: string;
    subtitle: string;
    stack: unknown[];
}

export default function ProjectCard() {
    return (
        <div className="card w-full max-w-md rounded-md">
            <figure className="image-full">
                <Image
                    alt="project preview"
                    src="/nice-bg.jpg"
                    width={360}
                    height={420}
                />
            </figure>
            <div className="card-body p-2 gap-4 shadow rounded-b-md">
                <div>
                    <span className="card-title min-w-max">
                        Interactive Comments Section
                    </span>
                    <p>Real-time updates and Auth Functionality</p>
                </div>
                <div className="list flex-row gap-1">
                    <Link href="#" className="badge badge-sm">
                        Tailwindcss
                    </Link>
                    <Link href="#" className="badge badge-sm">
                        React
                    </Link>
                    <Link href="#" className="badge badge-sm">
                        Express
                    </Link>
                </div>
                <div className="card-actions">
                    <Link
                        href="#"
                        className="btn btn-sm btn-neutral rounded-sm"
                    >
                        View Code
                    </Link>
                    <Link
                        href="#"
                        className="btn btn-outline btn-sm rounded-sm"
                    >
                        View Site
                    </Link>
                </div>
            </div>
        </div>
    );
}
