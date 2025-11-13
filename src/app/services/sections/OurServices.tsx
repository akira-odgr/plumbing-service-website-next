import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";
import { servicesPageCardItems } from "@/data/data";
import { cn } from "@/libs/utils/cn";

export const OurServices = () => {
    return (
        <section className={cn("py-32", "lg:py-40")}>
            <div className="container">
                {/* Title */}
                <div>
                    <h2>Our Services</h2>
                    <p>
                        we provide a full range of expert plumbing services to
                        meet all your residential and commercial needs
                    </p>
                </div>
                {/* Card wrapper */}
                <div>
                    {servicesPageCardItems.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
