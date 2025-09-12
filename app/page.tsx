import BlogOverview from "./components/section/blog";
import Footer from "./components/section/footer";
import { Hero } from "./components/section/hero";
import Projects from "./components/section/projects";

export default function Home() {
    return (
        <div className="flex flex-col gap-8">
            <Hero />
            <Projects />
            <BlogOverview />
            <Footer />
        </div>
    );
}
