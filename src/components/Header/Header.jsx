import "./Header.css"

const Header =()=>{
    return(
        <header className="header">
            <div className="smallText">
                <ul className="small">
                <li>Develop on Woo</li>
                <li>Hire an expert</li>
                <li>Get support</li>
                </ul>
            </div>
            <div className="navigation">
            <div className="logo">
                <img src="https://woocommerce.com/wp-content/themes/woo/images/woo-logo.svg" alt="" />
            </div>
            <nav className="headerNav">
                <ul className="textList">
                <li>Sell ⊻</li>
                <li>Extensions ⊻</li>
                <li>Resources ⊻</li>
                <li>Enterprise ecommerce</li>
                </ul>
            </nav>
            <div className="headerSide">
                <div className="img">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="#333" strokeWidth="2"/>
        <line x1="14.5" y1="14.5" x2="19" y2="19" stroke="#333" strokeWidth="2" strokeLinecap="round"/>
    </svg>
                </div>
                <li>Log in</li>
                <button className="btn">Create an account</button>
            </div>
            </div>
      </header>
    )
};

export default Header;