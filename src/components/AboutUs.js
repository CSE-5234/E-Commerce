import "./styling/aboutUs.css";

function AboutUs() {
  const executives = [
    {
      name: "Sam Wang",
      title: "Head Chef",
      image: "/images/sam.jpg",
      description: (
        <>
          <h5>Education</h5>
          <p>
            Graduated top of class in Culinary Science & Food Innovation —
            refined pastry technique meets data-driven flavor design.
          </p>

          <h5>Experience</h5>
          <ul>
            <li>
              Founded and scaled <strong>The Snack Shop Co.</strong>, launching
              12 signature bars and 7 seasonal cookie flavors — averaging 5,000+
              units sold monthly.
            </li>
            <li>
              Head pastry chef for pop-up dessert experiences (500+ guests per
              event), with viral social media features and wholesale deals for
              local cafés.
            </li>
            <li>
              Built a hit line of gourmet pretzels & caramel popcorn that
              doubled repeat purchase rates through clever flavor layering and
              packaging UX.
            </li>
          </ul>

          <h5>Passion</h5>
          <p>
            I obsess over texture math, flavor symmetry, and repeatable
            processes — turning bold concepts into snacks that hit emotionally
            and sell reliably.
          </p>
        </>
      ),
    },
    {
      name: "Margaret Lai",
      title: "Head Chef",
      image: "/images/margaret.png",
      description: (
        <>
          <h5>Education</h5>
          <p>
            Graduated from the University of Midnight Snacking, majoring in
            Snackology and Applied Cravings. My senior thesis was titled “The
            Socioeconomic Impact of Running Out of Chips at 2 A.M.” — it was a
            groundbreaking (and slightly greasy) contribution to the field.
          </p>

          <h5>Experience</h5>
          <ul>
            <li>
              Before founding this snack shop, I worked as a
              <strong>
                Professional Taste Tester, Microwave Popcorn Technician, and
                Cereal Mixologist.
              </strong>
              I spent years mastering the delicate craft of opening snack bags
              in total silence — a skill invaluable during late-night Netflix
              sessions and office meetings alike.
            </li>
            <li>
              I once led a top-secret task force investigating the mysterious
              spread of crumbs across desks, couches, and keyboards. My
              groundbreaking “Five-Second Rule Revisited” paper remains one of
              the most frequently cited works in modern snack forensics.
            </li>
            <li>
              I also built a hit line of gourmet pretzels and caramel popcorn
              that doubled repeat purchase rates through bold flavor layering
              and intuitive packaging design — proving that snack innovation is
              both an art and a science.
            </li>
          </ul>

          <h5>Passion</h5>
          <p>
            My mission is simple: to make sure no human faces life’s challenges
            on an empty stomach. I believe every problem looks smaller when
            you’re holding a cookie. Snacks are my love language — and this shop
            is my way of sharing that love, one crunch at a time.
          </p>
        </>
      ),
    },
    {
      name: "Sam Wang",
      title: "Head Chef",
      image: "/images/sam.jpg",
      description: (
        <>
          <h5>Education</h5>
          <p>
            Graduated top of class in Culinary Science & Food Innovation —
            refined pastry technique meets data-driven flavor design.
          </p>

          <h5>Experience</h5>
          <ul>
            <li>
              Founded and scaled <strong>The Snack Shop Co.</strong>, launching
              12 signature bars and 7 seasonal cookie flavors — averaging 5,000+
              units sold monthly.
            </li>
            <li>
              Head pastry chef for pop-up dessert experiences (500+ guests per
              event), with viral social media features and wholesale deals for
              local cafés.
            </li>
            <li>
              Built a hit line of gourmet pretzels & caramel popcorn that
              doubled repeat purchase rates through clever flavor layering and
              packaging UX.
            </li>
          </ul>

          <h5>Passion</h5>
          <p>
            I obsess over texture math, flavor symmetry, and repeatable
            processes — turning bold concepts into snacks that hit emotionally
            and sell reliably.
          </p>
        </>
      ),
    },
    {
      name: "Sam Wang",
      title: "Head Chef",
      image: "/images/sam.jpg",
      description: (
        <>
          <h5>Education</h5>
          <p>
            Graduated top of class in Culinary Science & Food Innovation —
            refined pastry technique meets data-driven flavor design.
          </p>

          <h5>Experience</h5>
          <ul>
            <li>
              Founded and scaled <strong>The Snack Shop Co.</strong>, launching
              12 signature bars and 7 seasonal cookie flavors — averaging 5,000+
              units sold monthly.
            </li>
            <li>
              Head pastry chef for pop-up dessert experiences (500+ guests per
              event), with viral social media features and wholesale deals for
              local cafés.
            </li>
            <li>
              Built a hit line of gourmet pretzels & caramel popcorn that
              doubled repeat purchase rates through clever flavor layering and
              packaging UX.
            </li>
          </ul>

          <h5>Passion</h5>
          <p>
            I obsess over texture math, flavor symmetry, and repeatable
            processes — turning bold concepts into snacks that hit emotionally
            and sell reliably.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          At <strong>The Snack Shop Co.</strong>, we create innovative,
          high-quality snacks that delight customers and inspire repeat
          enjoyment.
        </p>
      </section>

      <section className="about-mission-vision">
        <div className="info-block">
          <h2>Mission</h2>
          <p>
            Craft innovative snacks that delight customers and drive sustainable
            growth.
          </p>
        </div>
        <div className="info-block">
          <h2>Vision</h2>
          <p>
            Become a leading snack brand known for bold flavors, innovation, and
            memorable experiences.
          </p>
        </div>
        <div className="info-block">
          <h2>Strategy</h2>
          <p>
            Innovate flavors, delight customers, scale operations efficiently,
            and expand brand reach via retail and e-commerce.
          </p>
        </div>
      </section>

      <section className="about-executives">
        <h2>Meet Our Executives</h2>
        {executives.map((exec, index) => (
          <div key={index} className="executive-profile">
            <div className="exec-photo-container">
              <img
                src={exec.image}
                alt={exec.name}
                className="executive-photo-large"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/200")
                }
              />
            </div>
            <div className="exec-info">
              <h3>{exec.name}</h3>
              <h4>{exec.title}</h4>
              <div className="exec-description">{exec.description}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutUs;
