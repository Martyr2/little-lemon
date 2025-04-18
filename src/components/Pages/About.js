import HeroImage from "../HeroImage/HeroImage";
import pasta from "../../assets/pasta-plate.jpg";

const About = () => {
    return (
        <main>
            <HeroImage image={pasta}>
                <h1 className="shaded-heading">About</h1>
            </HeroImage>
            <section className="main-body">
                <p>This is the about page</p>
            </section>
        </main>
    )
}

export default About;