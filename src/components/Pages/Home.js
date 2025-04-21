import homesplash from "../../assets/home-splash.png";
import greek from "../../assets/greek-salad-sm.jpg";
import bruchetta from "../../assets/bruchetta-sm.jpg";
import pasta from "../../assets/pasta-sm.jpg";
import seafood from "../../assets/seafood-lunch.png";
import Card from "../Card/Card";

const Home = () => {
    const cardButtonClickHandler = () => {
        window.location.href = "/menu";
    }

    const ctaClickHandler = () => {
        window.location.href = "/reservations";
    }

    return (
        <main>
            <section className="home-container">
                <div className="home-heading">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    
                    <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>

                    <button className="btn-primary" onClick={ctaClickHandler}>Reserve a Table</button>
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
                <p>"The food was amazing and the service was great! I can't wait to come back!"</p>
            </section>

            <section className="about-container">
                <h3>ABOUT</h3>
                <p>"The food was amazing and the service was great! I can't wait to come back!"</p>
            </section>
        </main>
    )
}

export default Home;