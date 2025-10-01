"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();

    return (
        <header className="px-4 pt-4">
            <div className="navbar m-0 bg-base-100 gap-4 rounded-sm">
                <div className="navbar-start">
                    <span className="font-semibold">
                        {pathname == "/manage" ? "</>" : "<0xGenius />"}
                    </span>
                </div>
                <div className="navbar-center md:flex md:flex-row gap-4 hidden">
                    <ul>
                        <li>
                            <Link href="/" className="link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="link">
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="link">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end md:hidden">
                    <button className="btn btn-ghost shadow sticky top-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
