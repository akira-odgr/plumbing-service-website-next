import Title from "@/components/ui/Title";
import { socialIcons, teamCardItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import { RiAddLine } from "@remixicon/react";
import Image from "next/image";

export const OurTeam = () => {
    return (
        <section className="bg-grayClr/25 py-22">
            <div className="container">
                {/* Title */}
                <Title
                    subtitle="Expert Plumbers"
                    title="Meet our Team"
                    text="Our skilled professionals bring years of experience and dedication to every job."
                    classes="text-center max-w-md mx-auto"
                />

                {/* Card wrapper */}
                <div
                    className={cn(
                        "grid gap-3.5 mt-20",
                        "sm:grid-cols-2",
                        "lg:grid-cols-3",
                        "xl:grid-cols-4"
                    )}
                >
                    {teamCardItems.map((item) => (
                        // Card
                        <div
                            key={item.id}
                            className="relative bg-grayClr-2 rounded-lg pt-10"
                        >
                            <div className="max-w-max mx-auto">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={288}
                                    height={347}
                                />
                            </div>

                            {/* Info */}
                            <div className="absolute bottom-5 left-0 right-0 bg-secondaryClr max-w-5/6 mx-auto w-full rounded-xl p-4 space-y-2">
                                {/* Icon */}
                                <div
                                    className={cn(
                                        "relative group bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto -mt-9 transition-colors",
                                        "hover:bg-primaryClr",
                                        "focus:bg-primaryClr focus:text-white"
                                    )}
                                >
                                    {/* Btn */}
                                    <button className="group-hover:text-white">
                                        <RiAddLine />
                                    </button>
                                    {/* Social link */}
                                    <div
                                        className={cn(
                                            "absolute flex items-center justify-self-center bg-white shadow-sm -top-11 p-2 gap-2 rounded-full opacity-0 invisible transition-all",
                                            "group-hover:visible group-hover:opacity-100"
                                        )}
                                    >
                                        {socialIcons.map((item) => (
                                            <a
                                                key={item.id}
                                                href="#"
                                                className={cn(
                                                    "transition-colors",
                                                    "hover:text-secondaryClr-1"
                                                )}
                                            >
                                                <item.icon />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="text-center space-y-1.5">
                                    <h3 className="card-title">{item.name}</h3>
                                    <p>{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
