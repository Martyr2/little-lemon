import HeroImage from "../HeroImage/HeroImage";
import MenuItem from "../MenuItem/MenuItem";

// Image assets
import pork from "../../assets/pork-chop.jpg";
import pasta from "../../assets/pasta-sm.jpg";
import greek from "../../assets/greek-salad-sm.jpg";
import bruchetta from "../../assets/bruchetta-sm.jpg";
import seafood from "../../assets/seafood-lunch.png";
import salmon from "../../assets/salmon.jpg";
import alfredo from "../../assets/alfredo.jpg";

const Menu = () => {
    // Could come in off an API call.
    const menu = [
        {
            image: bruchetta,
            title: 'Delicious Bruchetta',
            description: 'Enjoy the delicious fresh taste of our bruchetta! Made with only ripe tomatoes and our family\'s olive oil from Italy, you can\'t go wrong with this dish.',
            price: '12.99'
        },
        {
            image: pasta,
            title: 'Penne Marinara',
            description: 'This favorite is a delicious house made pasta dish that features tomatoes from our italian farm.',
            price: '19.99'
        },
        {
            image: greek,
            title: 'Greek Salad',
            description: 'Crisp and fresh, our greek salad is the perfect starter for any meal.',
            price: '13.50'
        },
        {
            image: seafood,
            title: 'Seafood Speghetti',
            description: 'Any seafood lovers out there? This is the perfect dish for you! Our seafood is fresh and cooked to perfection.',
            price: '29.99'
        },
        {
            image: salmon,
            title: 'Fresh Salmon',
            description: 'Nothing compares to the fresh taste of our salmon. It\'s the perfect dish for any time of year.',
            price: '23.99'
        },
        {
            image: alfredo,
            title: 'Parmasean Alfredo',
            description: 'Creamy and delicious, our alfredo is to die for. We import all of our ingredients from Italy.',
            price: '31.49'
        },
    ];

    return (
        <main>
            <HeroImage image={pork}>
                <h1 className="shaded-heading">Menu</h1>
            </HeroImage>

            <section className="main-body">
                <h2>OUR MENU</h2>
                <div className="main-menu-container">

                    {menu.map((item, index) => (
                        <MenuItem key={index} image={item.image} title={item.title} description={item.description} price={item.price}/>
                    ))}

                </div>
            </section>
        </main>
    );
};

export default Menu;