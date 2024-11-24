// Task 2. Gallery.jsx (Tour List Component)

import React, { useEffect, useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://www.course-api.com/react-tours-project');
        if (!response.ok) throw new Error('Failed to fetch tours');
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  const toggleReadMore = (id) => {
    setTours((prevTours) =>
      prevTours.map((tour) =>
        tour.id === id ? { ...tour, showMore: !tour.showMore } : tour
      )
    );
  };

  if (loading) return <h2>Loading tours...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div className="gallery">
      {tours.map((tour) => (
        <div className="tour-card" key={tour.id}>
          <img src={tour.image} alt={tour.name} />
          <div className="tour-info">
            <h3>{tour.name}</h3>
            <h4>${tour.price}</h4>
            <p>
              {tour.showMore ? tour.info : `${tour.info.substring(0, 100)}...`}
              <button onClick={() => toggleReadMore(tour.id)}>
                {tour.showMore ? 'Show Less' : 'Read More'}
              </button>
            </p>
          </div>
          <button className="remove-btn" onClick={() => removeTour(tour.id)}>
            Not Interested
          </button>
        </div>
      ))}
    </div>
  );
};

export default Gallery;