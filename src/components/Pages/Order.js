import HeroImage from "../HeroImage/HeroImage";
import wings from "../../assets/wings-flatbread.jpg";

const Order = () => {
    return (
        <main>
            <HeroImage image={wings}>
                <h1 className="shaded-heading">Order Online</h1>
            </HeroImage>
            <section className="main-body">
                <p>This is the order online page</p>
            </section>
        </main>
    )
}

export default Order;