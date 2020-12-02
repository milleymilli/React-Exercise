import React from 'react'

function PriceFilter({ price, setPrice }) {
    // console.log({ price, setPrice })
    return (
        <fieldset>
            <legend>Price</legend>
            <label htmlFor='minPrice'>Min price
            <input
                    type='range'
                    name='minPrice'
                    min='0.5'
                    max='9'
                    value={price[0]}
                    onChange={(evt) => {
                        setPrice([evt.target.value, price[1]]);
                    }} />
                <p>{price[0]}</p>
            </label>
            <label htmlFor='maxRange'>Max price
            <input
                    type='range'
                    name='maxRange'
                    min='0.5'
                    max='9'
                    value={price[1]}
                    onChange={(evt) => {
                        setPrice([price[0], evt.target.value,]);
                    }} />
                <p>{price[1]}</p>
            </label>
        </fieldset>
    );
}

export default PriceFilter;