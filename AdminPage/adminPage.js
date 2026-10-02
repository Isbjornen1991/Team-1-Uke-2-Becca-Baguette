//Model

//View
function updateAdminView() {
  const app = document.getElementById("app");

  app.innerHTML = /*HTML*/ `
    <div class="adminHeader">
        <h1>Becka Baguette Administrasjonsside</h1>
        <div class="previewButtonArea">
            <button>Forhåndsvis Siden</button>
        </div>
    </div>
    <div class="centralArea">
        <div class="leftPanel">
            <div class="adminButtons">
                <button>Legg til Produkt</button>
                <button>Rediger Produkt</button>
                <button>Slett Produkt</button>
                <button>Legg til Kategori</button>
                <button>Slett Kategori</button>
            </div>
            <div class="inputsArea">
                <div>
                    <button>Produktnavn</button>
                    <button>Kategori</button>
                    <button>Beskrivelse</button>
                    <button>Ingredienser</button>
                    <button>Pris</button>
                    <button>Juster Antall</button>
                </div>
                <div>
                    <button>Lagre</button>
                    <button>Slett</button>
                </div>
                <div class="productImgs"></div>
            </div>
        </div>
        <div class="rightPanel">
            <div class="productsOverviewArea">
                <div>Produktnavn</div>
                <div>40 stk</div>
                <button>↑</button>
                <button>↓</button>
            </div>
    </div>
    </div>
    </div>
    <div class="previewArea">
        <div>${productRenderer()}</div>
    </div>
    
  `;
}

//Controller
// function productRenderer() {}
