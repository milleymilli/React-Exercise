import React from "react";
import PriceFilter from './components/PriceFilter';
import DishList from './components/DishList';
import CategoryFilter from './components/CategoryFilter';
//import TitleFilter from './components/TitleFilter';

function App() {
  const [price, setPrice] = React.useState([0.5, 9]);
  const [dishType, setdishType] = React.useState('all');
  //const [dishTitle, setdishTitle] = React.useState('');
  // console.log(`${dishTitle} in APPPPPPP file`)

  return (
    <main>
      <section className="filters" >
        <h1>Burger Place</h1>
        <h2>Filters</h2>
        {/* <TitleFilter
          dishTitle={dishTitle}
          setdishTitle={setdishTitle}
        /> */}
        <PriceFilter
          price={price}
          setPrice={setPrice}
        />
        <CategoryFilter
          dishType={dishType}
          setdishType={setdishType}
        />
      </section>

      <DishList
        filteredDishes={price}
        dishType={dishType}
        //dishTitle={dishTitle}
      />
    </main>
  );
}


export default App;
