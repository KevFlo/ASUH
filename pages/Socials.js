import React from 'react';
import Script from 'next/Script'
import Image from 'next/image'
import { useEffect } from 'react';

export default function Socials() {
  useEffect(() => {
    // Load Facebook SDK script
    const loadFacebookSDK = () => {
      if (document.getElementById('facebook-jssdk')) return;
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    };

    loadFacebookSDK();
  }, []);

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
              <div className="fb-page" data-href="https://www.facebook.com/AstroSocietyUH/" data-tabs="timeline" data-width="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/AstroSocietyUH/" className="fb-xfbml-parse-ignore">
                  <a href="https://www.facebook.com/AstroSocietyUH/">Astronomy Society at the University of Houston - Main Campus</a>
                </blockquote>
              </div>

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
