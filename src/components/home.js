import Carousel from "../components/carousel";

export default function Home() {
  const slides = [
    { id: 1, src: "/images/chips.jpg"},
    { id: 2, src: "/images/chocolate.jpg"},
    { id: 3, src: "/images/cookie.jpg"},
    { id: 4, src: "/images/popcorn.jpg"},
    { id: 5, src: "/images/pretzel.jpg"},
  ];

  return (
    <section className="home">
      <Carousel slides={slides} />
    </section>
  );
}
