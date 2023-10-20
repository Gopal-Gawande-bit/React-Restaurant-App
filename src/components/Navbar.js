import React from 'react'

const Navbar = ({filterItem , categoryList}) => {
  return (
    <>

    <nav className="navbar">
        {
            categoryList.map( (ce)=>{
                return(
                <>
                  <button className="nav-button" onClick={()=>filterItem(ce)} >{ce}</button>
                </>
                )
            })
        }
    
      {/* <button className="nav-button" onClick={()=> filterItem("Lunch")}>Lunch</button>
      <button className="nav-button" onClick={()=>filterItem("Dinner")}>Dinner</button> */}
     
    </nav>
      
    </>
  )
}

export default Navbar
