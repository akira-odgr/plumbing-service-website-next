import { AboutSec } from "./Home-sections/AboutSec";
import { HeroSec } from "./Home-sections/HeroSec";
import { ServicesSec } from "./Home-sections/ServicesSec";

export default function Home() {
    return (
        <>
            <HeroSec />
            <AboutSec />
            <ServicesSec />
        </>
    );
}
