import React, { useState, useEffect } from "react";
import "./Weather.css";
const Weather = () => {
  return (
    <div>
      <form>
        <input className="form-input" type="text" placeholder="Enter a city" />
        <button className="form-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default Weather;
