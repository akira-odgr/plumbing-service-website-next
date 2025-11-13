import Cta from "@/components/layout/Cta";
import { AboutSec } from "./Home-sections/AboutSec";
import { HeroSec } from "./Home-sections/HeroSec";
import { OurBlog } from "./Home-sections/OurBlog";
import { OurExperience } from "./Home-sections/OurExperience";
import { ServicesSec } from "./Home-sections/ServicesSec";
import { Testimonials } from "./Home-sections/Testimonials";

export default function Home() {
    return (
        <>
            <HeroSec />
            <AboutSec />
            <ServicesSec />
            <OurExperience />
            <OurBlog />
            <Testimonials />
            <Cta />
        </>
    );
}
