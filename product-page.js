let itemID = window.location.href.slice(-1)
// we change this into fully search with href link with id
const displayItem = await fetch(
    `https://test1-35123-default-rtdb.firebaseio.com/${itemID}.json`
    );
    const displayItemData = await displayItem.json();
    
    console.log(displayItemData);
    console.log(window.location)
    
    async function itemFetcher() {
  const ItemElement = document.querySelector(".item");

  const itemName = ItemElement.querySelector("#item__Name");
  itemName.innerHTML = displayItemData.Name;

  const itemDesc = ItemElement.querySelector("#item__Desc");
  itemDesc.innerHTML = displayItemData.Desc;

  const itemPrice = ItemElement.querySelector("#item__Price");
  itemPrice.innerHTML = displayItemData.Price;

  const itemStock = ItemElement.querySelector("#item__Stock");
  itemStock.innerHTML = displayItemData.Stock;

  ItemElement.querySelector("#item__Image").src = displayItemData.Image;
}

itemFetcher()


console.log(window.location)

// Handle URL changes and load the appropriate product page
async function handleURLChange() {


    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("productId");

    if (productId) {
        itemFetcher(productId);
    } else {
        // Handle invalid or no product ID in the URL
    }
}

// Add event listener for URL changes
window.addEventListener("popstate", handleURLChange);

// Initial load
handleURLChange();


