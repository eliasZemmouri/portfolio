import { useEffect, useState } from 'react';


function Services() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
      },
      (error) => {       
        console.log(error);
      }
    );
  }, []);

  return (
    <div className="services">
      <h1>Nos Services</h1>
      {location ? (
        <p>Votre position actuelle est: {location.latitude}, {location.longitude}</p>
      ) : (
        <p>Impossible d'obtenir votre position actuelle.</p>
      )}
    </div>
  );
}

export default Services;