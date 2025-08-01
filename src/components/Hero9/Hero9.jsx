import './Hero9.css';

const Hero9 = () => {
  return (
    <section className="hero9Section">
      <div className="hero9Text">
        <h1>Real WooCommerce results</h1>
        <p>There’s a reason customers stay with WooCommerce: from customizability to stability to support,<br/> only WooCommerce enables you to create an utterly unique brand experience that attracts,<br/> engages, and converts.</p>
        <ul className='hero9List'>
          <a href="#"><li>Nutribullet</li></a>
          <li>House of Malt</li>
         <li>Dan-O's Seasoning</li>
        </ul>
      </div>
      <div className="hero9Section2">
        <div className="hero9Text2">
        <h1>Nutribullet: A site that doesn’t blend in</h1>
        <p>Global kitchen appliance brand Nutribullet wanted a highly customized website with advanced functionality and an extra smooth(ie) checkout experience. By working with their <b>dedicated Customer Success Manager</b> to perfect their checkout experience,<b>they increased conversion by a whopping 35% — and boosted average order value.</b></p>
        <button>Read full case study</button>
        </div>
        <div className="hero9Image">
          <img src="https://woocommerce.com/wp-content/uploads/2025/02/woo-cs-nb1@2x.jpg?strip=all&w=325" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero9;