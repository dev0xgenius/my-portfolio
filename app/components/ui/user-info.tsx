import clsx from "clsx";
import Image from "next/image";

export interface UserInfoProps {
    img: string;
    username: string;
    role: string;
}

export default function UserInfo({
    img,
    username,
    role,
    className,
}: UserInfoProps & React.ComponentProps<"div">) {
    return (
        <div className={clsx(`flex items-center gap-2`, className)}>
            <figure className="avatar">
                <span className="border rounded-full">
                    <Image
                        src={img}
                        alt="Author's avatar"
                        width={48}
                        height={48}
                    />
                </span>
            </figure>
            <div className="flex flex-col">
                <span className="font-semibold">@{username}</span>
                <span>{role}</span>
            </div>
        </div>
    );
}
