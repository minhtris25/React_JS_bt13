// src/components/ImageList.jsx
import ImageShow from './ImageShow';

function ImageList({ images }) {
  return (
    <div className="columns is-multiline">
      {images.map((image) => (
        <ImageShow key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageList;