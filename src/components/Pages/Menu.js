import HeroImage from "../HeroImage/HeroImage";
import pork from "../../assets/pork-chop.jpg";

const Menu = () => {
    return (
        <main>
            <HeroImage image={pork}>
                <h1 className="shaded-heading">Menu</h1>
            </HeroImage>
            <section className="main-body">
                <p>This is the menu page</p>
            </section>
        </main>
    )
}

export default Menu;