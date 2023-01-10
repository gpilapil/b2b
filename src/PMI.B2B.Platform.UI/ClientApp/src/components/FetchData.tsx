import React, {useEffect, useState} from 'react';


export default function FetchData() {
  const [details, setDetails] = useState({forecasts: [], loading: false})
  const populateWeatherData = async () => {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    setDetails({forecasts: data, loading: false});
  }
  const renderForecastsTable = (forecasts: { date: any, temperatureC: any, temperatureF: any, summary: string }[]) => {
    return (
      <table className="table table-striped" aria-labelledby="tableLabel">
        <thead>
        <tr>
          <th>Date</th>
          <th>Temp. (C)</th>
          <th>Temp. (F)</th>
          <th>Summary</th>
        </tr>
        </thead>
        <tbody>
        {forecasts.map(forecast =>
          <tr key={forecast.date}>
            <td>{forecast.date}</td>
            <td>{forecast.temperatureC}</td>
            <td>{forecast.temperatureF}</td>
            <td>{forecast.summary}</td>
          </tr>
        )}
        </tbody>
      </table>
    );
  }

  let contents = details.loading
    ? <p><em>Loading...</em></p>
    : renderForecastsTable(details.forecasts);
  useEffect(() => {
    populateWeatherData();
  }, []);
  return (
    <div>
      <h1 id="tableLabel">Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
}
