import { footerList, socialIcons } from "@/data/data";
import { cn } from "@/libs/utils/cn";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="pt-20 pb-10">
            <div className="container">
                {/* Footer top */}
                <div
                    className={cn(
                        "space-y-8",
                        "sm:grid sm:gap-6 sm:grid-cols-2",
                        "lg:grid-cols-[1fr_0.7fr_0.9fr_0.7fr]"
                    )}
                >
                    {/* Footer brand */}
                    <div className="space-y-4">
                        <span>
                            <Image
                                src={"/images/footer-logo.png"}
                                alt="footer logo"
                                width={79}
                                height={40}
                            />
                        </span>
                        <p className="mt-2.5">
                            Quality plumbing solutions for homes and businesses.
                        </p>

                        {/* Social links */}
                        <div className="flex items-center gap-5">
                            {socialIcons.map((item) => (
                                <a
                                    key={item.id}
                                    href="#"
                                    className={cn(
                                        "transition-colors",
                                        "hover:text-primaryClr"
                                    )}
                                >
                                    <item.icon size={30} />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Footer list */}
                    {footerList.map((item) => (
                        <div key={item.id}>
                            <p className="font-semibold">{item.title}</p>
                            <ul className="space-y-1.5 mt-3">
                                {item.list.map((label, index) => (
                                    <li key={index}>
                                        {item.id === 3 ? (
                                            <Link
                                                href={`/${label}`}
                                                className="hover:underline"
                                            >
                                                {label}
                                            </Link>
                                        ) : (
                                            <a
                                                href="#"
                                                className="hover:underline"
                                            >
                                                {label}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Footer bottom */}
                <p className="mt-14">
                    &copy; {new Date().getFullYear()} Made with Keencoding.All
                    rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
