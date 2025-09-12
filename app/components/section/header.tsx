import Link from "next/link";

export function Header() {
    return (
        <header className="px-4">
            <div className="navbar bg-base-100 flex gap-4">
                <Link href="/projects" className="link">
                    Projects
                </Link>
                <Link href="/blog" className="link">
                    Blog
                </Link>
            </div>
        </header>
    );
}
