import Image from "next/image";

export interface BlogOverviewCardProps {
    title: string;
    img: string;
    description: string;
}

export function BlogOverviewCard() {
    return (
        <div className="card gap-2">
            <div className="flex items-center gap-2">
                <span className="avatar">
                    <Image
                        width={32}
                        height={32}
                        src="/dev.png"
                        alt="user's image"
                    />
                </span>
                <div className="flex flex-col">
                    <span className="username font-semibold">@dev0xgenius</span>
                    <span className="work">Web Designer</span>
                </div>
            </div>
            <div className="card-body p-0">
                <span className=""></span>
                <span className="card-title">Learning Redux?</span>
                <p className="card__subtitle">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                    aspernatur reprehenderit iure et libero quas?
                </p>
            </div>
            <div className="card-actions">
                <button>Like</button>
                <span>123 Likes</span>
            </div>
        </div>
    );
}
