import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiContext } from '../Contex/AppContex';
import './ShowDetails.css'
export default function ShowDetails() {
  const { id } = useParams(); // Get the item index from the route params

  const { alldata, loading, setloading } = useContext(ApiContext);

  const [index, setindex] = useState(id)
  const [error, setError] = useState(null);


  return (
    <div className="details-section">
      <h3>Cat Details</h3>
      <img src={alldata[index].url} alt={`Cat ${parseInt(index) + 1}`} />
      <p><strong>ID:</strong> {alldata[index].id}</p>

      <div className="button-container">
        <div className="nav-button" onClick={() => {
          const temp = (index - 1 + alldata.length) % alldata.length;
          setindex(temp);
        }}>
          Prev
        </div>

        <div className="nav-button" onClick={() => {
          const temp = (index + 1) % alldata.length;
          setindex(temp);
        }}>
          Next
        </div>
      </div>

    </div>
  );
}
