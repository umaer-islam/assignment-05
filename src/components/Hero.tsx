import bannerStack from "../assets/banner-stack.png"

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">
        <h1>
          Build Your Ideal
          <span> Development Stack</span>
        </h1>
        <p className="hero-description">
          Explore frontend, backend, database, and tooling options,<br />
          compare them side by side, and put together the stack that fits your
          next project. </p>
        <div className="hero-buttons">
          <a href="#" className="primary-button">
            Explore Technologies
          </a>
          <a href="#" className="secondary-button">
            Learn More
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img src={bannerStack} alt="Development technology stack" />
      </div>

    </section>
  )
}

export default Hero