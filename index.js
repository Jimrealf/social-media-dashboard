document.querySelector(".slider").addEventListener("click", () => {
  document.querySelector(".overlay").classList.toggle("overlay_light");

  document.querySelector("body").classList.toggle("body_light");

  document.querySelector("html").classList.toggle("html_light");

  document.querySelector(".slider").classList.toggle("slider_light");

  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.classList.toggle("card_light");
  });

  const elements = document.querySelectorAll(
    ".subtitle, .mode, .username, .followers, h3"
  );
  elements.forEach((element) => {
    element.classList.toggle("light");
  });

  const items = document.querySelectorAll("h1, .count, h2, .lower-count");
  items.forEach((item) => {
    item.classList.toggle("light_theme");
  });
});
