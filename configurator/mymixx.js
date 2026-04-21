// Das ist ein Array für die Produktlise der Basis
const baseProducts = [
  [1, "Zarte Haferflocken", "100 g", "0,50", "Img/BaseCereals/zarteHaferflocken.png"],
  [2, "Großblättrige Haferflocken", "100 g", "0,70", "Img/BaseCereals/grossblaetttrigeHaferflocken.webp"],
  [3, "Dinkelflocken", "100 g", "1,20", "Img/BaseCereals/Dinkelflocken_neu.jpg.webp"],
  [4, "Quinoaflocken", "300 g", "1,50", "Img/BaseCereals/quinoaflocken.jpg"],
  [5, "Buchweizen<wbr>flocken", "100 g", "1,50", "Img/BaseCereals/buchweizenflocken.webp.jpeg"],
  [6, "Hirseflocken", "100 g", "1,80", "Img/BaseCereals/hirseflocken.jpg"],
  [7, "Vollkorn-Reisflocken", "100 g", "1,90", "Img/BaseCereals/reisflocken.jpg"],
  [8, "Amaranth-Pops", "50 g", "1,20", "Img/BaseCereals/amaranthPops.jpg"],
  [9, "Cornflakes (zuckerfrei und mit Honig)", "50 g", "1,50", "Img/BaseCereals/cornflakes.avif"],
  [10, "Crunchy Müsli (Schoko, Nuss, Honig)", "150 g", "2,50", "Img/BaseCereals/crunchyCereal.jpg"],
  [11, "Rice Krispies", "75 g", "1,80", "Img/BaseCereals/riceKrispie.jpg"],
  [12, "Weizenkleie", "50 g", "1,50", "Img/BaseCereals/weizenkleie.webp"],
  [13, "Geröstete Haferflakes", "30 g", "1,20", "Img/BaseCereals/geroesteteHaferflocken.jpg"],
];
// Arrayliste für die Trockenfrüchte
const dryFruitsProducts = [
  [1, "Cranberries", "25 g", "1,40", "Img/DryFruits/cranberries.jpg"],
  [2, "Rosinen", "25 g", "1,10", "Img/DryFruits/raisins.jpg"],
  [3, "Goji-Beeren", "20 g", "1,60", "Img/DryFruits/gojiBeeren.jpg",],
  [4, "Mango<wbr>stückchen", "40 g", "1,50", "Img/DryFruits/mango.avif"],
  [5, "Ananasstücke", "10 g", "1,50", "Img/DryFruits/ananas.webp"],
  [6, "Apfelringe", "100 g", "1,50", "Img/DryFruits/apfelringe.jpg"],
  [7, "Bananenchips", "20 g", "1,80", "Img/DryFruits/banane.avif"],
  [8, "Datteln", "20 g", "1,20", "Img/DryFruits/dattel.jpg"],
  [9, "Feigen", "20 g", "1,50", "Img/DryFruits/feigen.webp"],
  [10, "Erdbeer<wbr>scheiben", "10 g", "1,40", "Img/DryFruits/erdbeeren.webp"],
  [11, "Heidelbeeren", "15 g", "1,30", "Img/DryFruits/heidelbeeren.jpg"],
];
// Arrayliste für die Nüsse
const nutsProducts = [
  [1, "Mandeln (geröstet, gehackt, blättrig)", "15 g", "1,00", "Img/NutsSeeds/mandeln.jpg"],
  [2, "Walnüsse", "15 g", "1,50", "Img/NutsSeeds/walnut.jpg"],
  [3, "Haselnüsse", "15 g", "1,20", "Img/NutsSeeds/haselnuss.jpg"],
  [4, "Cashewkerne", "15 g", "2,80", "Img/NutsSeeds/cashew.jpg"],
  [5, "Pekanüsse", "15 g", "1,00", "Img/NutsSeeds/pekannnuss.jpg"],
  [6, "Sonnenblumen<wbr>kerne", "20 g", "1,50", "Img/NutsSeeds/sonenblumenkerne.jpg"],
  [7, "Kürbiskerne", "15 g", "1,50", "Img/NutsSeeds/kuerbiskerne.jpg"],
  [8, "Chiasamen", "10 g", "1,50", "Img/NutsSeeds/chiasamen.jpg"],
  [9, "Leinsamen", "20 g", "2,50", "Img/NutsSeeds/leinsamen.webp"],
  [10, "Hanfsamen", "10 g", "1,00", "Img/NutsSeeds/hanfSamen.webp"],
  [11, "Sesamsamen", "20 g", "1,80", "Img/NutsSeeds/sesamsamen-default.jpg"],
];
// Arrayliste für die Superfoods
const superfoodsProducts = [
  [1, "Kakaonibs", "10 g", "1,50", "Img/Superfoods/kakaonibs-teaserbild.webp"],
  [2, "Matcha-Pulver", "5 g", "2,00", "Img/Superfoods/Matcha-Tee-Pulver.jpg",],  
  [3, "Baobab-Pulver", "100 g", "6,00", "Img/Superfoods/baobabPulver.avif"],
  [4, "Spirulina", "5 g", "2,30", "Img/Superfoods/spirulina.webp"],
  [5, "Acai-Beeren", "10 g", "2,50", "Img/Superfoods/acai-pulver.webp"],  
  [6, "Weizengras<wbr>pulver", "100 g", "6,50", "Img/Superfoods/weizengraspulver.jpg"],
  [7, "Gojipulver", "10 g", "2,50", "Img/Superfoods/gojibeerenPulver.jpg"],
  [8, "Kokosflocken", "20 g", "1,50", "Img/Superfoods/kokosflocken.jpg"],
];
// Arrayliste für Extras und Süßungsmittel
const extrasProducts = [
  [1, "Dunkle Schokoladen<wbr>stücke", "15 g", "1,80", "Img/Extras/dunkleSchokolade.jpeg"],
  [2, "Weiße Schokoladen<wbr>stücke", "15 g", "1,60", "Img/Extras/weißeSchokolade.jpg"],
  [3, "Karamell<wbr>stückchen", "15 g", "2,00", "Img/Extras/karamell_fudge_nah.jpg"],
  [4, "Kokoschips", "150 g", "3,50", "Img/Extras/kokoschips.jpeg"],
  [5, "Honig", "25 g", "2,00", "Img/Extras/Honig.jpg"],
  [6, "Ahornsirup", "25 ml", "2,00", "Img/Extras/ahornsirup.jpg"],
  [7, "Agavendicksaft", "25 ml", "1,50", "Img/Extras/agavensirupheader.avif"],
];
// Arrayliste für die Flüssigkeiten
const fluidsProducts = [
  [1, "Hafermilch", "200 ml", "0,85", "Img/Fluids/hafermilch.jpg.webp"],
  [2, "Mandelmilch", "200 ml", "1,25", "Img/Fluids/mandelmilchavif.avif"],
  [3, "Kokosmilch", "200 ml", "1,25", "Img/Fluids/kokosmilch.jpg"],
  [4, "Sojamilch", "200 ml", "1,20", "Img/Fluids/sojamilch.jpeg"],
  [5, "Reismilch", "200 ml", "0,85", "Img/Fluids/reismilch.avif"],
  [6, "Vollmilch (Bio)", "200 ml", "1,25", "Img/Fluids/vollmilch.jpeg"],
  [7, "Joghurt (natur, griechisch)", "25 ml", "0,95", "Img/Fluids/joghurt.png"],
  [8, "Wasser (sehr weich und mikrofiltriert)", "200 ml", "0,85", "Img/Fluids/wasser.jpeg"],
  [9, "Kokoswasser", "200 ml", "1,05", "Img/Fluids/kokoswasser.jpg"],
];

function createSections(arrayName, categoryName, categoryClass, categoryHeadline,) {
  // Zuordnung der Section für die Produktkarteien
  let ElementBaseWrapper = document.createElement("section");
  ElementBaseWrapper.setAttribute("id", categoryClass);
  ElementBaseWrapper.setAttribute("class", "hide");
  ElementBaseWrapper.setAttribute("data-name", categoryName);
  ElementBaseWrapper.innerHTML += `
<div class="category-header">
    <h2 class="category-text">${categoryHeadline}</h2>
  </div>
    <div class="filterable-cards"></div>
`;
  document.querySelector(".content-section").append(ElementBaseWrapper);

  for (let i = 0; i < arrayName.length; i++) {
    let ElementBaseProduct = document.createElement("div");
    ElementBaseProduct.setAttribute("class", "card");
    // Die ID als Data-Atribute erzeugen, Wert = 
    ElementBaseProduct.innerHTML += `
  <img src="${arrayName[i][4]}" alt="${arrayName[i][1]}" class = "js-cardImg" />        
  <div class="card-body">
    <h3 class="card-title">${arrayName[i][1]}</h3>
    <div class="card-text">
      <p class="item-weight">${arrayName[i][2]}</p>
    </div>               
    <div class="cart-order">
      <p class="item-price">${arrayName[i][3]} €</p>
      <button class="js-intoCart rounded-button" type="button" data-productID="${categoryName}-${arrayName[i][0]}">
      <img src="Icons/icon_svg/shopping-bag.svg" class="fa-solid fa-basket-shopping">
      </button>
    </div>
  </div>
</div>
`;
    ElementBaseWrapper.querySelector(".filterable-cards").append(ElementBaseProduct);
    // Beim Seite laden, soll die erste Section automatisch eingeblendet werden
    document.querySelector("#base").classList.remove("hide");
    // Event Listener Aufbau
    let shopItemButton = document.getElementsByClassName("js-intoCart");
    // Was soll beim Event passieren?
    for (let i = 0; i < shopItemButton.length; i++) {
      shopItemButton[i].addEventListener("click", intoCart);
    // [i] im eventListener ist die Kurzschreibform von Zeile 5
    }
  }
}

// Funktion damit die Sections automatisch erstellt werden
createSections(baseProducts, "base-granola", "base", "Wähle eine Basis-Cerealie");
createSections(dryFruitsProducts, "dry-fruits-topping", "dry-fruits", "Wähle aus verschiedenen Trockenfrüchten");
createSections(nutsProducts, "nuts-topping", "dry-nuts", "Wähle aus verschiedenen Nusssorten");
createSections(superfoodsProducts, "superfoods-topping", "superfood", "Wähle aus verschiedenen Superfoods");
createSections(extrasProducts, "extras-topping", "extras-sweets", "Wähle aus verschiedenen Extras");
createSections(fluidsProducts, "fluids-topping", "fluids","Wähle aus verschiedenen Flüssigkeiten");

// Wo soll das Event passieren?
let removeCartItemButtons = document.querySelectorAll(".remove-btn");

for (let i = 0; i < removeCartItemButtons.length; i++) {
  let button = removeCartItemButtons[i];
  button.addEventListener("click", removeCartItem);
}

// Klick-Event Produkt hinzufügen
function intoCart(event) {
  let addToCart = event.currentTarget;
  let productClicked = addToCart.parentElement.parentElement.parentElement;
  //Welches ProduktID wurde geklickt?
  let productIDTile = event.currentTarget.getAttribute("data-productID");
  let rowsInCart = document.querySelector("#checkoutList");
  // Daten werden mit dieser Variablen in der Kachel ausgelesen und im Warenkorb ausgegeben
  let productPicture = productClicked.querySelector(".js-cardImg").getAttribute("src");
  let productPictureAlt = productClicked.querySelector(".js-cardImg").getAttribute("alt");
  let productName = productClicked.querySelector(".card-title").innerText;
  let productPrice = productClicked.querySelector(".item-price").innerText;
  let productWeight = productClicked.querySelector(".item-weight").innerText;
  let productIDCart = event.currentTarget.getAttribute("data-productID");
  let alreadyinCartProduct = 0;

  //was ist schon im Warenkorb vorhanden?
  let alreadyInCart = document.querySelectorAll(".cart-item");
  //Prüfung ob Warenkorb nicht leer
  if(alreadyInCart.length >=1){
  //Prüfung ob aktuelles Produkt schon drin!
      for (let i = 0; i < alreadyInCart.length; i++) {
        if(productIDTile == alreadyInCart[i].getAttribute("data-productID")){
          alreadyinCartProduct = productIDTile;
          //Holen der Anzahl
          let cartItemQty = alreadyInCart[i].querySelector('.qty').innerText; 
          //Zu einer Zahl machen, um rechnen zu können
          cartItemQty = parseInt( cartItemQty);
          //Anzahl erhöhen
          cartItemQty = cartItemQty +1;
          alreadyInCart[i].querySelector('.qty').innerText = cartItemQty;
          //Gesamtpreis ausrechenen
          updateCartTotal();
          //die ganze Funktion intoCard() für beendet erklären
          return;
        }
      }
    } 
  //Produkt noch nicht im Warenkorb => neues Cart Item bauen
  // Element erzeugen
    let cartRowElement = document.createElement("div");
    cartRowElement.setAttribute("id", "cartItemContainer");
    cartRowElement.setAttribute("class", "cart-item-container");
    // Backtick-Template
    cartRowElement.innerHTML = `
    <div class="cart-item" data-price="${productPrice}" role="row" data-productID = "${productIDTile}">
      <div class="product-items">
        <img class="checkout-image" src="${productPicture}" alt="${productPictureAlt}"/>
        <div class="product-info">
          <p class="cart-item-title">${productName}</p>
          <p class="cart-item-weight">${productWeight}</p>
          <p class="cart-item-price">${productPrice}</p>
        </div>
      </div>
      <div class="checkout-counter">
        <button class="remove-btn" aria-label="Artikel entfernen" title="Entfernen"><img src="Icons/icon_svg/xmark-solid-full.svg" class="x-mark"></button>
      <div class="stepper" aria-label="Menge ändern">
        <button class="qty-btn minus" aria-label="Menge verringern"><img src="Icons/icon_svg/minus-solid-full.svg"></button>
        <div class="qty">1</div>
        <button class="qty-btn plus"><img src="Icons/icon_svg/plus-solid-full.svg" alt="Plus-Icon"></button>
      </div>
      </div>
    </div>
    `;

    // Zeile im Warenkorb ausspielen
    document.querySelector("#checkoutList").append(cartRowElement);
    // Events für neue DOM-Ele,ente anmelden
    let shopItemButton = document.getElementsByClassName("js-intoCart");
    for (let i = 0; i < shopItemButton.length; i++) {
      shopItemButton[i].addEventListener("click", intoCart);
    }
    // EventListener ergänzen
    let cartRow = cartRowElement.querySelector(".remove-btn").addEventListener("click", removeCartItem);
    // + Button
    let cartRowPlus  = cartRowElement.querySelector('.plus').addEventListener('click', increaseQuantity);
    let cartRowMinus  = cartRowElement.querySelector('.minus').addEventListener('click', decreaseQuantity);

  //HIER MUSS AUCH DER ÜPREIS NEU AUSGERECHNET WERDEN
  updateCartTotal();         
}
// Plus - Button 
function increaseQuantity(event) {
    var button = event.currentTarget;
    var plus = parseInt(button.parentElement.querySelector('.qty').innerText);
    plus = plus + 1;
    button.parentElement.querySelector('.qty').innerText = plus;
    updateCartTotal();
}
// Minus - Button 
function decreaseQuantity(event) {
    var button = event.currentTarget;
    var minus = parseInt(button.parentElement.querySelector('.qty').innerText);
    //Reduzieren oder direkt aus dem Warenkorb löschen
    if(minus > 1){
      minus = minus - 1;
      button.parentElement.querySelector('.qty').innerText = minus;
    } else {
      button.parentElement.parentElement.parentElement.remove();
    }
    updateCartTotal();
}
// Funktion für das Entfernen von Produkten im Warenkorb
function removeCartItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.parentElement.remove();
  updateCartTotal();
}
// Hier wird die Funktion hinzugefügt, die Preise aus dem Warenkorb zusammenzurechnen
function updateCartTotal() {
  let cartItemContainer = document.querySelector("#checkoutList");
  let cartRows = cartItemContainer.querySelectorAll(".cart-item");
  let total = 0;

  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("cart-item-price")[0];
    let quantityElement = cartRow.getElementsByClassName("qty")[0];
    let price = parseFloat(priceElement.innerText.replace("€", "").replace(",", "."));
    quantity = quantityElement.innerText;
    total = total + (price * quantity);
  }
  // Gesamtpreis auf 2 Stellen und Punkt wieder zu nem Komma machen (vorher zu einem String machen)
  total = total.toFixed(2);
  let totalColon = total.toString().replace(".", ",");
  document.getElementsByClassName("summary-value")[0].innerText =  totalColon + "€";
}
// Validiert das Formular
let radioValueCheck  = document.querySelector('#order-form').addEventListener('change', validateForm);

