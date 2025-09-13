import BlogOverview from "./components/section/blog";
import Footer from "./components/section/footer";
import { Hero } from "./components/section/hero";
import Projects from "./components/section/projects";

export default function Home() {
    return (
        <>
            <Hero />
            <BlogOverview />
            <Projects />
            <Footer />
        </>
    );
}
