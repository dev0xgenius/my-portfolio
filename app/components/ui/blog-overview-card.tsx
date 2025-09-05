import Image from "next/image";

export interface BlogOverviewCardProps {
    title: string;
    img: string;
    description: string;
}

export function BlogOverviewCard() {
    return (
        <div className="container">
            <div className="card__header">
                <span className="user__avatar">
                    <Image
                        width={24}
                        height={24}
                        src="/somewhere.png"
                        alt="user's image"
                    />
                </span>
                <span className="username">@dev0xgenius</span>
                <span className="work">Web Designer</span>
            </div>
            <span className="card__img"></span>
            <span className="card__title">Learning Redux?</span>
            <p className="card__subtitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
                aspernatur reprehenderit iure et libero quas?
            </p>
            <div>
                <button>Like</button>
                <span>123 Likes</span>
            </div>
        </div>
    );
}
