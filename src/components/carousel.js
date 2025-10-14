import { useEffect, useState, useRef } from "react";

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);
  const last = slides.length - 1;
  const autoTimer = useRef(null);

  const goto = (i) => {
    if (i < 0) setIndex(last);
    else if (i > last) setIndex(0);
    else setIndex(i);
  };

  // Auto-advance every 6s
  useEffect(() => {
    autoTimer.current = setInterval(() => goto(index + 1), 6000);
    return () => clearInterval(autoTimer.current);
  }, [index]);

  return (
    <div className="carousel" role="region" aria-label="Product slideshow">
      <button
        className="carousel-btn left"
        aria-label="Previous"
        onClick={() => goto(index - 1)}
      >
        {"<"}
      </button>

      {slides.map((s, i) => (
        <figure
          key={s.id}
          className={`slide ${i === index ? "active" : ""}`}
          aria-hidden={i !== index}
        >
          <img src={s.src} alt={`${s.caption} product`} />
          <figcaption className="slide-caption">
            <h2>{s.title}</h2>
            <p>{s.caption}</p>
          </figcaption>
        </figure>
      ))}

      <button
        className="carousel-btn right"
        aria-label="Next"
        onClick={() => goto(index + 1)}
      >
        {">"}
      </button>

      <div className="dots" role="tablist" aria-label="Choose slide">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => goto(i)}
          />
        ))}
      </div>
    </div>
  );
}
