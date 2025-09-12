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
                <div className="card-body">
                    <h1 className="text-2xl card-title">
                        Fullstack Web Developer
                    </h1>
                    <div className="container">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus, sapiente. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Dolore, itaque.
                    </div>
                </div>
                <div className="px-6">
                    <div className="flex gap-2 max-w-fit">
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
                </div>
            </div>
            <div className="hidden">
                <Image
                    src="/dev.png"
                    alt="illustration of dev: angry bird persona"
                    width={500}
                    height={500}
                    className="size-12"
                />
            </div>
        </div>
    );
}
