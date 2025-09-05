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
            <div>
                <div className="content"></div>
                <h1>Fullstack Web Developer</h1>
                <div className="container">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minus, sapiente. Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Dolore, itaque.
                </div>
                <div className="social links">
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
            <div className="illustration">
                <Image
                    src="/dev.png"
                    alt="illustration of dev: angry bird persona"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    );
}
