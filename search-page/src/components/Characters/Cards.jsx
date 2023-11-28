import React from 'react';
import './Cards.css';

const Cards = ({ results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, name, image, status, location, gender, species, type } = x;
      return (
        <div key={id} className="col-6">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-5">
                <img src={image} alt={name} className="img"/>
              </div>
              <div className="col-md-7" style={{ maxHeight: '200px' }}>
                <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <p className="card-text">
                    Status: {(() => {
                      if (status === 'Dead') {
                        return <span className="badge bg-danger">{status}</span>;
                      } else if (status === 'Alive') {
                        return <span className="badge bg-success">{status}</span>;
                      } else {
                        return <span className="badge bg-secondary">{status}</span>;
                      }
                    })()}
                  </p>
                  <p className="card-text">Gender: {gender}</p>
                  <p className="card-text">Species: {species}</p>
                  <p className="card-text">Type: {type !== '' ? type : species}</p>
                  <p className="card-text">
                    Last Location:
                    <span className="location-name">{location.name}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  } else {
    display = "No se encontró el personaje";
  }

  return <>{display}</>;
};

export default Cards;
