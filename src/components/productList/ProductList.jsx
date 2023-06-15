import React from "react";
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from "react-icons/md";
import styled from "styled-components";
import SectionTitle from "../testimonials/SectionTitle";
import ServicesSectionItem from "../product/Product";
import { services } from "../../data";

const ProductListStyles = styled.div`
  padding: 10rem 0;

  .services__allItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    row-gap: 3rem;
    justify-content: space-between;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 3rem;
      gap: 5rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));
      grid-gap: 2rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ProductListStyles>
      <div className="container">
        <SectionTitle subheading="What We will do for you" heading="Services" />
        <div className="services__allItems">
          {services.map((val) => {
            return (
              <ServicesSectionItem
                key={val.id}
                title={val.heading}
                desc={val.para}
              />
            );
          })}
        </div>
      </div>
    </ProductListStyles>
  );
}
