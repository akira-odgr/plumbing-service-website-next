import Title from "@/components/ui/Title";
import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import React from "react";

export const AboutUs = () => {
    return (
        <section className={cn("pt-32", "lg:pt-40")}>
            <div className={cn("container space-y-10", "lg:space-y-14")}>
                {/* Title */}
                <Title
                    subtitle="About Us"
                    title="Delivering Reliable Solutions for Over 15 Years"
                    text="Since 2009, Plufi has been a trusted plumbing partner, serving thousands of satisfied customers in our community."
                    classes={cn(
                        "max-w-xl text-center mx-auto",
                        "lg:max-w-[655px]"
                    )}
                />

                {/* Image */}
                <div className="max-w-max mx-auto">
                    <Image
                        src={"/images/about-page-banner.png"}
                        alt="about page banner"
                        width={1195}
                        height={527}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
