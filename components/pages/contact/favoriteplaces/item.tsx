import { useState, useEffect } from 'react'

interface IProps {
    data: any
}

const ContactFavoritePlaces: React.FunctionComponent<IProps> = ({data}) => {
    const [ propdata, setpropdata ]: any = useState()
    // const [ propcountry, setpropcountry ]: any = useState(country)
    
    useEffect(() => {
            setpropdata(data)
            // setpropcountry(country)
            // console.log('propdata item:', propdata);
            // console.log('pais we: ', propcountry)
        })
        
    // console.log('data item:', propdata);
    return (
        <>
            {
                propdata
                ?   <>
                        <div className="favoriteplace-item-wrapper" style={{textAlign: propdata.country === 'Mexico' ? 'end' : 'start', alignItems: propdata.country === 'Mexico' ? 'flex-end' : 'flex-start'}}>
                            <div className="favoriteplace-item-head">
                                {
                                    propdata.country === 'Mexico'    
                                    ?   <>
                                            <a href={propdata.link} target="_blank" rel="noopener noreferrer"><p>{propdata.name}</p></a>
                                            <div className="favoriteplace-item-icon" id="favoriteplace-item-icon"></div>
                                        </>
                                    :   <>
                                            <div className="favoriteplace-item-icon" id="favoriteplace-item-icon"></div>
                                            <a href={propdata.link} target="_blank" rel="noopener noreferrer"><p>{propdata.name}</p></a>
                                        </>
                                }
                            </div>
                            <span>{propdata.ubication} {propdata.country}</span>
                            <span>{propdata.info}</span>
                        </div> 
                    </>
                :   null
            }
        </>
    )
}

export default ContactFavoritePlaces