import React, { useState, useEffect, useRef } from 'react';
import './Hard.css'


const Hard = () => {
  const [data, setData] = useState([]); // Store fetched data
  const [page, setPage] = useState(1);  // Keep track of current page for API call
  const [loading, setLoading] = useState(false); // Manage loading state
  const observer = useRef(); // Ref for the last element to observe scrolling

  // Fetch data from API
  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?lpage=${page}`); // Replace with your API
      const newData = await response.json();
      setData((prevData) => [...prevData, ...newData]); // Append new data to existing data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  // Use IntersectionObserver to detect when the last element is visible
  useEffect(() => {
    if (loading) return;
    
    const lastElement = observer.current;
    
    const observerInstance = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1); // Load next page when bottom is reached
      }
    }, { threshold: 1.0 });
    
    if (lastElement) observerInstance.observe(lastElement);

    return () => {
      if (lastElement) observerInstance.unobserve(lastElement);
    };
  }, [loading]);

  // Fetch data when page changes
  useEffect(() => {
    fetchData(page);
  }, [page]);

  return (
    <div className='containerh'>
      {data.map((item, index) => (
        <div key={index} className="card">
          <img src={item.url} alt='networkIssue' />
          <h4>{item.id}</h4>
        </div>
      ))}

      <div ref={observer} className="loading">
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default Hard;
