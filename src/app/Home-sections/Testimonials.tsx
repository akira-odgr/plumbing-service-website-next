"use client";

import Title from "@/components/ui/Title";
import { testimonialsCardItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/motion/animation";

export const Testimonials = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3 }}
            viewport={{ once: true }}
            className="bg-primaryClr py-20"
        >
            <div
                className={cn(
                    "container grid gap-16",
                    "lg:grid-cols-[0.5fr_1fr] lg:items-start"
                )}
            >
                {/* content */}
                <div>
                    <Title
                        subtitle="Testimonials"
                        title="What our clients say about us"
                        text="Don't just take our word for it hear from the customers who've experienced our exceptional plumbing services firsthand."
                        classes="text-white space-y-4"
                    />
                    {/* Btn */}
                    <motion.button
                        variants={fadeInUp}
                        className={cn("primary-btn", "mt-4")}
                    >
                        learn more
                    </motion.button>
                </div>
                {/* Card wrapper */}
                <div className={cn("grid gap-6", "sm:grid-cols-2")}>
                    {testimonialsCardItems.map((item) => (
                        // Card
                        <motion.div
                            variants={fadeInUp}
                            key={item.id}
                            className="bg-white p-6 rounded-xl flex flex-col space-y-1.5"
                        >
                            <p className="font-medium">{item.text}</p>
                            <div className="flex items-center gap-2.5 mt-auto">
                                {/* Image */}
                                <div>
                                    <Image
                                        src={item.img}
                                        alt={item.name}
                                        width={55}
                                        height={55}
                                        className="rounded-full shrink-0 aspect-square object-cover"
                                    />
                                </div>
                                {/* text */}
                                <p className="card-title">{item.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Testimonials;
