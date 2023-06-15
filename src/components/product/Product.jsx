import React from "react";
import { MdDesktopMac } from "react-icons/md";
import styled from "styled-components";
import PText from "../testimonials/PText";

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: "Poppins";
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({ title, desc }) {
  return (
    <ItemStyles className="servicesItem">
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </ItemStyles>
  );
}
