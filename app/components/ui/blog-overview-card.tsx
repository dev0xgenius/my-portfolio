import Image from "next/image";
import Link from "next/link";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";
import { CiClock1 } from "react-icons/ci";
import UserInfo from "./user-info";

export interface BlogOverviewCardProps {
    title: string;
    img: string;
    description: string;
}

export function BlogOverviewCard() {
    return (
        <div className="card rounded-none gap-4 p-4 w-full overflow-hidden">
            <div className="flex items-center justify-between w-full">
                <UserInfo
                    img="/dev.png"
                    username="dev0xgenius"
                    role="Web Designer"
                />
                <div className="flex flex-col items-end text-sm text-gray-500">
                    <span>20/09/2025</span>
                    <span className="flex items-center gap-1">
                        <CiClock1 />
                        <span>5mins Read</span>
                    </span>
                </div>
            </div>
            <div className="card-body p-0 h-full justify-between">
                <figure className="py-4">
                    <Image
                        src="/nice-bg.jpg"
                        width={360}
                        height={480}
                        alt="background image"
                        className="rounded-xl"
                    />
                </figure>
                <div className="gap-2 flex flex-col">
                    <span className="card-title">Learning Redux?</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Id aspernatur reprehenderit iure et libero quas?
                        <Link href={"/blogs"} className="link link-info">
                            ...See More
                        </Link>
                    </p>
                </div>
                <div className="card-actions py-2 items-baseline gap-4">
                    <button className="flex gap-1 items-center">
                        <AiOutlineHeart size={24} />
                        <span>23 Likes</span>
                    </button>
                    <button className="flex gap-1 items-center">
                        <AiOutlineComment size={24} />
                        <span>33 Comments</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
