import './Hero6.css';
const Hero6 =() =>{
    const cards1 = [
        { id: 1, img: "https://woocommerce.com/wp-content/uploads/2023/09/Captura-de-pantalla.png?strip=all&w=105" },
        { id: 2, img: "https://woocommerce.com/wp-content/uploads/2023/09/lunch-1.png?strip=all&w=105" },
        { id: 3, img: "https://woocommerce.com/wp-content/uploads/2023/09/ruby-1.png?strip=all&w=105" },
        { id: 4, img: "https://woocommerce.com/wp-content/uploads/2023/09/la-morzocco.png?strip=all&w=105" },
        { id: 5, img: "https://woocommerce.com/wp-content/uploads/2025/02/woo-cs-hfm1@2x.jpg?strip=all&w=162" },
        { id: 6, img: "https://woocommerce.com/wp-content/uploads/2023/09/wetnwild-1.png?strip=all&w=210" },
    ];
    const cards2 = [
        { id: 7, img: "https://woocommerce.com/wp-content/uploads/2023/09/jimmynelson-1.png?strip=all&w=315" },
        { id: 8, img: "https://woocommerce.com/wp-content/uploads/2023/09/atholl.png?strip=all&w=315" },
        { id: 9, img: "https://woocommerce.com/wp-content/uploads/2023/09/createtatoo.png?strip=all&w=315" },
        { id: 10, img: "https://woocommerce.com/wp-content/uploads/2023/09/coolhunter-1.png?w=420" },
        { id: 11, img: "https://woocommerce.com/wp-content/uploads/2023/09/ruby-mobile-1.png" },
        { id: 12, img: "https://woocommerce.com/wp-content/uploads/2023/09/coolhunter-mobile-1.png" },
    ];

    return (
        <section className="hero6Section">
            <h1>The brands you love, love Woo</h1>
            <div className="cardContainer">
                {cards1.map((card) => (
                    <div className="card" key={card.id}>
                        <img src={card.img} alt={`Card ${card.id}`} />
                    </div>
                ))}
            </div>
            <div className="cardContainer2">
                {cards2.map((card) => (
                    <div className="card" key={card.id}>
                  <img src={card.img} alt={`card2-${card.id}`} />      
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Hero6;