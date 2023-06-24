import React from 'react';
import Script from 'next/Script'
import Image from 'next/image'

export default function Socials() {
  return (
    <>
      <h1>Keep up with the Astronomy Society by following us on Social Media!</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-push-4 col-md-push-3 main">
            <main>
              <section>
                <div id="fb-root"></div>
              </section>
            </main>
          </div>
          <div className="col-sm-4 col-md-3 col-sm-pull-8 col-md-pull-9 sidebar">
              <a
                className="twitter-timeline"
                href="https://twitter.com/AstroSocietyUH"
                data-width="350"
                data-height="600"
              >
                Tweets by Astronomy Society at UH
              </a>
              <Script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></Script>

              <a href="https://www.instagram.com/astrosocietyuh/">
                <Image src="/insta-title.png" alt="" width={250} height={250} />
              </a>
              
              <Script async src="//www.instagram.com/embed.js"></Script>

              <a href="Socials/">
                <Image
                  src="/snapcode.jpg"
                  alt="Snapcode"
                  className="right"
                  width={250}
                  height={250}
                />
              </a>
          </div>
        </div>
      </div>
    </>
  );S
}
