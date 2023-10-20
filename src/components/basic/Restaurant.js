import React,{useState} from 'react';

import Menucard from './Menucard';
import Menu from './menuApi';
import Navbar from '../Navbar';


const uniq=[ ... new Set (Menu.map((ce)=>{
  return ce.category;
}) ), "All" ]



const Restaurant = () => {
console.log("uniq",uniq)
const  [menuData,setMenuData]=useState(Menu)
const [categoryList, setCategoryList]=useState(uniq);
console.log("uniqe",uniq);

const filterItem=(category)=>{
  if(category==="All"){
    setMenuData(Menu);
    return
  }

  const updatedMenu=Menu.filter((currele)=>{
    return currele.category===category;
  })
  setMenuData(updatedMenu);

}
  return (
    <>
      <h1 className='title'>Restaurant Web App</h1>
      <Navbar filterItem={filterItem} categoryList={categoryList} />
      <Menucard menuData={menuData}/>
   

    </>
  )
}

export default Restaurant
