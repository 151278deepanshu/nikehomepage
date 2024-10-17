const Hero = ()=>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-btn">
                    <button className="shop">Shop Now</button>
                    <button className="category">Category</button>
                </div>
                <div className="shopping">
                    <p>Also available on</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon" />
                        <img src="/images/flipkart.png" alt="flipkart" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-image.png" alt="" />
            </div>
        </main>
    );
};
export default Hero;