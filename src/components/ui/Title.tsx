import { cn } from "@/libs/utils/cn";

interface titleProps {
    subtitle: string;
    title: string;
    text: string;
    classes: string;
}

export const Title = ({ subtitle, title, text, classes }: titleProps) => {
    return (
        <div className={cn(classes)}>
            <div>
                <p>{subtitle}</p>
                <h2>{title}</h2>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default Title;
