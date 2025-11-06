import { cn } from "@/libs/utils/cn";
import Image from "next/image";

interface cardProps {
    id: string;
    title: string;
    text: string;
    icon: string;
}

export const Card = ({ id, title, text, icon }: cardProps) => {
    return (
        <div className="bg-grayClr border border-primaryClr rounded-2xl px-7 py-9 flex flex-col">
            <h3 className="card-title">{title}</h3>
            <p className="mt-4 mb-6">{text}</p>
            <div className="flex items-center justify-between mt-auto">
                <span className="shrink-0">
                    <Image src={icon} alt={title} width={70} height={70} />
                </span>
                <h4
                    className={cn(
                        "text-6xl font-bold",
                        "lg:text-7xl",
                        "text-outline"
                    )}
                >
                    {id}.
                </h4>
            </div>
        </div>
    );
};

export default Card;
