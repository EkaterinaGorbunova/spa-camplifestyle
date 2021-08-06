import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>        
          <meta charSet='utf-8' />
          <meta name='description' content='CampLifestyle - Relax in Nature and Stress Less' />
          <meta name='theme-color' content='#317EFB' />
          <link rel='icon' href='/favicon.ico?v=2' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument