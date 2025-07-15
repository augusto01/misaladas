import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Carrusel = ({ images }) => {
  return (
    <Carousel className="mb-4">
      {images.map((img, i) => (
        <Carousel.Item key={i}>
          <img
            className="d-block w-100"
            src={img.src}
            alt={img.alt}
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          {img.caption && (
            <Carousel.Caption>
              <h5>{img.caption}</h5>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

Carrusel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
    })
  ).isRequired,
};

export default Carrusel;
