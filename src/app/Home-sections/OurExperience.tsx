"use client";

import Title from "@/components/ui/Title";
import { ourExperienceSecItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import Image from "next/image";

export const OurExperience = () => {
    return (
        <section className={cn("bg-primaryClr py-22", "lg:py-40")}>
            <div
                className={cn(
                    "container grid gap-[61px]",
                    "lg:grid-cols-2 lg:items-center"
                )}
            >
                {/* content */}
                <div>
                    <Title
                        subtitle="Our Experience"
                        title="Building Trust Through Quality Service"
                        text="With over 15 years in the plumbing industry, we've earned the trust of thousands of satisfied customers across the region.Our commitment to excellence and customer satisfaction has made us the go-to choice for reliable plumbing services."
                        classes="text-white space-y-4"
                    />

                    {/* Status */}
                    <div
                        className={cn(
                            "text-white mt-9 flex flex-wrap items-center gap-4",
                            "sm:gap-7",
                            "lg:gap-10"
                        )}
                    >
                        {ourExperienceSecItems.map((item) => (
                            // Stat
                            <div key={item.id}>
                                <h3 className={cn("text-3xl", "sm:text-4xl")}>
                                    {item.value}
                                    {item.id === 2 && "k"}+
                                </h3>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Image */}
                <div className="max-w-max mx-auto">
                    <Image
                        src={"/images/section-img-2.png"}
                        alt="section image"
                        width={356}
                        height={503}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default OurExperience;
