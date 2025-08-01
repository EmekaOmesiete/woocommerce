import './Hero1.css';
const Hero1 = () => {
    return (
        <section className="hero1Section">
            <div className='hero1Text'>
            <h1>Forget cookie-cutter ecommerce</h1>
            <p>Every business is unique, and every store should be too.
          WooCommerce empowers you to build, sell, and grow on your terms. 
          Our WordPress-powered platform offers fully customizable ecommerce, for less.</p>
          <div className="btn1">
            <button className="hero1Btn">Start here</button>
            </div>
            </div>
            <div className="hero1Image">
                <img src="https://woocommerce.com/wp-content/uploads/2025/01/woo-header-03-A@2x.jpg" alt="Hero" />
            </div>
        </section>
    );
};

export default Hero1;
