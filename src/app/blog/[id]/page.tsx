"use client";

import { blogDetailItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";

export const BlogDetails = ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = use(params);
    const post = blogDetailItems.find((item) => item.id === id);

    if (!post) return notFound();

    return (
        <section className={cn("py-32", "lg:py-40")}>
            <div className="container">
                {/* Title */}
                <div
                    className={cn(
                        "text-center max-w-xl mx-auto mb-10 space-y-2",
                        "md:mb-18",
                        "lg:mb-24"
                    )}
                >
                    <h2>Blog Detail</h2>
                    <p>
                        Discover helpful plumbing tips, maintenance advice, and
                        expert insights from the Plufi team.
                    </p>
                </div>
                {/* Image */}
                <div className={cn("mr-8 mb-9", "md:float-left")}>
                    <Image
                        src={post.img}
                        alt={post.title}
                        width={361}
                        height={243}
                        className="rounded-xl"
                    />
                </div>
                {/* Content */}
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-balance">
                        <span>{post.id}.</span>
                        {post.title}
                    </h2>

                    <div className="space-y-5">
                        <p className="float-right">{post.description}</p>
                        <div>
                            <h3 className="card-title">Introduction:</h3>
                            <p>{post.intro}</p>
                        </div>

                        {/* list */}
                        <div className="space-y-3">
                            <h3 className="card-title">Main Content:</h3>
                            <ul className="space-y-4">
                                {post.list.map((item) => (
                                    <li key={item.id}>
                                        <h3 className="text-lg">
                                            {item.title}
                                        </h3>
                                        <p>{item.label}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
