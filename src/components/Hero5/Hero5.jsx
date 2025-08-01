import './hero5.css';

const Hero5 = () => {
  return (
    <section className="hero5Container">
        <div className="hero5First">
            <img src="https://woocommerce.com/wp-content/uploads/2025/05/woo-build-stores-for-others@2x_f794ad.jpg?resize=1200" alt="" />
            <div className="hero5FirstText">
                <h1>Build stores for others</h1>
                <p>Join a global community of developers creating powerful ecommerce solutions.</p>
                <button className="hero5Button">Build the future of open source</button>
        </div>
        </div>
        <div className="hero5Second">
            <img src="https://woocommerce.com/wp-content/uploads/2025/05/woo-enhance-your-experience@2x_dfdd60.jpg?resize=300" alt="" />
            <div className="hero5SecondText">
                <h1>Add new features</h1>
                <p>Level up your WooCommerce store with hundreds of trusted extensions and themes.</p>
                <button className="hero5Button">Customize my store</button>
            </div>
        </div>
    </section>
  );
};

export default Hero5;