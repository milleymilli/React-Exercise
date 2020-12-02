import React from 'react';
import dishes from "../data";

function DishList({ filteredDishes, dishType, dishTitle }) {
  const [minPrice, maxPrice] = [...filteredDishes];
  //const searchedDish = dishTitle.toLowerCase();

  const filteredPrice = dishes.filter(
    ele => (dishType === 'all' || dishType === ele.category))
    .filter((ele) => ele.price >= minPrice && ele.price <= maxPrice);

  // const searchedDishes = (dishes
  //   .filter(  ele => (searchedDish === ele.name.toLowerCase()))
  //   .filter((ele) => ele.price >= minPrice && ele.price <= maxPrice));
  // searchedDishes.length  ?
  //        ( searchedDishes.map(el => <li className='card' key={el.name}>
  //           <h4>{el.name}</h4>
  //           <figure>{el.description}</figure>
  //           <br />
  //           <figure>£{el.price.toFixed(2)}</figure>
  //         </li>)):
  //          <h4>Oops! We Don't Have It Sorry.</h4>
  //         : 

  return (
    <section className="dishes">
      <h2>Dishes</h2>
      <ul className="grid">
        {filteredPrice.length ?
            filteredPrice.map(el => <li className='card' key={el.name}>
              <h4>{el.name}</h4>
              <figure>{el.description}</figure>
              <br />
              <figure>£{el.price.toFixed(2)}</figure>
            </li>)
            : <h4>Oops! We Don't Have It Sorry.</h4>
        }

      </ul>
    </section>)
}

export default DishList;