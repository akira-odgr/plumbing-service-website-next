"use client";

import { Card } from "@/components/ui/Card";
import { Title } from "@/components/ui/Title";
import { servicesSecCardItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import Link from "next/link";

export const ServicesSec = () => {
    return (
        <section className="bg-grayClr/30 py-20">
            <div className="container">
                {/* Title */}
                <Title
                    subtitle="Our Services"
                    title="Explore our Services & solutions"
                    text="We offer a complete range of professional plumbing services designed to keep your water systems running smoothly."
                    classes="text-center max-w-xl mx-auto space-y-2.5"
                />

                {/* Card wrapper */}
                <div
                    className={cn(
                        "grid mt-16 gap-3",
                        "sm:grid-cols-2",
                        "lg:mt-24 lg:grid-cols-3"
                    )}
                >
                    {servicesSecCardItems.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}

                    {/* Cta card */}
                    <div className="bg-secondaryClr rounded-2xl px-7 py-6 flex flex-col">
                        {/* Icon */}
                        <span>
                            <Image
                                src="/images/icon-10.svg"
                                alt="icon"
                                width={80}
                                height={80}
                            />
                        </span>

                        {/* Text */}
                        <p className="font-rubik my-4">
                            Complete pipe repair and replacement services.
                            Licensed professionals with proven results.
                        </p>

                        {/* Btn */}
                        <Link
                            href={"/services"}
                            className={cn("secondary-btn", "mt-auto")}
                        >
                            explore more
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSec;
