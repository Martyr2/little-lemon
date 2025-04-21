import { Link } from "react-router";
import Card from "../Card/Card";
import Testimonial from "../Testimonial/Testimonial";

// Image assets
import homesplash from "../../assets/home-splash.png";
import greek from "../../assets/greek-salad-sm.jpg";
import bruchetta from "../../assets/bruchetta-sm.jpg";
import pasta from "../../assets/pasta-sm.jpg";
import seafood from "../../assets/seafood-lunch.png";

const Home = () => {
    const cardButtonClickHandler = () => {
        window.location.href = "/menu";
    }

    return (
        <main>
            <section className="home-container">
                <div className="home-heading">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    
                    <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>

                    <Link to="/reservations"><button className="btn-primary">Reserve a Table</button></Link>
                </div>
                <div className="home-image">
                    <img src={homesplash} alt="Little Lemon Home" className="home-dish"/>
                </div>
            </section>
            <section className="main-body">
                <h3>HIGHLIGHTS</h3>

                <div className="card-list">
                    <Card 
                        imageSrc={bruchetta}
                        title="Delicous Bruchetta"    
                        description="Enjoy the delicious fresh taste of our bruchetta! Made with only ripe tomatoes and our family's olive oil from Italy, you can't go wrong with this dish."
                        buttonText="Visit our menu"
                        onButtonClick={cardButtonClickHandler}
                    />
                    <Card 
                        imageSrc={greek}
                        title="Greek Salad"    
                        description="A refreshing salad made with fresh tomatoes, cucumbers, peppers, onions, olives, and feta cheese. This salad is perfect for any time of the day."
                        buttonText="Visit our menu"
                        onButtonClick={cardButtonClickHandler}
                    />
                    <Card 
                        imageSrc={pasta}
                        title="Penne Marinara"    
                        description="All of our pasta is made in house. This classic penne is to die for and we are sure you will love it."
                        buttonText="Visit our menu"
                        onButtonClick={cardButtonClickHandler}
                    />
                    <Card 
                        imageSrc={seafood}
                        title="Seafood Spaghetti"    
                        description="Any seafood lovers out there? This is the perfect dish for you! Our seafood is fresh and cooked to perfection."
                        buttonText="Visit our menu"
                        onButtonClick={cardButtonClickHandler}
                    />
                </div>
            </section>

            <section className="testimonial-container">
                <h3>TESTIMONIALS</h3>
                <Testimonial title="John Doe" text="The food was amazing and the service was great! I can't wait to come back!"/>
            </section>

            <section className="about-container">
                <h3>ABOUT</h3>
                <div className="about-image-container">
                    <div className="about-image-text">
                        <p>From the humble kitchen of Little Lemon, to the bustling streets of Chicago, our story is a tale of passion, tradition, and the art of crafting delicious dishes that transport you to a culinary paradise. Founded in 2004 by our visionary owner, Chef John Doe, Little Lemon has been a beacon of culinary excellence for generations. With an excellent staff and a commitment to quality ingredients, Little Lemon has earned a reputation as a destination for food enthusiasts who seek authentic Mediterranean flavors.</p>
                        <p>Try our menu today and indulge in a culinary experience that will leave you craving for more! We are sure you are going to love it.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;