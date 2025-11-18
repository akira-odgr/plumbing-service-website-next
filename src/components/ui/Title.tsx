"use client";

import { cn } from "@/libs/utils/cn";
import { fadeInUp } from "@/motion/animation";
import { motion } from "framer-motion";

interface titleProps {
    subtitle: string;
    title: string;
    text?: string;
    classes: string;
}

export const Title = ({ subtitle, title, text, classes }: titleProps) => {
    return (
        <div className={cn(classes)}>
            <div>
                <motion.p variants={fadeInUp}>{subtitle}</motion.p>
                <motion.h2 variants={fadeInUp}>{title}</motion.h2>
            </div>
            <motion.p variants={fadeInUp}>{text}</motion.p>
        </div>
    );
};

export default Title;
