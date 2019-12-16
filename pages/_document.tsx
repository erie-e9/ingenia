import Document, { Html, Head, Main, NextScript } from 'next/document'
// import '../public/styles/commons/generalsettings.scss'

export default class MyDocument extends Document {

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}