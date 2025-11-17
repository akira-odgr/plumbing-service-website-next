import BlogCard from "@/components/ui/BlogCard";
import { blogPageCardItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";

export const BlogPage = () => {
    return (
        <section className={cn("pt-32 pb-20", "lg:pt-40")}>
            <div className={cn("container space-y-10", "lg:space-y-16")}>
                {/* Title */}
                <div className="text-center max-w-xl mx-auto">
                    <h2>Blog</h2>
                    <p>
                        Discover helpful plumbing tips, maintenance advice, and
                        expert insights from the Plufi team.
                    </p>
                </div>
                {/* Card wrapper */}
                <div
                    className={cn(
                        "grid gap-4",
                        "sm:grid-cols-2",
                        "lg:grid-cols-3"
                    )}
                >
                    {blogPageCardItems.map((item) => (
                        <BlogCard key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
