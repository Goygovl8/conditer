import "./content.css";

function Content() {
  return (
    <div className="main">
      <div className="hero">
        <img src="./image/Chocolate.png" />
        <div className="hero_content">
          <h2>
            Bring you Happiness <br />
            through a piece of cake
          </h2>
          <p>
            We make Diffrent type of cakes, chocolate, <br /> soft cookies,
            cheesecake pie or anything <br /> you want.
          </p>
          <div className="hero_actions">
            <button className="btn_primary">Order Now</button>
            <button className="btn_secondary ">See All Menus</button>
          </div>
        </div>
      </div>
      <div className="section_header">
        <h1>Try Our Best Selling</h1>
        <p>
          Here’s our best creations that everyone loves. Lightness and <br />{" "}
          sweetness of the cake make you want more and more. Start <br /> from
          cake, bread and other creations.
        </p>
      </div>
      <div className="cards">
        <div className="card1">
          <img src="./image/Card1.png" />
          <div className="description">
            <p>
              Red Velvet & Cream <br /> Cheese ( 500g )
            </p>
          </div>
          <div className="rating">
            <div className="stars">
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star2.png" />
            </div>

            <p>4.0 rating</p>
          </div>
        </div>
        <div className="card1">
          <img src="./image/Card2.png" />
          <div className="description">
            <p>
              Red Velvet & Cream <br /> Cheese ( 500g )
            </p>
          </div>
          <div className="rating">
            <div className="stars">
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star2.png" />
            </div>

            <p>4.0 rating</p>
          </div>
        </div>
        <div className="card1">
          <img src="./image/Card3.png" />
          <div className="description">
            <p>
              Red Velvet & Cream <br /> Cheese ( 500g )
            </p>
          </div>
          <div className="rating">
            <div className="stars">
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star2.png" />
            </div>

            <p>4.0 rating</p>
          </div>
        </div>
        <div className="card1">
          <img src="./image/Card4.png" />
          <div className="description">
            <p>
              Red Velvet & Cream <br /> Cheese ( 500g )
            </p>
          </div>
          <div className="rating">
            <div className="stars">
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star1.png" />
              <img src="./image/Star2.png" />
            </div>

            <p>4.0 rating</p>
          </div>
        </div>
      </div>
      <button className="btn_outline">View More</button>
      <div className="about_us">
        <div className="about_text">
          <h2>
            We Bake for you <br /> Fresh From the oven
          </h2>
          <p>
            We use quality materials that we get directly from farmers. <br />{" "}
            our backers are exeperienced people in the food sector. So <br />{" "}
            that the products we produce are guaranteed quality and <br />{" "}
            taste. It’s so delicious, you have to try it!
          </p>
          <p className="read">Read More</p>
        </div>
        <img src="./image/dyaci.png" />
      </div>
      <div className="about_us2">
        <img src="./image/dyaci.png" />
        <div className="about_text">
          <h2>
            Come and choose
            <br /> your favourites
          </h2>
          <p>
            Try to come to our shop directly to enjoy the delicious taste <br />{" "}
            of the cake that just came out of the oven. While enjoying it <br />{" "}
            with a cup of coffee or tea in our very convenient shop. very <br />{" "}
            suitable for chatting, meeting with your team.
          </p>
          <p className="read">Read More</p>
        </div>
      </div>
      <div className="order_info">
        <div className="text2">
          <h2>For Cake Orders above 1 KG</h2>
          <p>Please visit our nearest store or call us on +91 00 00 00 00 00 (10 AM to 7 PM) <br /> to place your orders.</p>
        </div>
        
      </div>
      <button className="contact">Contact Us Now</button>
    </div>
  );
}

export default Content;
