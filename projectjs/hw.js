function createItem(name, id, amount, price) {
  return {
    name,
    id,
    amount,
    price,
    addQuantity: function (amount) {
      this.amount += amount;
    },
    minusQuantity: function (amount) {
      if (this.amount - amount >= 0) {
        this.amount -= amount;
      }
    },
  };
}
function find1(id) {
  for (i = 0; i < listOfSell.length; i++) if (listOfSell[i].id == id) return i;
  return -1;
}

let listOfSell = [];
let listOfProd = [];
listOfProd.push((items = createItem("multimedia speakers ", 12, 5, 120)));
listOfProd.push((items = createItem("laptop ", 13, 5, 120)));
listOfProd.push((items = createItem("computer ", 14, 5, 120)));

const newlistOfProd = document.createElement("div");
let listProd = document.getElementById("ulProd");

for (i = 0; i < listOfProd.length; i++) {
  let li = document.createElement("li");

  li.innerText =
    "name: " + listOfProd[i].name + ", amount: " + listOfProd[i].amount; // items;

  listProd.appendChild(li);
  listProd.id = i;
}

const newlistSell = document.createElement("div");
let listSell = document.getElementById("ulSell");

let elems = document.getElementsByTagName("li");
Array.from(elems).forEach((v, i) =>
  v.addEventListener("click", function () {
    listOfProd[i].minusQuantity(1);
    this.innerHTML =      "name: " + listOfProd[i].name + ", amount: " + listOfProd[i].amount;
  })
);
let x = 0;
Array.from(elems).forEach((v, i) =>
  v.addEventListener("click", function () {
    j = find1(listOfProd[i].id);
    if (j == -1) {
      listOfSell.push(
        (items = createItem(
          listOfProd[i].name,
          listOfProd[i].id,
          1,
          listOfProd[i].price
        ))
      );

      let p = document.createElement("p");
      p.innerText =
        "name: " +
        listOfSell[listOfSell.length - 1].name +
        ", amount: " +
        listOfSell[listOfSell.length - 1].amount;
      listSell.appendChild(p);
      listSell.id = ++x;
      let elemsp = document.getElementsByTagName("p");

      Array.from(elemsp).forEach((v, i) =>
        v.addEventListener("dblclick", function () {
          listOfSell[i].minusQuantity(1);
        })
      );
      elemsp.innerHTML = "";
      for (i = 0; i < listOfSell.length; i++) {
        let li = document.createElement("li");

        li.innerText =
          "name: " + listOfSell[i].name + ", amount: " + listOfSell[i].amount; // items;

        listOfSell.appendChild(li);
      }
    } else {
      if (listOfProd[i].amount > 0) listOfSell[j].addQuantity(1);
    }
  })
);
