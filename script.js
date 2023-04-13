const header = document.querySelector("h1");

header.addEventListener("click", () => {
  for (const fieldset of fieldsets) {
    fieldset.classList.toggle("collapsed");
  }
});

const fieldsets = document.querySelectorAll("fieldset");

for (const fieldset of fieldsets) {
  const legend = fieldset.querySelector("legend");
  legend.addEventListener("click", () => {
    fieldset.classList.toggle("collapsed");
  });
}
