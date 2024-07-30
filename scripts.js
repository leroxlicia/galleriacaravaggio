document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("heading");
  const h11 = document.getElementById("h11");

  const setBackgroundImage = (opacity) => {
    heading.style.backgroundImage = `linear-gradient(rgba(236, 206, 165, ${opacity}), rgba(1, 22, 39, 1)), url(berufung.png)`;
  };

  h11.addEventListener("mouseover", () => setBackgroundImage(0.1));
  h11.addEventListener("mouseout", () => setBackgroundImage(0));
});
