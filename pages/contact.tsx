import * as React from 'react'
import Layout from '../components/Layout'
import ContactComponent from '../components/pages/contact'
import '../public/styles/pages/contact/index.scss';

const ContactPage: React.FunctionComponent = () => (
  <Layout title="Contact | Next.js + TypeScript Example">
    <ContactComponent />
  </Layout>
)

export default ContactPage
