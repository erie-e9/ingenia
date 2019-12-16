import * as React from 'react'
import Head from 'next/head'
import Footer from "./commons/footer"
import NavBar from './commons/navbar'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="icon" type="image/x-icon" href="/static/images/icons/favicon.png" />
      <link rel="shortcut icon" href="/static/images/icons/favicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <script src='https://www.google.com/recaptcha/api.js?render=6LeB_8cUAAAAAHLRz5SwWGnsKIOcDyfjLuF4CKC0'></script> */}
      <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script> 
    </Head>
    <NavBar />
    {children}
    <Footer/>
  </div>
)

export default Layout