function validateForm() {
  let orderForm = document.querySelector("#order-form");
  //Selected Values in Form
  let selectedDate = orderForm.elements["deliveryDate"].value;
  let selectedLocation = orderForm.elements["location"].value;
  let cartPriceCheck = document.getElementsByClassName("summary-value")[0].innerText;

  if (selectedDate && selectedLocation ) {
    //Daten aus dem Warenkorb ins Overlay schreiben
    document.querySelector("#overlayDate").innerText = "am " + selectedDate;
    document.querySelector("#overlayLocation").innerText = selectedLocation;
    // TO Do: Check ob etwas im Warenkorb ist
    if(cartPriceCheck!="0,00 €") {
      activateButton();
    }
  }
  }
  // Funktion für den Active Button
  function activateButton() {
    // Farbswitch vom Default Button zum Active Button
      document.querySelector(".order-btn").classList.add("active-cart-btn");
      //Klick.Event Order Button
      let orderButton  = document.querySelector('.order-btn').addEventListener('click', orderButtonClicked);
  }

    // Hier wird das Overlay aktiviert beim klicken des Buttons
  function orderButtonClicked() {
    document.querySelector("#overlay-complete").classList.add("show-overlay");
    document.querySelector("#overlay-complete").attributes.height = "100%";
    document.querySelector(".overlay-content").classList.add("flex");
  }

