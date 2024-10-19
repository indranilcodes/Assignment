import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Easy.css';
import { ApiContext } from '../Contex/AppContex';

export default function Medium() {

    const { fetchData, alldata ,  loading , setloading } = useContext(ApiContext);

    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const descriptionHandler = (index) => {
        navigate(`/mediumAssignment/${index}`); 
    };


    return (
        <div className="container">

            <p style={{ color: 'red' }}>Medium</p>

            <button onClick={ () => { fetchData()  } } className="fetch-button">
                Fetch Cat Images
            </button>

            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && alldata.length === 0 && <p>No data found</p>}

            <div className="grid">
                {alldata.map((cat, index) => (
                    <div key={index} className="card" onClick={() => descriptionHandler(index)}>
                        <img src={cat.url} alt={`Cat ${index + 1}`} className="cat-image" />
                        <h4>{cat.id}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}
