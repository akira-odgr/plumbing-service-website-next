import { Variants } from "framer-motion";

export const fadeInUp: Variants = {
    hidden: {
        y: 30,
        opacity: 0,
        filter: "blur(5px)",
    },
    visible: {
        y: 0,
        opacity: 1,
        filter: "blur(0)",
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(5px)",
    },
    visible: {
        opacity: 1,
        filter: "blur(0)",
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};
