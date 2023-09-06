
async function productsFetcher() {
    const productsResponse = await fetch("https://test1-35123-default-rtdb.firebaseio.com/.json");
    const productsData = await productsResponse.json();
    const productElement = document.querySelector(".product");       
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
    <div class="product-card">
    <div class="product-card__container" onclick="showProductItem(${product.Id})">
    <h3>${product.Name}</h3>
    <p><b>${product.Desc}</p>
    <img src="${product.Image}" alt="Product Image" class="product-image">
    <p><b>${product.Price}</p>
    <p><b>Color: ${product.Color} </p>
    </div>
    </div>
    `
}



