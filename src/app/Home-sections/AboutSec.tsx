"use client";

import { aboutSecItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import { RiCheckboxCircleLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

export const AboutSec = () => {
    return (
        <section className={cn("py-28", "lg:py-20")}>
            <div
                className={cn(
                    "container grid gap-[52px]",
                    "lg:grid-cols-2 lg:items-center"
                )}
            >
                {/* content */}
                <div>
                    <p className="subtitle">About Us</p>
                    <h2>We are avalible for 24/7 Emergency Service</h2>
                    <p className="mt-4 mb-5">
                        When plumbing problems strike, you need a team you can
                        trust. With over a decade of experience serving
                        homeowners and businesses, we&apos;ve built our
                        reputation on reliability, quality workmanship, and
                        honest pricing. Our licensed professionals are equipped
                        with the latest tools and techniques to handle any
                        plumbing challenge, from simple repairs to complex
                        installations.
                    </p>

                    {/* List */}
                    <div className="space-y-4">
                        <h3>Our commitments to you:</h3>
                        <ul className="space-y-4">
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
                        </ul>
                    </div>

                    {/* Btn */}
                    <Link
                        href={"/about"}
                        className={cn("primary-btn", "mt-[49px] inline-block")}
                    >
                        learn more
                    </Link>
                </div>
                {/* Image */}
                <div className="max-w-max mx-auto">
                    <Image
                        src="/images/section-img-1.png"
                        alt="section image"
                        width={582}
                        height={572}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSec;
