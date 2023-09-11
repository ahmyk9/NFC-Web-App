
async function productsFetcher() {
    const productsResponse = await fetch("https://test1-35123-default-rtdb.firebaseio.com/.json");
    const productsData = await productsResponse.json();
    const productElement = document.querySelector(".products");       
    console.log(productsData);

    productElement.innerHTML = productsData.map((product) => userHTML(product)).join("");
}
productsFetcher();



function showProductItem(item) {
    localStorage.setItem("item", item);
    window.location.href = `${window.location.origin}/product-page.html`;
    console.log(item)
}




function userHTML(product){
    return`
    <div class="product__card" onclick="showProductItem(${product.Id})">
        <h3 class="product__name">${product.Name}</h3>
        <img src="${product.Image}" alt="Product Image" class="product__image"">
        <p class="product__price"><b>${product.Price}</b></p>
    </div>
    `
}


