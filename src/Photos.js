import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos shadow">
        <div className="row">
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noopener noreferrer" />
                <img
                  src={photo.src.landscape}
                  alt={photo.alt}
                  className="img-fluid"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
