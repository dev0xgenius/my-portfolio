import Link from "next/link";

export function Header() {
    return (
        <header className="">
            <div className="navbar bg-base-100 gap-4">
                <Link href="/projects" className="link">
                    Projects
                </Link>
                <Link href="/blog" className="link">
                    Blog
                </Link>
                <button className="btn-neutral btn btn-sm mr-0 m-auto">
                    Download CV
                </button>
            </div>
        </header>
    );
}
