//------------------------------------------------------------------------
//                                  View
//------------------------------------------------------------------------
function updateAdminView() {
  const app = document.getElementById("app");

  app.innerHTML = /*HTML*/ `
    <div class="adminContainer">
      <div class="adminHeader">
        <div class="headerTitleCard">
          <h1>Becka Baguette administrasjonsside</h1>
        </div>
        <button class="previewSiteBtn">Forhåndsvis Nettsiden</button>
      </div>

      <div class="centralArea">
        
        <div class="leftPanel">
          <div class="adminActionButtons">
            <div class="actionCol">
              <button class="adminActionButtons">Legg til Produkt</button>
              <button class="adminActionButtons" onclick="editProduct()">Rediger Produkt</button>
              <button class="adminActionButtons" onclick="deleteProduct()">Slett Produkt</button>
            </div>
            <div class="actionCol">
              <button class="adminActionButtons" onclick="addCategory()">Legg til Kategori</button>
              <button class="adminActionButtons" onclick="deleteCategory()">Slett Kategori</button>
            </div>
          </div>

          <div class="inputsCard">
            <div class="formFields">
              <input
                type="text"
                placeholder="Produktnavn"
                value="${model.productForm.name}"
                oninput="model.productForm.name = this.value"
                />
              <input type="text" placeholder="Kategori" />
              <textarea placeholder="Beskrivelse"></textarea>
              <input
                type="text"
                placeholder="Ingredienser"
                value="${model.productForm.ingredients}"
                oninput="model.productForm.ingredients = this.value"
                />
              <input
                type="number"
                placeholder="Pris"
                value="${model.productForm.price}"
                oninput="model.productForm.price = this.value"
                 />
              <div class="qtyAdjustRow">
                <input
                    type="number"
                    placeholder="Juster Antall"
                    value="${model.productForm.quantity}"
                    oninput="model.productForm.quantity = this.value"
                  />
              </div>
            </div>

            <div class="imageUploadBox">
              <span>Legg til / Endre bilde</span>
            </div>

            <div class="formFooterButtons">
              <button class="saveBtn" onclick="addProduct()">Lagre</button>
              <button class="deleteBtn">Slett</button>
            </div>
          </div>
        </div>

        <div class="middlePanel">
          <div class="previewArea">
            <div class="previewHeader">Forhåndsvisning</div>
            ${productRenderer(1)}
          </div>

          <div class="hoursSection">
            <h3>Endre åpningstider og hentetidspunkt</h3>
            <div class="hoursButtonsRow">
              <button class="hoursCardBtn">Rediger åpningstider</button>
              <button class="hoursCardBtn">Rediger hentetidspunkt</button>
            </div>
          </div>
        </div>

        
        </div>
        <div class="rightPanel">
          <div class="productsOverviewArea">
            ${listProducts()}
          </div>
        </div>
    </div>
  `;
}
//------------------------------------------------------------------------
//                                  Controller
//------------------------------------------------------------------------

//------------------------------------------------------------------------
//                              Inventory Management
//------------------------------------------------------------------------
function listProducts() {
  let listhtml = "";
  const maxItems = Math.min(model.productRegister.length, 10);

  for (let i = 0; i < maxItems; i++) {
    const product = model.productRegister[i];

    listhtml += /*HTML*/ `
      <div class="stockRow">
        <div class="stockPill namePill">${product.name}</div>
        <div class="stockPill qtyPill">${product.quantity} stk</div>
        <div class="arrowBtnGroup">
          <button class="arrowBtn" onclick="adjustQuantity(${product.id}, 1)">↑</button>
          <button class="arrowBtn" onclick="adjustQuantity(${product.id}, -1)">↓</button>
        </div>
      </div>
    `;
  }

  return /*HTML*/ `
    <div class="stockHeaderBox">
      Visning av antall produkter igjen og lager antall
    </div>
    <div class="stockListContainer">
      ${listhtml}
      <button class="searchProductsBtn">Søk etter produkter</button>
    </div>
  `;
}

function adjustQuantity(prodId, change) {
  const product = model.productRegister.find((p) => p.id === prodId);

  if (product) {
    product.quantity = Math.max(0, product.quantity + change);
  }
  updateAdminView();
}

//------------------------------------------------------------------------
//                          Product Management
//------------------------------------------------------------------------
function addProduct() {
  const newProduct = {
    id: generateProductID(),
    name: model.productForm.name,
    description: model.productForm.description,
    allergens: [...model.productForm.allergens],
    options: [...model.productForm.options],
    price: Number(model.productForm.price),
    pictures: [...model.productForm.pictures],
    quantity: Number(model.productForm.quantity),
    categoryId: model.productForm.categoryId,
    hasDiscount: model.productForm.hasDiscount,
    discountAmount: Number(model.productForm.discountAmount),
  };

  model.productRegister.push(newProduct);

  resetProductForm();

  updateAdminView();
}
function editProduct() {}
function deleteProduct() {}

function addCategory() {}
function deleteCategory() {}

function resetProductForm() {
  model.productForm = {
    name: "",
    description: "",
    ingredients: "",
    allergens: [],
    options: [],
    price: 0,
    pictures: [],
    quantity: 0,
    categoryId: "",
    hasDiscount: false,
    discountAmount: 0,
  };
}

//------------------------------------------------------------------------
//                          ID Management
//------------------------------------------------------------------------

function generateProductID() {
  if (model.productRegister.length === 0) {
    return 1;
  }

  const idArray = model.productRegister.map((product) => product.id);

  const highestId = Math.max(...idArray);

  console.log(`Product added with id ${highestId + 1}`);
  return highestId + 1;
}

//------------------------------------------------------------------------
//                          Hours Management
//------------------------------------------------------------------------
function editOpeningHours() {}
function editPickUpHours() {}
