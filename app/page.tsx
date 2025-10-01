import BlogOverview from "./components/section/blog";
import { Hero } from "./components/section/hero";
import Projects from "./components/section/projects";

export default function Home() {
    return (
        <>
            <Hero />
            {/* <div className="size-0.5 bg-neutral rounded-full w-1/2 m-auto mr-0" /> */}
            <BlogOverview />
            {/* <div className="size-0.5 bg-neutral rounded-full w-1/2 m-auto" /> */}
            <Projects />
            {/* <Footer /> */}
        </>
    );
}
