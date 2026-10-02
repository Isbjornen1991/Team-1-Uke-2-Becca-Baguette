function productRenderer(productID) {
  const product = model.productRegister.find((p) => p.id === productID);
  let html = "";

  if (!product) {
    return (html = /*HTML*/ `<div>Produktet ble ikke funnet.</div>`);
  }

  const allergenList = product.allergens.join(", ");

  return (html = /*HTML*/ `<div class="productCard">
    <div>${product.name}</div>
    <div>${product.price}</div>
    <div>${product.description}</div>
    <div>${allergenList}</div>
    <button>Legg til i Handlekurv</button>`);
}
