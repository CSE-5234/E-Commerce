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
      name: "Jessica Yang",
      title: "Assistant Chef",
      image: "/images/stock.jpg",
      description: (
        <>
          <h5>Education</h5>
          <p>
            Graduated from the Culinary Institute of Tasty Treats with a concentration in snack innovation and kitchen management. Trained under industry professionals in small-batch production and flavor balancing, earning top marks in creative recipe development.
          </p>

          <h5>Experience</h5>
          <ul>
            <li>
              <strong>Assistant Chef</strong>, The Snack Shop Co. (2022–Present): Assist in developing new snack recipes, manage daily prep operations, and ensure every treat meets flavor standards.
            </li>
            <li>
              <strong>Junior Flavor Developer</strong>, MunchLab Snacks (2020–2022): Conducted taste tests and data tracking for 30+ new product trials. Helped launch the fan-favorite “Spicy Stardust Popcorn,” which boosted seasonal sales by 40%.
            </li>
            <li>
              <strong>Kitchen Staff</strong>, BiteRight Bakery (2020): Assisted in daily baking operations and quality checks. Learned production scaling for small-batch cookies and snack bars while maintaining consistent flavor profiles.
            </li>
          </ul>

          <h5>Passion</h5>
          <p>
            I thrive in fast-paced kitchens, where creativity meets precision. My passion lies in supporting the craft behind each snack, from mixing and tasting to refining the final product.
          </p>
        </>
      ),
    },
    {
      name: "Leo Lu",
      title: "CTO",
      image: "/images/leo.jpg",
      description: (
        <>
          <h5>Education</h5>
          <p>
            Got a BS in EE from Backupsmore University, Tainan City, Taiwan.
          </p>

          <h5>Experience</h5>
          <ul>
            <li>
              <strong>Snack Innovation Consultant, Hooli</strong>{' '} (2020–2022): Helped digitize the art of snacking by leading the “Snack Optimization Initiative,” which used machine learning to predict ideal crunch-to-flavor ratios (with mixed, but delicious, results).
            </li>
            <li>
              Designed the prototype for <strong>SnackOS™</strong>{' '} — an AI system that learned users’ snack preferences by watching their webcam reactions during taste tests. Beta testers described it as “unsettlingly accurate.”
            </li>
            <li>
              Collaborated with flavor scientists to launch the{' '} <strong>SmartSnack 2.0</strong> line — chips that paired over Bluetooth to track freshness and crunch acoustics in real time.
            </li>
          </ul>

          <h5>Passion</h5>
          <p>
            My time at Hooli taught me that snacks and software share one core principle: <strong> {' '} everything is better after version 2.0. </strong>{' '} I’m passionate about blending data with flavor, using tech to enhance the snack experience — and making sure every bite feels like an upgrade. Whether it’s debugging cookie dough or scaling flavor pipelines, I bring startup energy to every kitchen.
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
