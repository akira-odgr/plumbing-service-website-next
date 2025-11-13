import { ctaListItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import Link from "next/link";

export const Cta = () => {
    return (
        <section className="bg-secondaryClr pt-8">
            <div
                className={cn(
                    "container grid",
                    "lg:grid-cols-[1fr_0.7fr] lg:item-end"
                )}
            >
                {/* Content */}
                <div className="my-14">
                    <h2 className="max-w-lg">
                        Have a Problem we’ll fix it today
                    </h2>
                    {/* list */}
                    <ul className={cn("grid gap-5 mt-8", "md:grid-cols-2")}>
                        {ctaListItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-start gap-3.5"
                            >
                                <span className="shrink-0">
                                    <item.icon size={40} />
                                </span>

                                <div className="space-y-1.5">
                                    <h3 className="card-title">{item.title}</h3>
                                    <p>{item.label}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Btn */}
                    <Link href={"/contact"} className="secondary-btn py-3">
                        Contact Us
                    </Link>
                </div>
                {/* Image */}
                <div className="max-w-max mx-auto">
                    <Image
                        src={"/images/cta-img.png"}
                        alt="cta image"
                        width={501}
                        height={503}
                    />
                </div>
            </div>
        </section>
    );
};

export default Cta;
