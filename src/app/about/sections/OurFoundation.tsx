import Title from "@/components/ui/Title";
import { ourFoundationCardItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import React from "react";

export const OurFoundation = () => {
    return (
        <section className={cn("py-22", "lg:py-40")}>
            <div className="container space-y-18">
                {/* Title */}
                <Title
                    subtitle="Our Foundation"
                    title="The Principles Behind Our Success"
                    classes="text-center max-w-xl mx-auto"
                />
                {/* Card wrapper */}
                <div
                    className={cn(
                        "grid gap-11",
                        "sm:grid-cols-2",
                        "xl:grid-cols-4"
                    )}
                >
                    {ourFoundationCardItems.map((item) => (
                        <div
                            key={item.id}
                            className={cn(
                                "flex items-start gap-7",
                                "xl:flex-col xl:gap-5"
                            )}
                        >
                            {/* Icon */}
                            <span
                                className={cn(
                                    "w-20 h-20 bg-secondaryClr shrink-0 rounded-full flex items-center justify-center text-primaryClr mx-auto"
                                )}
                            >
                                <item.icon size={40} />
                            </span>

                            {/* content */}
                            <div>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurFoundation;
