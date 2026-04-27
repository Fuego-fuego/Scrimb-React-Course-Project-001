import Header from "../components/Header"

const Home = () =>{

   return(
    <body>
        <Header/>
        <main>
            {/* Fun Facts About React */}
            <section className="fun-facts-about-react">
                <div className="container">
                    <h2 className="secondary-heading fw-semi-bold capitalize">fun facts about react</h2>
                    <ul className="fun-facts-list">
                        <li> Was first released in 2013 </li>
                        <li> Was Originally created by Jordan Walke</li>
                        <li> Has well over 100k stars on GitHub</li>
                        <li> Is maintained by meta</li>
                        <li> Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </div>
            </section>
        </main>
    </body>
   ) 
}

export default Home