import { BlogOverviewCard } from "../ui/blog-overview-card";

const blogs = [{}];

export default function BlogOverview() {
    return (
        <div>
            <ul className="gap-2 list px-2">
                {blogs.map((blog, index) => (
                    <li
                        key={index}
                        className="list-row flex p-0 w-full rounded-sm"
                    >
                        <BlogOverviewCard />
                    </li>
                ))}
            </ul>
        </div>
    );
}
