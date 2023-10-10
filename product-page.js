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


// NFC Scanning

const scan = async() =>{
    var paragraph = document.getElementById("myParagraph");
    if ('NDEFReader' in window) { 
        try {
            const ndef = new window.NDEFReader();
            await ndef.scan();
            
            console.log("Scan started successfully.");
            ndef.onreadingerror = () => {
                console.log("Cannot read data from the NFC tag. Try another one?");
            };
            
            ndef.onreading = event => {
                console.log("NDEF message read.");
                paragraph.innerHTML = "This is the new content.";
                onReading(event);
                setActions({
                    scan: 'scanned',
                    write: null
                });
            };

        } catch(error){
            console.log(`Error! Scan failed to start: ${error}.`);
        };
    }
};