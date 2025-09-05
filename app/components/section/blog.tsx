import { BlogOverviewCard } from "../ui/blog-overview-card";

const blogs = [{}, {}];

export default function BlogOverview() {
    return (
        <div className="container">
            <ul>
                {blogs.map((blog, index) => (
                    <li key={index}>
                        <BlogOverviewCard />
                    </li>
                ))}
            </ul>
        </div>
    );
}
