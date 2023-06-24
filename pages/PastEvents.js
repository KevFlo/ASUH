// This is the only dynamic route in the app. It is used to display the past events of the club.

export default function PastEvents () {

    return(
        <>
            <h1 className='pd-16 pl-16 text-xl '>Past Events</h1>
            <h2>A quick look at some of ASUH’s previous events. To see more of an event, check out pictures on our Social Media Pages!</h2>
            <ul className='grid grid-rows-5  grid-col-1 gap-4  list-none pd-16 pl-16 '>
                <li>
                    <div>
                        <h2 className="text-xl">Earth Level Donors($500+)</h2>
                        <p>     Performer Kijana Wiseman M. Ed. Fre&apos;Etta Brooks Floretta Brooks </p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2 className="text-xl">Venus Level Donors($250+)</h2>
                        <p>     Wei-Kan Chu Calhoun Rooftops Desmond Jeff Potatoe Patch </p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2 className="text-xl">Mars Level Donors($100+)</h2>
                        <p>     Spencer&apos;s Bath Salts Shipley&apos;s Donuts Defalco&apos;s AMC 8 Movie Theater Davida Brooks Spencer Brooks Tim Hahn Yanet Daugherty </p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2 className="text-xl">Mercury Level Donors(&gt;$100)</h2>
                        <p>     Papa Johns OST Jimmy Chungas Megan _____ Town in City Brewing Company Wine Caleb Daughtery Daniella Nelson Dave and Busters Trader Joe&apos;s Dairy Maids of Houston Barnes & Noble Maria G Valerie Perez Steven Oliver </p>
                    </div>
                </li>
            </ul>
        
        </>
    )
}