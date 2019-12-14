const ContactLocations: React.FunctionComponent = () => {
    return (
        <>
            <h2 >I am locations</h2>
            <img src="static/images/bg_mexico_city.png" alt="bg_mexico_city"/>
            <img src="static/images/bg_washington.png" alt="bg_washington"/>

            <h2>Mexico City</h2>
            <p className="locations-content-street">1200 18th Street, NW</p>
            <p className="locations-content-block">Suite 700</p>
            <p className="locations-content-address">Washington DC 20036 USA</p>
            <p className="locations-content-phone">50220900</p>
        </>
    )
}

export default ContactLocations