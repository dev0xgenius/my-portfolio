import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="user flex gap-2 items-center px-4">
                    <div className="avatar">
                        <span className="rounded-full size-12">
                            <Image
                                width={360}
                                height={480}
                                src="/dev.png"
                                alt="user's image"
                            />
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span>@dev0xgenius</span>
                        <span>Web Developer</span>
                    </div>
                </div>
                <div className="card rounded-none">
                    <figure className="image-full">
                        <Image
                            width={360}
                            height={480}
                            alt="Learning Image"
                            src="/nice-bg.jpg"
                        />
                    </figure>
                    <div className="card-body gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="card-title">Mastering Redux</span>
                            <p>
                                Lorem ipsum dev tekka isum sumer tendar isoke
                                suka Lorem ipsum dev tekka isum sumer tendar
                                isoke suka Lorem ipsum dev tekka isum sumer
                                tendar isoke suka...{" "}
                                <b className="text-info">See more</b>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <span className="indicator">5mins read</span>
                                <span>20/09/2025</span>
                            </div>
                            <div className="card-actions">
                                <button>Like</button>
                                <button>Comment</button>
                                <button>Share</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="user flex gap-2 items-center px-4">
                    <div className="avatar">
                        <span className="rounded-full size-12">
                            <Image
                                width={360}
                                height={480}
                                src="/dev.png"
                                alt="user's image"
                            />
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span>@dev0xgenius</span>
                        <span>Web Developer</span>
                    </div>
                </div>
                <div className="card rounded-none">
                    <figure className="image-full">
                        <Image
                            width={360}
                            height={480}
                            alt="Learning Image"
                            src="/nice-bg.jpg"
                        />
                    </figure>
                    <div className="card-body gap-8">
                        <div className="flex flex-col gap-2">
                            <span className="card-title">Mastering Redux</span>
                            <p>
                                Lorem ipsum dev tekka isum sumer tendar isoke
                                suka Lorem ipsum dev tekka isum sumer tendar
                                isoke suka Lorem ipsum dev tekka isum sumer
                                tendar isoke suka...{" "}
                                <b className="text-info">See more</b>
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <span className="indicator">5mins read</span>
                                <span>20/09/2025</span>
                            </div>
                            <div className="card-actions">
                                <button>Like</button>
                                <button>Comment</button>
                                <button>Share</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
