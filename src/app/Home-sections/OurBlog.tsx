"use client";

import { BlogCard } from "@/components/ui/BlogCard";
import { Title } from "@/components/ui/Title";
import { blogSecCardItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/motion/animation";

export const OurBlog = () => {
    return (
        <section className="py-22">
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.3 }}
                viewport={{ once: true }}
                className="container"
            >
                {/* Title */}
                <div className="flex items-center justify-between gap-10 flex-wrap">
                    <Title
                        subtitle="Our Blog"
                        title="Latest plumbing tips and industry updates"
                        classes="max-w-lg"
                    />
                    {/* Btn */}
                    <motion.div variants={fadeInUp}>
                        <Link href={"/blog"} className="primary-btn">
                            Browse all Articles
                        </Link>
                    </motion.div>
                </div>
                {/* Card wrapper */}
                <div
                    className={cn(
                        "mt-16 grid gap-3.5",
                        "sm:grid-cols-2",
                        "lg:grid-cols-3"
                    )}
                >
                    {blogSecCardItems.map((item) => (
                        <BlogCard key={item.id} {...item} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default OurBlog;
