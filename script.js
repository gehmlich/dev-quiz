const fieldsets = document.querySelectorAll("fieldset");

for (const fieldset of fieldsets) {
  const legend = fieldset.querySelector("legend");
  legend.addEventListener("click", () => {
    fieldset.classList.toggle("collapsed");
  });
}
