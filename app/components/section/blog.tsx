import { BlogOverviewCard } from "../ui/blog-overview-card";

const blogs = [{}, {}];

export default function BlogOverview() {
    return (
        <div>
            <ul className="list flex-row max-w-full overflow-auto gap-4">
                {blogs.map((blog, index) => (
                    <li key={index} className="list-row min-w-fit rounded-sm">
                        <BlogOverviewCard />
                    </li>
                ))}
            </ul>
        </div>
    );
}
