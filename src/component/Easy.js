import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Easy.css';
import { ApiContext } from '../Contex/AppContex';

export default function Easy() {

    const { fetchData, alldata ,  loading , setloading } = useContext(ApiContext);

    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    return (
        <div className="container">

            <p style={{ color: 'red' }}>Easy</p>

            <button onClick={ fetchData } className="fetch-button">
                Fetch Cat Images
            </button>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && alldata.length === 0 && <p>No data found</p>}

            <div className="grid">
                {alldata.map((cat, index) => (
                    <div key={index} className="card">
                        <img src={cat.url} alt={`Cat ${index + 1}`} className="cat-image" />
                        <h4>{cat.id}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
