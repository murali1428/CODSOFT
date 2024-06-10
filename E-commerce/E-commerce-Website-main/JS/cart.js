

let subTotal = 0;
let cartDetailsArray = [];

const selectedProducts = JSON.parse(localStorage.getItem('selectedProducts'));



addElementsToPageFrom(selectedProducts)

calcTotal()

function addElementsToPageFrom(selectedProducts) {
  let tbody = document.querySelector("tbody");

  selectedProducts.forEach((product) => {
    let pPrice = product.inputValue || 1;
    let sTotal =  product.subTotalValue || product.pPrice ;

    let pCode = `
          <tr id=${product.pId}>
            <td><i class='bx bx-x' id="remove" onclick="removeFromPage(this)"></i></td>
            <td id="table-img"><img src="${product.imgSrc}" alt=""></td>
            <td id="tableP-name">${product.pName}</td>
            <td id="table-price">${product.pPrice}</td>
            <td id="quantity"><input onchange="updateValue(this)" type="number" min="1" value="${pPrice}"></td>
            <td id="subtable-total">${sTotal}</td>
          </tr>
    `;

    tbody.innerHTML +=pCode;
    
  });
}

function updateValue(q){
  if (q.value < 1){
    q.value = 1;
  }
  q.parentElement.nextElementSibling.innerHTML = "$" + q.value * q.parentElement.previousElementSibling.innerHTML.replace("$","");
  let thisId = q.parentElement.parentElement.id;

  let cartDetails = {
    pId:thisId,
    inputValue: q.value,
    subTotalValue: q.parentElement.nextElementSibling.innerHTML,
  }


  cartDetailsArray.push(cartDetails)

  mergeObjects(cartDetailsArray)

  calcTotal()
}

function removeFromPage(i){
  i.parentElement.parentElement.remove()
  removeItemFromLocalStorage(i.parentElement.parentElement.id)
  calcTotal()
}

function removeItemFromLocalStorage(id){
  for (let i = 0 ;i<selectedProducts.length;i++){
    if(selectedProducts[i].pId == id){
      selectedProducts.splice(i,1)
    }
  }

addDataToLocalStorageFrom(selectedProducts)
}


function addDataToLocalStorageFrom(selectedProducts) {
  window.localStorage.setItem("selectedProducts", JSON.stringify(selectedProducts));
}


function mergeObjects(cartDetailsArray){
  cartDetailsArray.forEach((detail)=>{
    selectedProducts.forEach((product,index)=>{
      if(detail.pId == product.pId){
        const mergedObj = Object.assign(product , detail);
        product = mergedObj;
      addDataToLocalStorageFrom(selectedProducts)
      }
    })
})
}

// ================== Total ==================
function calcTotal(){


  subTotal = 0;


  

    
    totalCells = document.querySelectorAll(".cart-table #subtable-total");
    totalCells.forEach((cell)=>{
      subTotal+= 0 || +cell.innerHTML.replace("$","") 
    })
    

    document.querySelector("#subtotal-head").innerHTML = "$" + subTotal;
    document.querySelector("#subtotal-body").innerHTML = "$" + subTotal;
    }




// ================== Total ==================
