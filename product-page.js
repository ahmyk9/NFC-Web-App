



async function itemFetcher(){

    const itemID = localStorage.getItem("item")
    const displayItem = await fetch(`https://test1-35123-default-rtdb.firebaseio.com/${itemID}.json`)
    const displayItemData =  await displayItem.json()
    
    console.log(displayItemData)
    
    
    
    
    const ItemElement = document.querySelector(".item");       
    
    const itemName = ItemElement.querySelector("#item__Name")
    itemName.innerHTML = displayItemData.Name
 
    const itemDesc = ItemElement.querySelector("#item__Desc")
    itemDesc.innerHTML = displayItemData.Desc
 
    const itemPrice = ItemElement.querySelector("#item__Price")
    itemPrice.innerHTML = displayItemData.Price
 
    ItemElement.querySelector("#item__Image").src = displayItemData.Image;


}

itemFetcher()


