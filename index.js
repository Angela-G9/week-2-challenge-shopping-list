const shoppingItems = []

//declaration using DOM

const itemNameInput = document.getElementById("itemInput");
const itemPriceInput = document.getElementById("priceInput");
const addButton = document.getElementById("addButton");
const shoppingList = document.getElementById("shoppingList");
const clearListButton = document.getElementById("clearButton");

// this is the declaration where  client is interacting with the web page

addButton.addEventListener("click", () => {
  const itemName = itemNameInput.value; 
  const itemPrice = itemPriceInput.value; 

  if (itemName && itemPrice) {
    const item = document.createElement("div");
    item.className = "item";

    const details = document.createElement("div");
    details.className = "details";
    details.textContent = `${itemName} Ksh ${itemPrice}`;
    item.append(details);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        item.classList.add("completed");
      } else {
        item.classList.remove("completed");
      }
    });
    item.append(checkbox);

    shoppingList.append(item);

    itemNameInput.value = "";
    itemPriceInput.value = "";
  } else {
    alert("Please enter both item name and price.");
  }
});

// this is the functionallity where the client can manage to clear the shopping list

clearListButton.addEventListener("click", () => {
  shoppingList.innerHTML = ""; 
});
