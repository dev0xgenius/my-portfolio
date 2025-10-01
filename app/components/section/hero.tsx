import Image from "next/image";
import Link from "next/link";

export interface SocialLinkProps {
    href: string;
    src: string;
    description: string;
}

function SocialLink({ href, src, description }: SocialLinkProps) {
    return (
        <Link href={href}>
            <Image src={src} alt={description} width={24} height={24} />
        </Link>
    );
}

export function Hero() {
    return (
        <div>
            <div className="card">
                <div className="card-body pt-0 gap-4">
                    <div className="text-left">
                        <h1 className="card-title text-2xl">
                            Fullstack Web Developer
                        </h1>
                        <p>
                            Lorem ipsum dorem ipsu coram dlam Lorem ipsum dorem
                            ipsu coram dlam
                        </p>
                    </div>
                    <div className="card-actions flex-nowrap items-center ">
                        <div className="flex gap-1 max-w-fit p-1 border rounded-full">
                            <SocialLink
                                href="#"
                                src="/github-mark.svg"
                                description="github logo"
                            />
                            <SocialLink
                                href="#"
                                src="/telegram.svg"
                                description="Telegram logo"
                            />
                        </div>
                        <div className="divide-accent"></div>
                        <button className="btn btn-neutral shadow link rounded-xl">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
