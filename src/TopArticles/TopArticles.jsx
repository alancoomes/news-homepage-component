import React from "react";

const TopArticles = () => {
  return (
    <article>
      <div>
        <img src="./assets/images/image-retro-pcs.jpg" alt="Super retro PC" />
        <h2>01</h2>
        <h3>Reviving Retro PCs</h3>
        <p>What happens when old PCs are given modern upgrades?</p>
      </div>

      <img
        src="./assets/images/image-top-laptops.jpg"
        alt="Top laptops of 2022"
      />
      <h2>02</h2>
      <h3>Top 10 Laptops of 2022</h3>
      <p>Our best picks for various needs and budgets.</p>

      <img
        src="./assets//images/image-gaming-growth.jpg"
        alt="X-box controller floating in hand"
      />
      <h2>03</h2>
      <h3>The Growth of Gaming</h3>
      <p>How the pandemic has sparked fresh opportunities.</p>
    </article>
  );
};

export default TopArticles;
