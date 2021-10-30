import React from "react";
import cn from "classnames";
import styles from "./Card.module.scss";

function Card({ type }) {
  return (
    <div className={cn(styles.card, styles[type])}>
      <div className={styles.row}>
        <div className={styles.icon_wrapper}>
          <div className={styles.icon}>
            <svg
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 342.357 342.357"
            >
              <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 " />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </div>
        </div>
        <div className={styles.content}>
          <h3>Meeting with a client</h3>
          <p>At Google meet</p>
          <h6>12:30 - 13:00</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;
