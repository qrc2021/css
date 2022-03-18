import React, {useState} from 'react';

function CssUI()
{

    var car = '';
    var search = '';

    const [message, setMessage] = useState('');
    const [searchResults, setResults] = useState('');
    const [carList, setCarList] = useState('');

    const searchCar = async event =>
    {
        event.preventDefault();

        alert('searchCar() ' + search.value);
    };

    return(
        <div id="carUIDiv">
            <br />
            <input type="text" id="searchText" placeholder="Car to search for" ref={(c) => search = c} />
            <button type="button" id="searchCarButton" class="buttons" onClick={searchCar}> Search Car </button><br />
            <span id="carSearchResult">{searchResults}</span>
            <p id="carList">{carList}</p>
        </div>
    );
}

export default CssUI;