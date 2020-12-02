import React from 'react'

function TitleFilter({ dishTitle, setdishTitle }) {
    console.log({ dishTitle, setdishTitle })
    return (
        <form>
            <label htmlFor='search' >Dish
            <input
                    type='text'
                    name='search'
                    value={dishTitle}
                    onChange={(evt) => setdishTitle(evt.target.value)}
                />
            </label>

        </form>
    );
}

export default TitleFilter;