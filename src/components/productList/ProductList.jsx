import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);

  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">Our Services</h2>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, description } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <h3 className="work__title">{title}</h3>
              <p className="work__paragraph">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
