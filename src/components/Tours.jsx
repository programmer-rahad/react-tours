import React, { useState, useEffect } from "react";
import Tour from "./Tour";
import Loading from "./Loading";
import "./Tours.scss";
const url =
  "https://raw.githubusercontent.com/programmer-rahad/json-files/main/tours.json";

function Tours() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if(loading) {
    return <Loading />
  }
  
  return (
    <section id="tours">
      <h2>
        {!tours.length ? "No tours left" : "Our Tours"}{" "}
        <span className="border-bottom"></span>
      </h2>
      {!tours.length && (
        <div className="text-center">
          <button onClick={fetchTours} className="btn info-btn">
            refresh
          </button>
        </div>
      )}
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </section>
  );
}

export default Tours;
