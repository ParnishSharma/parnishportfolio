// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <link rel="shortcut icon" href="/Screenshot (150).png" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (typeof window !== 'undefined') {
                  document.addEventListener('DOMContentLoaded', function() {
                    window.addEventListener('scroll', function() {
                      const navbarLine = document.querySelector('.navbar-line');
                      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
                      navbarLine.style.width = \`\${scrollPercentage}%\`;
                    });
                  });
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
