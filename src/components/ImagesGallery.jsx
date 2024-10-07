const ImagesGallery = ({ images }) => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image.url} alt={image.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImagesGallery;
