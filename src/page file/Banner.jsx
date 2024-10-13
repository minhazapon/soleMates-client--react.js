

const Banner = () => {
    return (
        <div>

            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(https://cdn.prod.website-files.com/65d678511859fe13186ef504/65edd769ad2e426c15478cf0_humanlevel-hero.webp )",
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                  <h1 className="mb-5 text-9xl text-white font-bold font-serif ">About Us</h1>
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Banner;