import React from "react";
import Benefits from "../Benefits/Benefits";

import styles from "./Card.module.scss";

const Card = () => {
  return (
    <li class="history__item card">
      <a class="history__link" href="#">
        <img
          class="history__photo card-scalable-img"
          src="images/history/history-1.jpg"
          alt="Фоновое изображение истории"
        />
        <div class="history__card">
          <div class="history__content">
            <h3 class="history__name card-name">Автостопом в Стамбул</h3>
            <p class="history__description">
              Идейные соображения высшего порядка, а также рамки и место
              обучения кадров обеспечивает широкому кругу (специалистов) участие
              в формировании новых предложений:
            </p>
            <Benefits />
          </div>
          <footer class="history__footer">
            <span class="history__info card-button">Подробнее</span>
            <div class="history__socials">
              <ul class="history__socials-list">
                <li class="history__socials-item">
                  <object>
                    <a class="history__socials-link" href="#" target="_blank">
                      instagram
                    </a>
                  </object>
                </li>
                <li class="history__socials-item">
                  <object>
                    <a class="history__socials-link" href="#" target="_blank">
                      facebook
                    </a>
                  </object>
                </li>
                <li class="history__socials-item">
                  <object>
                    <a class="history__socials-link" href="#" target="_blank">
                      YouTube
                    </a>
                  </object>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </a>
    </li>
  );
};

export default Card;
