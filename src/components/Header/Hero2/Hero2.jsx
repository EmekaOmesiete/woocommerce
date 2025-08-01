import './Hero2.css';

const Hero2 = () => {
    return (
        <main className="hero2Section">
                <h1>The most-trusted <br/>ecommerce platform</h1>
                <div className="hero2TextContainer">
                    <div className="hero2Text">
                        <h3>4M+</h3>
                        <p>online stores built with WooCommerce</p>
                      <a href="#store-leads"> Store Leads (using Woo Cart/Checkout)</a>
                    </div>
                    <div className="hero2Text">
                        <h3>31%</h3>
                        <p>of the top 1 million ecommerce sites</p>
                        <a href="#store-leads">Store Leads</a>
                    </div>
                    <div className="hero2Text">
                        <h3>43%</h3>
                        <p>of the internet runs on WordPress</p>
                        <a href="#w3tech">W3Techs</a>
                    </div>
                  </div>
             </main>
    );
};

export default Hero2;