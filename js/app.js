document.addEventListener("DOMContentLoaded", () => {
  const newHillForm = document.querySelector("#new-hill-form");
  newHillForm.addEventListener("submit", handleNewHillFormSubmit);

  const deleteAllButton = document.querySelector("#delete-all");
  deleteAllButton.addEventListener("click", handleDeleteAllClick);
})

const handleNewHillFormSubmit = function(event){
  event.preventDefault();

  const hillListItem = createHillListItem(event.target);
  const hillList = document.querySelector("#hill-list");
  hillList.appendChild(hillListItem);

  event.target.reset();
}

const createHillListItem = function(form) {
  const hill = document.createElement("li");
  hill.classList.add("hill-list-item")

  const name = document.createElement("h2");
  name.textContent = form.name.value;
  hill.appendChild(name);

  const area = document.createElement("p");
  area.textContent = form.area.value;
  hill.appendChild(area);

  const geology = document.createElement("p");
  geology.textContent = form.geology.value;
  hill.appendChild(geology);

  return hill;
}

const handleDeleteAllClick = function(event){
  const hillList = document.querySelector("#hill-list");
  hillList.innerHTML = "";
}
