import HeroImage from "../HeroImage/HeroImage";
import pasta from "../../assets/pasta-plate.jpg";

const Order = () => {
    return (
        <main>
            <HeroImage image={pasta}>
                <h1 className="shaded-heading">Order Online</h1>
            </HeroImage>
            <section>
                <p>This is the order online page</p>
            </section>
        </main>
    )
}

export default Order;