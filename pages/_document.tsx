import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
          <meta name="description" content="An company profile of RiuStudio Company. Its company that serve for Application Development (Mobile, Web and Desktop), UI UX Design and Maintenance" />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='web,app,ui,maintenance,company,riustuio,profile' />
        <link
          rel="shortcut icon"
          href="/images/logo/RiuStudio.png"
          type="image/x-icon"
        />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
