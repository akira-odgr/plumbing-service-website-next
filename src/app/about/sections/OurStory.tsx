import Title from "@/components/ui/Title";
import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import React from "react";

export const OurStory = () => {
    return (
        <section className={cn("py-22", "lg:py-40")}>
            <div
                className={cn(
                    "container grid gap-12",
                    "lg:grid-cols-[1fr_0.9fr] lg:gap-18 lg:items-center"
                )}
            >
                {/* Content */}
                <div className="space-y-6">
                    <Title
                        subtitle="our story"
                        title="From Humble Beginnings to Trusted Experts"
                        text="Plufi was founded with a simple belief: every customer deserves honest, reliable plumbing service at a fair price. What began as a one-person operation has evolved into a full-service plumbing company, but our core values remain unchanged."
                        classes={cn("space-y-4 max-w-xl", "lg:max-w-none")}
                    />
                    <p className={cn("max-w-xl", "lg:max-w-none")}>
                        We&apos;ve grown through word-of-mouth recommendations
                        and repeat customers who trust us with their most
                        important plumbing needs. Every job we complete, from
                        the smallest repair to the largest installation,
                        reflects our commitment to doing things the right way.
                    </p>
                </div>
                {/* Image */}
                <div className="max-w-max mx-auto">
                    <Image
                        src={"/images/section-img-3.png"}
                        alt="section image"
                        width={527}
                        height={468}
                        className="rounded-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default OurStory;
