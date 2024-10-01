import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const AxiosAndUseEffect = () => {
    const [fetchData, setFetchData] = useState('character');
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchAPI = () => {
                 axios.get(`https://rickandmortyapi.com/api/${fetchData}`)
                .then(response => setItems(response.data.results))
                .catch(error => {
                    console.log(error);
                });
        };
        fetchAPI();

        return () => {
            console.log('Cleaned up the connection to API');
        };
    }, [fetchData]);

    return (
        
        <div className='container'>
            <div>
                <h1 className='display-4'>The Rick and Morty API </h1>
            </div>
            <div className='mt-5'>
                <div>
                    {/* Handle selection change here */}
                    <select className='btn btn-secondary' onChange={e => setFetchData(e.target.value)}>
                        <option value="character">Characters</option>
                        <option value="episode">Episodes</option>
                        <option value="location">Locations</option>
                    </select>
                </div>

                <ul className='mt-5'>
                    {items.map(item => (
                        <li key={item.id}>
                            ID: {item.id}, Name: {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AxiosAndUseEffect;
