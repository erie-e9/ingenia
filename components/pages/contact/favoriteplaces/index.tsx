import { useState } from 'react';
import dynamic from "next/dynamic";
import '../../../../public/styles/pages/contact/favoriteplaces/index.scss'
import FavoritePlaces from '../../../../utils/favoriteplaces';

/** *
Favorite places Component shows simple app to suggest a list of known 
places by category in both places where Ingenia are. 
* **/

const DynamicItem: any = dynamic(() => import("./item"),
{   ssr: false,
//   loading: () => <ComponentLoader />
});

const ContactFavoritePlaces: React.FunctionComponent = () => {
    const [ favoriteplaces ]: any = useState(FavoritePlaces.favoriteplaces)
    const [ selectedplace, setselectedplace ]: any = useState("readbook")
    // @ts-ignore
    const handleSelectOptions = (event) => {
        event.preventDefault()
        setselectedplace(event.target.value)
    }
    return (
        <>
            <div className="favoriteplaces-wrapper">
                <div className="favoriteplaces-head">
                    <p><b>Coming to visit us?</b> Here are some of our favorite places arount town to</p>
                    <div className="favoriteplaces-selector">
                        <select value={selectedplace} onChange={handleSelectOptions}>
                            <option value="readbook">A quiet place to read a book</option>
                            <option value="meetpeople">Meet new people</option>
                            <option value="entertain">Entertain</option>
                            <option value="exercise">Exercise</option>
                            <option value="healthyfood">Eat healthy</option>
                            <option value="shopping">Shopping</option>
                        </select>
                    </div>
                </div>
                {
                    favoriteplaces
                    ?   <>
                            <div className="countries">    
                            {/* List of places by country is loaded dynamically for an external file (favoriteplaces.js) or an API response.  */}
                                <div className="country">
                                    <div className="favoriteplaces-cities">
                                        <span>MEXICO CITY:</span>
                                    </div>
                                    <div className="favoriteplaces-items-wrapper">
                                        {
                                            favoriteplaces.map((item: any) => {
                                                if (Array.isArray(item[selectedplace])) {
                                                    return (
                                                        item[selectedplace].map((element: any, i: number) => {
                                                            if (element.country === 'Mexico' ) {
                                                                return <DynamicItem key={i} data={element}/>
                                                            }
                                                        })
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="favoriteplacesdivider"></div>
                                <div className="country">
                                    <div className="favoriteplaces-cities">
                                        <span>WASHINGTON DC:</span>
                                    </div>
                                    <div className="favoriteplaces-items-wrapper">
                                        {
                                            favoriteplaces.map((item: any) => {
                                                if (Array.isArray(item[selectedplace])) {
                                                    return (
                                                        item[selectedplace].map((element: any, i: number) => {
                                                            if (element.country === 'USA' ) {
                                                                return <DynamicItem key={i} data={element}/>
                                                            }
                                                        })
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </>
                    :   null
                }
            </div>
        </>
    )
}

export default ContactFavoritePlaces