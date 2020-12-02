import React from 'react';
const categories = [
    "all",
    "burger",
    "hot dog",
    "sandwich",
    "fries",
    "topping",
    "drink",
    "extra",
];

function CategoryFilter({ dishType, setdishType }) {
    //console.log(`${dishType} in CategoryFilter file`)

    return (
        <fieldset>
            <legend>Category</legend>
            {categories.map(ele =>
                (<label htmlFor={ele} key={ele}>{ele}
                    <input
                        type='radio'
                        name='categories'
                        value={ele}
                        id={ele}
                        checked={dishType === ele}
                        onChange={(eve) => setdishType(eve.target.value)}
                    />
                </label>
                ))}
        </fieldset>
    );

}

export default CategoryFilter;