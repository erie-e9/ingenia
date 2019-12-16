import { useState, useEffect } from 'react'

interface IProps {
    data: any
}

const ContactFavoritePlaces: React.FunctionComponent<IProps> = ({data}) => {
    const [ propdata, setpropdata ]: any = useState()
    const [ propcategory, setpropcategory ]: any = useState()
    
    useEffect(() => {
            setpropdata(data)
            setpropcategory(data.category)
    })

    // @ts-ignore
    const favoritePlaceIcon = () => {
        switch (propcategory) {
            case 'readbook':
                return 'favoriteplace-item-readbook';
            break;
            case 'meetpeople':
                return 'favoriteplace-item-meetpeople';
            break;
            case 'entertain':
                return 'favoriteplace-item-entertain';
            break;
            case 'exercise':
                return 'favoriteplace-item-exercise';
            break;
            case 'healthyfood':
                return 'favoriteplace-item-healthyfood';
            break;
            case 'shopping':
                return 'favoriteplace-item-shopping';
            break;
            default:
                return 'favoriteplace-item-readbook';
        }
            
    }

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
                                            <div id={favoritePlaceIcon()}></div>
                                        </>
                                    :   <>
                                            <div id={favoritePlaceIcon()}></div>
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