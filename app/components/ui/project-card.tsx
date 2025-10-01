import Image from "next/image";
import { CgCode } from "react-icons/cg";
import { LuLink } from "react-icons/lu";

export interface ProjectCardProps {
    img: string;
    title: string;
    subtitle: string;
    stack: unknown[];
}

export default function ProjectCard() {
    return (
        <div className="card relative w-full sm:max-w-[300px] rounded-2xl">
            <figure className="absolute top-0 bottom-0 left-0 right-0">
                <Image
                    width={1080}
                    height={760}
                    src="/nice-bg.jpg"
                    alt="simple image"
                    className="w-full h-full object-cover opacity-20 -z-10"
                />
            </figure>
            <div className="card-body justify-around gap-8">
                <div className="flex gap-2 overflow-auto">
                    <a href="#" className="min-w-fit badge">
                        React
                    </a>
                    <a href="#" className="min-w-fit badge">
                        node
                    </a>
                    <a href="#" className="badge min-w-fit">
                        websockets
                    </a>
                    <a href="#" className="badge min-w-fit">
                        TailwindCSS
                    </a>
                </div>
                <figure>
                    <Image
                        width={360}
                        height={480}
                        src="/nice-bg.jpg"
                        alt="simple image"
                        className="rounded-md"
                    />
                </figure>
                <div className="flex flex-col gap-2">
                    <div className="card-title">
                        Interactive Comments Section
                    </div>
                    <p>
                        Lorem ipsum opium demma dism rapsu dia beans Lorem ipsum
                        opium demma dism rapsu dia beans
                    </p>
                </div>
                <div className="card-actions justify-between">
                    <button className="btn rounded-xl btn-primary">
                        <LuLink />
                        View Site
                    </button>
                    <button className="btn rounded-xl btn-secondary">
                        <CgCode />
                        view Code
                    </button>
                </div>
            </div>
        </div>
    );
}
