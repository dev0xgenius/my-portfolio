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
        <div className="-mt-4">
            <div className="card">
                <div className="card-body px-4 gap-4">
                    <h1 className="text-4xl card-title justify-center">
                        Fullstack Web Developer
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus, sapiente. Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>
                <div className="px-4">
                    <div className="flex gap-2 max-w-fit ">
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
        </div>
    );
}
