import './Hero8.css';

const  Hero8 =()=>{
 const cards = [
    { id: 1, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-07-ffcw@2x.png"},
    { id: 2, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-04-taika@2x.png"},
    { id: 3, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-11-hvr@2x.png"},
    { id: 4, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-02-scrubdaddy@2x.png"},
    { id: 5, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-10-polestar@2x.png"},
    { id: 6, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-14-uppababy@2x.png"},
    { id: 7, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-05-stroopwafels@2x.png"},
    { id: 8, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-13-landyachtz@2x.png"},
    { id: 9, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-09-cc@2x.png"},
    { id: 10, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-15-lamarzocco@2x.png"},
    { id: 11, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-03-vanleeuwen@2x.png"},
    { id: 12, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-08-mintmobile@2x.png"},
    { id: 13, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-01-wnw@2x.png"},
    { id: 14, img: "https://woocommerce.com/wp-content/uploads/2025/01/logo-12-nutribullet@2x.png"},
];

return(
    <section className="hero8Section">
            {cards.map((item) => (
                <div className="card2" key={item.id}>
                    <img src={item.img} alt={`Card ${item.id}`} />
                </div>
            ))}
    </section>
)
};
export default Hero8;