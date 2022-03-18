import React from 'react';

function CssUI()
{
    const searchCar = async event =>
    {
        event.preventDefault();

        alert('searchCar');
    };

    return(
        <div id="accessUIDiv">
            <br />
            <input type="text" id="searchText" placeholder="Car to search for" />
            <button type="button" id="searchCarButton" class="buttons" onClick={seachCar}> Search Car </button><br />
            <span id="carSearchResult"></span>
            <p id="carList"></p>
        </div>
    );
}

export default CssUI;