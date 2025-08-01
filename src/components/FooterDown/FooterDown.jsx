import './FooterDown.css';

const FooterDown = () => {
    return (
        <div className="footer-down">
            <div className="footer-info">
               <img src="https://woocommerce.com/wp-content/uploads/2025/02/automattic-thingamajig.jpg" alt="" />
               <div className="footerDownText">
                  <ul>
                        <li>Terms and conditions</li>
                        <li>Privacy policy</li>
                        <li>Privacy notice for California users</li>
                        <li style={{ color: '#663399' }}>$ USD</li>
                        <li>
                         <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                   <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="2"/>
                                    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#333" strokeWidth="2"/>
                                    <line x1="2" y1="12" x2="22" y2="12" stroke="#333" strokeWidth="2"/>
                               <line x1="12" y1="2" x2="12" y2="22" stroke="#333" strokeWidth="2"/>
                              </svg>
                         <span style={{ marginLeft: '6px', textDecoration: 'underline', color: '#663399' }}>English</span>
                           </span>
                        </li>
                    </ul>
               </div>
            </div>
        </div>
    );
};

export default FooterDown;
