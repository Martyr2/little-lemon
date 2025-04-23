import HeroImage from "../HeroImage/HeroImage";

// Image assets
import pasta from "../../assets/pasta-plate.jpg";
import grill from "../../assets/grill-sm.jpg";

const About = () => {
    return (
        <main>
            <HeroImage image={pasta}>
                <h1 className="shaded-heading">About</h1>
            </HeroImage>
            
            <section className="main-body">
                <h2>OUR STORY</h2>
                <div className="about-image-container">
                    <img src={grill} alt="Little Lemon Home" className="about-image"/>
                    <div className="about-image-text">
                        <p>From the humble kitchen of Little Lemon, to the bustling streets of Chicago, our story is a tale of passion, tradition, and the art of crafting delicious dishes that transport you to a culinary paradise. Founded in 2004 by our visionary owner, Chef John Doe, Little Lemon has been a beacon of culinary excellence for generations. With an excellent staff and a commitment to quality ingredients, Little Lemon has earned a reputation as a destination for food enthusiasts who seek authentic Mediterranean flavors.</p>
                        <p>Try our menu today and indulge in a culinary experience that will leave you craving for more! We are sure you are going to love it.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;