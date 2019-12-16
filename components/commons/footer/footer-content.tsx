
const FooterContent: React.FunctionComponent = () => {
    return (
      <>
        <div className="footer-content-left">
          <p>&copy;2014 Ingenia Group</p>
          {/* <img src="country" alt="country"/> */}
          <div className="footer-ingenia-locations">
            <div className="footer-ingenia-location">
              <div className="footer-content-country">
                <div className="countryimage" id="usa"></div>
                <p className="countryname">USA</p>
              </div>
              <p className="footer-content-street">1200 18th Street, NW</p>
              <p className="footer-content-block">Suite 700</p>
              <p className="footer-content-address">Washington DC 20036 USA</p>
              <p className="footer-content-phone">50 22 09 00</p>
            </div>
            <div className="footer-ingenia-location">
              <div className="footer-content-country">
                <div className="countryimage" id="mexico"></div>
                <p className="countryname">Mexico</p>
              </div>
              <p className="footer-content-street">Anatole France 311</p>
              <p className="footer-content-block">Polanco, Miguel Hidalgo</p>
              <p className="footer-content-address">11560 Mexico D.F.</p>
              <p className="footer-content-phone">50 22 09 00</p>
            </div>
          </div>
          {/* <div className="divisor-vertical" /> */}
        </div>
      </>
    );
  }
  
  export default FooterContent