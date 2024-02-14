import React from "react";
import './Home.css'

function Home(){
    return(
        <div className="home-content">
           <section className="home-container">
             <div className="content_container">
                <h1>Best coffee beans</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, dolores. Earum sequi aut quaerat sed ullam id officia non mollitia, adipisci culpa quia 
                  animi iste rem expedita saepe voluptatum voluptate.</p>
                <form action="">
                    <input type="text" placeholder="What are you looking for?" />
                    <button>Search</button>
                </form>
             </div>

             <div className="image_container">
                <img src="coffeebeans.png" alt="" />
             </div>
              
           </section> 

           <div className="product-container">
              <div className="coffeetypes">
                <img src="coffeebeans.png" alt="" />
                <h2>Coffee Arabica</h2>
                <button className="btn">View Details</button>
              </div>

              <div className="coffeetypes">
                <img src="coffeebeans.png" alt="" />
                <h2>Coffea Robusta</h2>
                <button className="btn">View Details</button>
              </div>

              <div className="coffeetypes">
                <img src="coffeebeans.png" alt="" />
                <h2>Coffea Excelsa</h2>
                <button className="btn">View Details</button>
              </div>

              <div className="coffeetypes">
                <img src="coffeebeans.png" alt="" />
                <h2>Coffea Liberica</h2>
                <button className="btn">View Details</button>
              </div>

              <div className="coffeetypes">
                <img src="coffeebeans.png" alt="" />
                <h2>Coffea Liberica</h2>
                <button className="btn">View Details</button>
              </div>

              <div className="coffeetypes">
                <img src="coffeebeans.png" alt="" />
                <h2>Coffea Excelsa</h2>
                <button className="btn">View Details</button>
              </div>

              

              



            

           </div>
           
        </div>
    )
}

export default Home;