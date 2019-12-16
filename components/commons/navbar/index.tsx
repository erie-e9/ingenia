import { useState } from 'react'
import Link from 'next/link'
import navbarlink from '../../../utils/links'
import NavbarItem from './item'
import '../../../public/styles/commons/navbar/index.scss'

/** * 
 * Navbar is loaded by a external file (links.js) that contain all posible section to visit into web app, that made easier add or remove links in a dynamically way.
* ** */

const NavBar: React.FunctionComponent = () => {
    const [ navbarlinks ]: any = useState(navbarlink.navbarlinks);
    return (
      <>    
        <header className="ingenia-header">
            <nav className="ingenia-navbar">
                <Link href="/">
                    <img src="/static/images/logo_ingenia.png" alt="logo_ingenia" width={100} />
                </Link>{' '}
                <div className="headerlinks-right">
                    {
                        navbarlinks.map((item: any, i: number) => <NavbarItem key={i} data={item}/>)
                    }
                </div>
            </nav>
        </header>
      </>
    );
  }
  
  export default NavBar