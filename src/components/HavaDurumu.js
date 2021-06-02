const HavaDurumu = (props) => {
    const { weather } = props;
    if (!weather) {
      return <p>yukleniyor</p>;
    }
    return (
      <div>
        <h3>{weather.name}</h3>
        <h3>{weather.weather.map((data) => data.description).join(",")}</h3>
        <p>{weather.main.temp}c </p>
        <p>{new Date(weather.dt * 1000).toLocaleDateString} </p>
      </div>
    );
  };
  export default HavaDurumu;
  