"use client";

import { motion } from "framer-motion";
import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { fadeIn, fadeInUp } from "@/motion/animation";

export const HeroSec = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.3 }}
            viewport={{ once: true }}
        >
            {/* wrapper */}
            <div className="bg-primaryClr pt-28">
                <div
                    className={cn(
                        "container",
                        "relative grid gap-[51px] z-10",
                        "lg:grid-cols-2 lg:items-center"
                    )}
                >
                    {/* content */}
                    <div className="text-white">
                        <motion.p
                            variants={fadeInUp}
                            className="subtitle mb-1.5"
                        >
                            Read for help you
                        </motion.p>
                        <motion.h1
                            variants={fadeInUp}
                            className={cn(
                                "text-4xl",
                                "sm:text-5xl",
                                "xl:text-[56px]"
                            )}
                        >
                            Expert Plumbing{" "}
                            <span className="text-secondaryClr">service</span>{" "}
                            provider
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="mt-4 mb-10 max-w-lg"
                        >
                            From emergency repairs to complete installations, we
                            deliver fast, reliable plumbing solutions for your
                            home and business.
                        </motion.p>

                        {/* Btn */}
                        <motion.div variants={fadeInUp}>
                            <Link href={"/about"} className="primary-btn">
                                learn more
                            </Link>
                        </motion.div>
                    </div>
                    {/* Image */}
                    <motion.div variants={fadeIn} className="relative z-10">
                        <Image
                            src="/images/hero-img.png"
                            alt="hero image"
                            width={647}
                            height={600}
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Hero cards */}
            <div
                className={cn(
                    "container space-y-5 relative z-10 flex flex-col",
                    "sm:flex-row sm:items-center sm:-space-x-7",
                    "md:-mt-20"
                )}
            >
                {/* Card 01 */}
                <motion.div
                    variants={fadeInUp}
                    className={cn(
                        "w-full bg-white shadow-lg pl-[21px] pr-14 py-7 rounded-2xl flex flex-col gap-4",
                        "sm:flex-row sm:items-center",
                        "lg:max-w-[364px]"
                    )}
                >
                    {/* Icon */}
                    <div className="shrink-0">
                        <Image
                            src="/images/icon-1.svg"
                            alt="hero icon one"
                            width={64}
                            height={64}
                        />
                    </div>
                    {/* Text */}
                    <p className="font-semibold text-primaryClr font-rubik">
                        Emergency plumbing repairs available 24/7. Fast response
                        time guaranteed.
                    </p>
                </motion.div>
                {/* Card 02 */}
                <motion.div
                    variants={fadeInUp}
                    className={cn(
                        "w-full bg-secondaryClr px-[26px] py-5 rounded-xl flex flex-col shadow-sm",
                        "lg:max-w-[230px]"
                    )}
                >
                    {/* Icon */}
                    <div>
                        <Image
                            src="/images/icon-2.svg"
                            alt="hero icon two"
                            width={70}
                            height={71}
                        />
                    </div>
                    {/* Text */}
                    <p className="font-rubik text-primaryClr mt-1 mb-3.5">
                        Licensed and insured plumbing professionals with over 10
                        years of experience.
                    </p>

                    {/* Btn */}
                    <button className="secondary-btn max-w-max">hire us</button>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default HeroSec;
