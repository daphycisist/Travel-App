import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

import cardImg9 from "../../images/img-9.jpg";
import cardImg2 from "../../images/img-2.jpg";
import cardImg3 from "../../images/img-3.jpg";
import cardImg4 from "../../images/img-4.jpg";
import cardImg8 from "../../images/img-8.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these EPIC! Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={cardImg9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={cardImg2}
              text="Travel around the vast shallow waters of the maldives in a Privagte Cruise."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={cardImg3}
              text="Set sail in the Atlantic Ocean Visiting uncharted waters."
              label="Mystery"
              path="/mystery"
            />
            <CardItem
              src={cardImg4}
              text="Experience Football at the top of the Himilayan Mountains."
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={cardImg8}
              text="Ride through the Sahara Desert on a guided camel tour."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
