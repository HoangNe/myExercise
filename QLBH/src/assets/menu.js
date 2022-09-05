var abc = 0;
function Menu() {
  let list = document.querySelector("ul");
  if (abc == 0) {
    document.getElementById("menu").setAttribute("d", "M6 18L18 6M6 6l12 12"),
      list.classList.add("top-[80px]"),
      list.classList.remove("opacity-0"),
      list.classList.remove("hidden");
    abc = 1;
  } else {
    document
      .getElementById("menu")
      .setAttribute("d", "M4 6h16M4 12h16M4 18h16"),
      list.classList.remove("top-[80px]"),
      list.classList.add("opacity-100"),
      list.classList.add("hidden");
    abc = 0;
    0;
  }
}
