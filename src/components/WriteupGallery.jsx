import { useState, useEffect, useRef } from 'react';

function PhotoStack({ images, onImageClick }) {
  return (
    <div className="photo-stack">
      {images.map((img, idx) => {
        // Calculate offset and rotation to create a fanned effect
        const offset = (idx - 1) * 12; // -12px, 0px, 12px
        const rotation = (idx - 1) * 4; // -4deg, 0deg, 4deg
        const zIndex = idx + 1;
        
        return (
          <div
            key={idx}
            className="photo-stack-card"
            style={{
              transform: `translate(${offset}px, ${offset}px) rotate(${rotation}deg)`,
              zIndex: zIndex,
            }}
            onClick={() => onImageClick(img)}
          >
            <img src={img.src} alt={img.alt} className="photo-stack-img" />
          </div>
        );
      })}
    </div>
  );
}

function ScrollStrip({ images, onImageClick }) {
  return (
    <div className="scroll-strip">
      <div className="scroll-strip-track">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="scroll-strip-card"
            onClick={() => onImageClick(img)}
          >
            <img src={img.src} alt={img.alt} className="scroll-strip-img" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ImageLightbox({ image, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!image) return null;

  return (
    <div className="lightbox-overlay open" onClick={onClose}>
      <button
        ref={closeBtnRef}
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        ×
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="lightbox-img" />
      </div>
    </div>
  );
}

export default function WriteupGallery({ heading, body, images, reverse }) {
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  const hasManyImages = images.length > 3;

  return (
    <div className={`writeup-row ${reverse ? 'writeup-row--reverse' : ''} fade-up`}>
      <div className="writeup-text">
        <h3>{heading}</h3>
        <p>{body}</p>
      </div>
      <div className="writeup-gallery">
        {hasManyImages ? (
          <ScrollStrip images={images} onImageClick={handleImageClick} />
        ) : (
          <PhotoStack images={images} onImageClick={handleImageClick} />
        )}
      </div>

      {activeImage && (
        <ImageLightbox image={activeImage} onClose={closeLightbox} />
      )}
    </div>
  );
}
