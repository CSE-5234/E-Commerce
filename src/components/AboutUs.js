import React from 'react';
import './aboutUs.css';

function AboutUs() {
    const executives = [
        {
            name: 'Samantha Lee',
            title: 'Chief Technology Officer',
            image: '/images/sam.jpg', // ← your existing image path
            description:
                'A former senior engineer at a Fortune 500 company, Samantha specializes in scalable web architecture and AI-driven personalization. She’s dedicated to building technology that empowers customers worldwide.',
        },
        {
            name: 'Samantha Lee',
            title: 'Chief Technology Officer',
            image: '/images/sam.jpg', // ← your existing image path
            description:
                'A former senior engineer at a Fortune 500 company, Samantha specializes in scalable web architecture and AI-driven personalization. She’s dedicated to building technology that empowers customers worldwide.',
        },
        {
            name: 'Samantha Lee',
            title: 'Chief Technology Officer',
            image: '/images/sam.jpg', // ← your existing image path
            description:
                'A former senior engineer at a Fortune 500 company, Samantha specializes in scalable web architecture and AI-driven personalization. She’s dedicated to building technology that empowers customers worldwide.',
        },
        {
            name: 'Samantha Lee',
            title: 'Chief Technology Officer',
            image: '/images/sam.jpg', // ← your existing image path
            description:
                'A former senior engineer at a Fortune 500 company, Samantha specializes in scalable web architecture and AI-driven personalization. She’s dedicated to building technology that empowers customers worldwide.',
        },
    ];

    return (
        <div className="about-container">
            <section className="about-intro">
                <h1>About Us</h1>
                <p>
                    At <strong>NextGen Retail</strong>, we believe shopping
                    should be seamless, smart, and personal. Since our founding,
                    we’ve combined innovation, design, and data to deliver a
                    world-class e-commerce experience.
                </p>
            </section>

            <section className="about-mission-vision">
                <h2>Our Mission</h2>
                <p>
                    To revolutionize the online retail experience by connecting
                    customers with products they love through technology, trust,
                    and transparency.
                </p>

                <h2>Our Vision</h2>
                <p>
                    To become a global leader in intelligent commerce — where
                    innovation meets purpose and every purchase drives progress.
                </p>
            </section>

            <section className="about-strategy">
                <h2>Our Strategy</h2>
                <p>
                    Our strategy is centered on three pillars: innovation,
                    sustainability, and customer excellence. By leveraging
                    AI-driven insights, partnering with ethical suppliers, and
                    investing in cutting-edge logistics, we ensure that every
                    step of our business supports long-term growth and social
                    impact.
                </p>
            </section>

            <section className="about-executives">
                <h2>Meet Our Executives</h2>
                <div className="executive-grid">
                    {executives.map((exec, index) => (
                        <div key={index} className="executive-card">
                            <img
                                src={exec.image}
                                alt={exec.name}
                                className="executive-photo"
                                onError={(e) =>
                                    (e.target.src =
                                        'https://via.placeholder.com/150')
                                }
                            />
                            <h3>{exec.name}</h3>
                            <h4>{exec.title}</h4>
                            <p>{exec.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutUs;
