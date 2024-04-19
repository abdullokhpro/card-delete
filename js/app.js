import { User } from "./classes.js";

const form = document.querySelector(".form");
const wrapper = document.querySelector(".wrapper");
const name = document.querySelector("#name");
const quantity = document.querySelector("#quantity");
const unit = document.querySelector("#unit");
const price = document.querySelector("#price");

const PRODUCTS = [
  {
    id: "1",
    name: "Banana",
    quantity: "15",
    unit: "1",
    price: "12",
  },
  {
    id: "2",
    name: "sut",
    quantity: "20",
    unit: "3",
    price: "6",
  },
];

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let newUser = new User(name.value, quantity.value, unit.value, price.value);

  PRODUCTS.push(newUser);

  createCard(PRODUCTS);
});

function createCard(data) {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }

  let fragment = document.createDocumentFragment();
  data.forEach((user) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
              <div class="card__img"></div>
              <p class="card__name card__text">${user.name}</p>
              <p class="card__quantity card__text">${user.quantity}</p>
              <p class="card__unit card__text">${user.unit}kg</p>
              <p class="card__price card__text">${user.price}$</p>
              <button class="card__btn card__text name="delete" data-id="${user.id}">Delete</button>
    `;

    fragment.appendChild(card);
  });

  wrapper.appendChild(fragment);
}

createCard(PRODUCTS);

let deleteUser = (id) => {
  if (!confirm("Are you sure")) return;
  let index = PRODUCTS.findIndex((u) => u.id == id);
  PRODUCTS.splice(index, 1);
  createCard(PRODUCTS);
};

wrapper.addEventListener("click", (e) => {
  if ((e.target.name = "delete")) {
    deleteUser(e.target.dataset.id);
  }
});
