import bannerStack from "../assets/banner-stack.png"

function Hero(){
  return(
    <section className="hero">

      <div className="hero-content">
        <p className="hero-label">BUILD YOUR TECH STACK</p>

        <h1>
          Build Your Perfect
          <span> Development Stack</span>
        </h1>

        <p className="hero-description">
          Discover the right technologies, compare your options, and build a
          powerful development stack for your next project.
        </p>

        <div className="hero-buttons">
          <a href="#technologies" className="primary-button">
            Explore Technologies
          </a>

          <a href="#about" className="secondary-button">
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