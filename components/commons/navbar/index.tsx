import { useState } from 'react'
import Link from 'next/link'
import navbarlink from '../../../utils/links'
// import Ilinks from '../../../interfaces/Ilinks'
import NavbarItem from './item'
import '../../../public/styles/commons/navbar/index.scss'

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