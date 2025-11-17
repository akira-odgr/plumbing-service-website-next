import InputField from "@/components/ui/InputField";
import { ctaListItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";

export const ContactUsPage = () => {
    return (
        <section className={cn("pt-32 pb-20", "lg:pt-40")}>
            <div className={cn("container space-y-10", "lg:space-y-20")}>
                {/* Title */}
                <div className="text-center max-w-xl mx-auto">
                    <h2>Contact Us</h2>
                    <p>
                        Ready to solve your plumbing problems? We&apos;re here
                        to help with fast, reliable service you can
                        trust.Contact us today for professional plumbing
                        solutions and upfront pricing.
                    </p>
                </div>
                {/* wrapper */}
                <div className={cn("grid", "lg:grid-cols-[0.9fr_1fr]")}>
                    {/* Contact */}
                    <div className="bg-primaryClr p-8 rounded-xl text-white space-y-2.5">
                        <p className="subtitle">Contact us</p>
                        <h2>Need More information? Get in Touch</h2>
                        <p>
                            Have question about our plumbing services or need
                            expert advice for your project? we&apos;re here to
                            help with professional guidance and reliable
                            solutions.
                        </p>

                        {/* List */}
                        <ul
                            className={cn(
                                "grid gap-5 mt-8",
                                "md:grid-cols-2",
                                "lg:grid-cols-1"
                            )}
                        >
                            {ctaListItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="flex items-center gap-3.5"
                                >
                                    <span className="shrink-0">
                                        <item.icon size={40} />
                                    </span>

                                    <div className="space-y-1.5">
                                        <h3 className="card-title">
                                            {item.title}
                                        </h3>
                                        <p>{item.label}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Form wrapper */}
                    <div className={cn("p-7 my-auto", "lg:p-[50px]")}>
                        {/* Title */}
                        <h2>Send Message</h2>
                        <p>
                            Ready to get started? Fill out the form below with
                            details about your plumbing needs, and we'll get
                            back to you promptly with personalized solutions.
                        </p>

                        {/* Form */}
                        <form action="" className="grid space-y-4">
                            <InputField />
                            <textarea
                                placeholder="Write message"
                                className={cn(
                                    "h-44 border border-primaryClr/50 indent-5 py-4 resize-none rounded-lg outline-none placeholder-gray-800",
                                    "focus:border-secondaryClr-1"
                                )}
                            />

                            <button className="primary-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsPage;
