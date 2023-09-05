async function itemFetcher(){
    const itemID = localStorage.getItem("item")
    const displayItem = await fetch(`https://test1-35123-default-rtdb.firebaseio.com/products-prop?Id=${itemID}.json`)
    const displayItemData =  await displayItem.json()
    const displayItemArray = Object.values(displayItemData); //idk what this is
    console.log(displayItemData)
    console.log(displayItemArray)


    const ItemElement = document.querySelector(".item");       

    
    ItemElement.innerHTML = displayItemArray.map((product) => userHTML(product)).join("");
}


itemFetcher()

function showProductItem(item) {
    localStorage.setItem("item", item);
    window.location.href = `${window.location.origin}/product-page.html`;
    console.log(item)
}


function userHTML(item){
    return        `
    <div class="item__img">
        <figure class="item--pics">
        <img class="item--pic" src="${item.Image}" alt="">
        </figure>
    </div>

    <div class="item__info">
        <div class="item__info--container">
        <h1 class="item__info--heading"> ${item.Name} </h1>
        <p>${item.Price}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nisi!</p>
        </div>

        <div class="item__color--container">
        <h2 class="item__color--heading">Colors:</h2>
        <figure class="item--colors">
            <img class="item--color" src="./assets/Black.png" alt="">
        </figure>
        </div>

        <div class="action__bttns">
        <button class="buy__bttn" onclick="" >Buy</button>
        </div>

    </div>`
    
}










//     ItemElement.innerHTML = displayItemArray.filter(item => 
//         console.log(item)
        
        // `
        // <div class="item__img">
        //     <figure class="item--pics">
        //     <img class="item--pic" src="${item.Image}" alt="">
        //     </figure>
        // </div>

        // <div class="item__info">
        //     <div class="item__info--container">
        //     <h1 class="item__info--heading"> ${item.Name} </h1>
        //     <p>${item.Price}</p>
        //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nisi!</p>
        //     </div>

        //     <div class="item__color--container">
        //     <h2 class="item__color--heading">Colors:</h2>
        //     <figure class="item--colors">
        //         <img class="item--color" src="./assets/Black.png" alt="">
        //     </figure>
        //     </div>

        //     <div class="action__bttns">
        //     <button class="buy__bttn" onclick="" >Buy</button>
        //     </div>

        // </div>`).join('')


// }




// function userHTML(item){
    

//     console.log(item)
//     return 
// }



// async function main(){
//   const id = localStorage.getItem("id")
//   const displayItem = await fetch(`https://test1-35123-default-rtdb.firebaseio.com/.json`)
//   const displayItemData = await displayItem.json()
//   const ItemElement = document.querySelector(".item");       
//   // console.log(displayItemArray)
  
//   const displayItemArray = Object.values(displayItemData); //idk what this is
//   ItemElement.innerHTML = displayItemArray.map(item => 
  
//   `
//       <div class="item__img">
//         <figure class="item--pics">
//           <img class="item--pic" src="${item.Image}" alt="">
//         </figure>
//       </div>
  
//       <div class="item__info">
//         <div class="item__info--container">
//           <h1 class="item__info--heading"> ${item.Name} </h1>
//           <p>$99.99</p>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, nisi!</p>
//         </div>
  
//         <div class="item__color--container">
//           <h2 class="item__color--heading">Colors:</h2>
//           <figure class="item--colors">
//             <img class="item--color" src="./assets/Black.png" alt="">
//           </figure>
//         </div>
  
//         <div class="action__bttns">
//           <button class="buy__bttn" onclick="" >Buy</button>
//         </div>
  
//       </div>
//       `).join('')
// }

// main()
