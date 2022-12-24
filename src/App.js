import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState} from "react";

function App() {
  const apiKey = "6b70af8d41b09088bf351cc8854a3326";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  return (
    <div className="col-md-12">
      <div className="weatherBG">
        <h1 className="heading ">Weather Pro</h1>
        <div className="d-grid gap-2 col-5 w-40 ">
          <input type="text" className="form-control" value={inputCity} onChange={handleChangeInput} placeholder="Enter City Name"/>
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="card col-md-3 text-center mt-5 shadow rounded">
          <div className="card-body">
            <img
              className="Icon"
              src="https://cdn-icons-png.flaticon.com/512/3767/3767036.png" alt="noimg"
            ></img>
            
            <h2 className="card-title text-center">{data?.name}</h2>
            
            <h4 className="card-text">
              {(data?.main?.temp - 273.15).toFixed(2)}°C
            </h4>
            <h5 className="card-text">Humidity : {data?.main?.humidity}</h5>
            
          </div>
        </div>
        <h5 className="footer">App Devoloped By Anish©</h5>
      </div>
    </div>
  );
}

export default App;
