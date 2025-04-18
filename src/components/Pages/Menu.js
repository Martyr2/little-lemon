import HeroImage from "../HeroImage/HeroImage";
import pasta from "../../assets/pasta-plate.jpg";

const Menu = () => {
    return (
        <main>
            <HeroImage image={pasta}>
                <h1 className="shaded-heading">Menu</h1>
            </HeroImage>
            <section>
                <p>This is the menu page</p>
            </section>
        </main>
    )
}

export default Menu;