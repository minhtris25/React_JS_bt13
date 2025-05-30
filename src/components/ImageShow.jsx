// src/components/ImageShow.jsx
function ImageShow({ image }) {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={image.urls.regular} alt={image.alt_description} />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default ImageShow;