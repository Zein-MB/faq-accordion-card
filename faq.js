let quests = document.querySelectorAll(".part p:first-of-type");

for (let i = 0; i < quests.length; i++) {
  quests[i].addEventListener("click", (quest) => {
    if (quest.target.classList.contains("active")) {
      quest.target.classList.remove("active");
      quest.target.nextElementSibling.classList.remove("show");
    } else {
      quests.forEach((el) => {
        el.classList.remove("active");
        el.nextElementSibling.classList.remove("show");
      });
      quest.target.classList.add("active");
      quest.target.nextElementSibling.classList.add("show");
    }
  });
}
