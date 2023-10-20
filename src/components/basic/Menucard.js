import React from 'react'
import './style.css'

const Menucard = ({menuData}) => {
    console.log("from card ",menuData);
  return (
    <>  
     <section className='main-card-container'> 
    {
       
        menuData.map((currele)=>{
            const {id, category,name,description,image}=currele;
            return(
                <>
               <div className='card-container' key={id}>

                <div className="card"  >

                <div className="card-header">
                  <span className="card-number">{id}</span>
                  <span className="card-category">{category}</span>
                </div>

                <div className="card-content">
                  <h2 className="card-name">{name}</h2>
                  <p className="card-description">{description}</p>

                 <img src={image} alt={name} className="food-item-image" />

                </div>

                <div className="card-footer">
              
                </div>

              </div>
              </div>

              </>
            )
        })


    }

    </section>





</>
  )
}

export default Menucard
