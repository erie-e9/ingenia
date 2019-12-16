import { useState, useEffect } from 'react'
import Link from 'next/link'
import footerlink from '../../../utils/links'

const FooterLinks: React.FunctionComponent = () => {
    const [ footerlinks, setfooterlinks ]: any = useState();
    const [ socialnetwork_twitter, setsocialnetwork_twitter ]: any = useState(false)
    const [ socialnetwork_facebook, setsocialnetwork_facebook ]: any = useState(false)
    const [ socialnetwork_youtube, setsocialnetwork_youtube ]: any = useState(false)
    const [ socialnetwork_linkedln, setsocialnetwork_linkedln ]: any = useState(false)
    
    useEffect(() => {
        setfooterlinks(footerlink.footerlinks)
    })
    return (
        <>
        {
            footerlinks
            ?   <div className="footer-content-right">
                    <nav>
                        {
                            footerlinks.map((item: any, i: number) => {
                                return (
                                    <Link key={i} href={item.link}>
                                        <span className="footerlink">{item.section}</span>
                                    </Link>
                                )
                            })
                        }              
                    </nav>
                    <div className="footer-content-sublinks">
                        <Link href="/contact">
                            <span className="footersublink">Terms of use</span>
                        </Link>
                        <Link href="/contact">
                            <span className="footersublink">Privacy Policy</span>
                        </Link>
                    </div>
                    <div className="socialnetworks-wrapper">
                        <div className="socialnetwork-twitter" onMouseOver={() => setsocialnetwork_twitter(true)} onMouseOut={() => setsocialnetwork_twitter(false)} id={socialnetwork_twitter ? "socialnetwork-twitter-hover" : "socialnetwork-twitter" }></div>
                        <div className="socialnetwork-facebook" onMouseOver={() => setsocialnetwork_facebook(true)} onMouseOut={() => setsocialnetwork_facebook(false)} id={socialnetwork_facebook ? "socialnetwork-facebook-hover" : "socialnetwork-facebook" }></div>
                        <div className="socialnetwork-youtube" onMouseOver={() => setsocialnetwork_youtube(true)} onMouseOut={() => setsocialnetwork_youtube(false)} id={socialnetwork_youtube ? "socialnetwork-youtube-hover" : "socialnetwork-youtube" }></div>
                        <div className="socialnetwork-linkedln" onMouseOver={() => setsocialnetwork_linkedln(true)} onMouseOut={() => setsocialnetwork_linkedln(false)} id={socialnetwork_linkedln ? "socialnetwork-linkedln-hover" : "socialnetwork-linkedln" }></div>
                    </div>
                </div>
            :   null
        }
        </>
    );
  }
  
  export default FooterLinks