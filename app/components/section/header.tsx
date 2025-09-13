import Link from "next/link";

export function Header() {
    return (
        <header className="border-b-2 border-gray-300">
            <div className="navbar m-0 p-4 bg-base-100 gap-4">
                <Link href="/" className="link">
                    Home
                </Link>
                <Link href="/blog" className="link">
                    Blog
                </Link>
                <Link href="/projects" className="link">
                    Projects
                </Link>
                <button className="btn-neutral btn btn-sm mr-0 m-auto">
                    Download CV
                </button>
            </div>
        </header>
    );
}
