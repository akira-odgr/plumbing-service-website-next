import { cn } from "@/libs/utils/cn";
import React from "react";

const inputFieldItems = [
    {
        id: 1,
        label: "First Name",
        type: "text",
    },
    {
        id: 2,
        label: "Last Name",
        type: "text",
    },
    {
        id: 3,
        label: "Email",
        type: "email",
    },
    {
        id: 4,
        label: "Phone",
        type: "text",
    },
];

export const InputField = () => {
    return (
        <div className={cn("grid gap-3.5 mt-6", "md:grid-cols-2")}>
            {inputFieldItems.map((item) => (
                <input
                    key={item.id}
                    type={item.type}
                    placeholder={item.label}
                    className={cn(
                        "outline-none w-full border border-primaryClr/50 indent-5 py-3 placeholder-gray-800 rounded-lg",
                        "focus:border-secondaryClr-1"
                    )}
                />
            ))}
        </div>
    );
};

export default InputField;