// Filterfunktion für die Filter Pills
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCategory = document.querySelectorAll(
  ".content-section section",
);
// Filterfunktion definieren
const filterCards = (e) => {
  document.querySelector(".filter-buttons .active").classList.remove("active");
  e.currentTarget.classList.add("active");
  filterableCategory.forEach((category) => {
    category.classList.add("hide");
    if (category.dataset.name === e.currentTarget.dataset.name) {
      category.classList.remove("hide");
    }
  });
  scrollToContentTop();
}
filterButtons.forEach((button) =>
  button.addEventListener("click", filterCards),
);
// Scrollt automatisch zum Anfang des Contents
function scrollToContentTop() {
  const contentTop = document.getElementById("main-content");
  contentTop.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
// Abholdatum automatsieren, sodass das Produkt zwei Tage später abholbar ist
function getDate() {
  const today = new Date();
  const germanDateToday = today.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const germanDateTomorrow = tomorrow.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  document.getElementById("tomorrow").value = germanDateTomorrow;
  document.querySelector(".tomorrow").innerText = germanDateTomorrow;
  const overMorrow = new Date(today);
  overMorrow.setDate(today.getDate() + 2);
  const germanDateOvermorrow = overMorrow.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  document.getElementById("overmorrow").value = germanDateOvermorrow;
  document.querySelector(".overmorrow").innerText = germanDateOvermorrow;
}
getDate();