import React from "react";
import InfoButton from "../../../UI/infoButton/InfoButton";
import Socials from "../Socials/Socials";
import "./CardFooter.module.scss";

const CardFooter = ({ links }) => {
  return (
    <footer class="history__footer">
      <InfoButton label="подробнее" />
      <Socials socials={links} />
    </footer>
  );
};

export default CardFooter;
