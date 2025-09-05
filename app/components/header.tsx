import Link from "next/link";

export function Header() {
    return (
        <header>
            <div className="container">
                <Link href={"/"}>Home</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About Us</Link>
            </div>
        </header>
    );
}
