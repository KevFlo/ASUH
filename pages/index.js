import Script from 'next/script'

export default function Home() {
  return (
    <>
    <div className="w-3/4">
      <h1 className="text-center mb-8 mt-8 font-bold text-6xl text-custom-color-3">Who are we?</h1>{/* text-slate-300  */}
      <div className="w-4/5 mx-auto">
      <p className="text-center font-mono text-slate-400 text-xl font-bold">The Astronomy Society at UH provides an environment for the UH community and our neighbors to learn about the sun, moon, stars, planets, comets, galaxies, gas, dust and other celestial bodies and phenomena! The society is geared towards all levels of subject familiarity, as we accept all majors. Our goal is to establish and maintain an outreach oriented infrastructure that encourages learning and participation, both academically and professionally. 

      So whether you know just about everything there is to know about Astronomy or you&apos;re interested in looking through a telescope for the first time, stop by the observatory and enjoy the wonders of what outer space has to offer. 

      The UH Observatory is located atop SR1 (Science and Research 1 Building), and is open most Fridays from 11am to 1pm. To get to the observatory, take the elevator to the 6th floor of SR1 and follow the hallway to the stairs to get to the 7th floor.

      Come see us at the UH Observatory if you would like to learn more!
      Fridays from 11am-1pm
      </p>
      </div>
        <h2 className="text-center mb-10 mt-12 font-bold text-slate-300">Make sure to keep with the ASUH Events:</h2>
          <iframe className="w-5/6 mx-auto  h-96" src="https://calendar.google.com/calendar/embed?src=cp9m2n30roolg5ugat0rr4vun4%40group.calendar.google.com&ctz=America%2FChicago" style={{border: '0', width: '800', height: '600', frameborder: '0', scrolling: 'no'}}></iframe>

          <Script type="text/javascript" src="http://moonphases.co.uk/js/widget.js" id="moonphase_widget" widget="" lat="" lng="" date="" tz=""></Script>

      </div>   
    </>
  )
}
