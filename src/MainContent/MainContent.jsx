import React from "react";
import styles from "../MainContent/MainContent.module.css";

const MainContent = () => {
  return (
    <article>
      <div className={styles.imgWrapper}>
        <img
          className={styles.mainImg}
          src="./assets/images/image-web-3-mobile.jpg"
          alt=""
        />
      </div>
      <h1 className={styles.headline}>The Bright Future of Web 3.0?</h1>

      <div>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>

        <button>Read more</button>
      </div>
    </article>
  );
};

export default MainContent;
