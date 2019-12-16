const ContactLocations: React.FunctionComponent = () => {
    return (
        <div className="location-item">
            <div className="locationimage">
                <img src="/static/images/bg/bg_mexico_city.png" alt="bg_mexico_city"/>    
                <div className="location-card-wrapper">
                    <h2>Mexico City</h2>
                    <div className="location-card">
                        <p className="locations-content-street">Anatole France 311</p>
                        <p className="locations-content-block">Polanco, Miguel Hidalgo</p>
                        <p className="locations-content-address">11560 Mexico D.F.</p>
                        <a href="tel:+525550220900"><p className="locations-content-phone">50 22 09 00</p></a>
                    </div>
                </div>
            </div>
            <div className="locationimage">
                <img src="/static/images/bg/bg_washington.png" alt="bg_washington"/>    
                <div className="location-card-wrapper">
                    <h2>Washington D.C.</h2>
                    <div className="location-card">
                        <p className="locations-content-street">1200 18th Street, NW</p>
                        <p className="locations-content-block">Suite 700</p>
                        <p className="locations-content-address">Washington D.C. 20036 USA.</p>
                        <a href="tel:+525550220900"><p className="locations-content-phone">50 22 09 00</p></a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactLocations