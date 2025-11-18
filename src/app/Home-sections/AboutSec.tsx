"use client";

import { aboutSecItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import { RiCheckboxCircleLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/motion/animation";

export const AboutSec = () => {
    return (
        <section className={cn("py-28", "lg:py-20")}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.3 }}
                viewport={{ once: true }}
                className={cn(
                    "container grid gap-[52px]",
                    "lg:grid-cols-2 lg:items-center"
                )}
            >
                {/* content */}
                <div>
                    <motion.p variants={fadeInUp} className="subtitle">
                        About Us
                    </motion.p>
                    <motion.h2 variants={fadeInUp}>
                        We are avalible for 24/7 Emergency Service
                    </motion.h2>
                    <motion.p variants={fadeInUp} className="mt-4 mb-5">
                        When plumbing problems strike, you need a team you can
                        trust. With over a decade of experience serving
                        homeowners and businesses, we&apos;ve built our
                        reputation on reliability, quality workmanship, and
                        honest pricing. Our licensed professionals are equipped
                        with the latest tools and techniques to handle any
                        plumbing challenge, from simple repairs to complex
                        installations.
                    </motion.p>

                    {/* List */}
                    <div className="space-y-4">
                        <motion.h3 variants={fadeInUp}>
                            Our commitments to you:
                        </motion.h3>
                        <motion.ul variants={fadeInUp} className="space-y-4">
                            {aboutSecItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center gap-[15px]"
                                >
                                    {/* Icon */}
                                    <span>
                                        <RiCheckboxCircleLine />
                                    </span>
                                    {/* Text */}
                                    <p>{item.label}</p>
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Btn */}
                    <motion.div variants={fadeInUp}>
                        <Link
                            href={"/about"}
                            className={cn(
                                "primary-btn",
                                "mt-[49px] inline-block"
                            )}
                        >
                            learn more
                        </Link>
                    </motion.div>
                </div>
                {/* Image */}
                <motion.div variants={fadeIn} className="max-w-max mx-auto">
                    <Image
                        src="/images/section-img-1.png"
                        alt="section image"
                        width={582}
                        height={572}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSec;
