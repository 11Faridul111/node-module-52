import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import category1 from '../../../assets/assets/1.png'
import category2 from '../../../assets/assets/2.png'
import category3 from '../../../assets/assets/3.png'

const LeftSideNav = () => {
      const [categories, setCategories] = useState([]);

      useEffect(()=>{
            fetch('categories.json')
            .then(res=>res.json())
            .then(data =>setCategories(data))
      },[])
      return (
            <div>
                 <h2 className="text-2xl">All Category</h2> 

                 {
                  categories.map(category=><NavLink className='block mt-6 px-4 font-semibold'  key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
                 }
                 <div>
                  <div className="p-2">
                        <img src={category1} alt="" />
                        <p className="text-2xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                  </div>
                  <div className="p-2">
                        <img src={category2} alt="" />
                        <p className="text-2xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                  </div>
                  <div className="p-2">
                        <img src={category3} alt="" />
                        <p className="text-2xl">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                  </div>
                 </div>
            </div>
      );
};

export default LeftSideNav;