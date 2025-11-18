"use client";

import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/motion/animation";

interface cardProps {
    id: number;
    img: string;
    title: string;
    date: string;
}

export const BlogCard = ({ id, img, title, date }: cardProps) => {
    return (
        <motion.div
            variants={fadeInUp}
            className="border border-primaryClr/25 p-3 rounded-xl"
        >
            {/* Image */}
            <div>
                <Image
                    src={img}
                    alt={title}
                    width={361}
                    height={243}
                    className="w-full h-auto rounded-lg"
                />
            </div>
            {/* Content */}
            <div>
                <Link
                    href={`/blog/${id}`}
                    className={cn(
                        "card-title",
                        "mt-4 mb-7 inline-block leading-tight",
                        "hover:text-primaryClr"
                    )}
                >
                    {title}
                </Link>
                <p>{date}</p>
            </div>
        </motion.div>
    );
};

export default BlogCard;
