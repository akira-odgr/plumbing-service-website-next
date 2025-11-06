import { AboutSec } from "./Home-sections/AboutSec";
import { HeroSec } from "./Home-sections/HeroSec";
import { OurBlog } from "./Home-sections/OurBlog";
import { OurExperience } from "./Home-sections/OurExperience";
import { ServicesSec } from "./Home-sections/ServicesSec";

export default function Home() {
    return (
        <>
            <HeroSec />
            <AboutSec />
            <ServicesSec />
            <OurExperience />
            <OurBlog />
        </>
    );
}
