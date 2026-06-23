function Hero() {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Unlimited movies, TV shows and more.</h1>

          <h2>Watch anywhere. Cancel anytime.</h2>

          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="email-box">
            <input type="email" placeholder="Email Address" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;