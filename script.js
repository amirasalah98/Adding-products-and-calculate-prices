var productName= document.getElementById("pName"),
 productPrice= document.getElementById("pPrice"),
 inputs=document.querySelectorAll(".inputs"),
 addBtn =document.getElementById("addBtn"),
 addArea,
 productNameVal,
 productPriceVal,
 listnames,
 listprices,
 deleteItem,
 inputName,
 inputPrice,
 arrayOfProducts=[],
 arrayOfPrices=[],
 totalBtn,
 index=0,
 itemIndex;
addBtn.onclick=(function addFunc(){
    var addArea= document.createElement("div")
    addArea.setAttribute("id","addArea")
    addArea.setAttribute("class","addArea")
document.body.appendChild(addArea)

     productNameVal=productName.value;
     productPriceVal=parseInt(productPrice.value);
if (productNameVal&&productPriceVal!==""){

    listnames= document.createElement("span")
    listnames.setAttribute("id","listnames")
    listprices=document.createElement("span")
    listprices.setAttribute("id","listprices")
    listprices.setAttribute("class","listprices")
    addArea.appendChild(listnames)
    addArea.appendChild(listprices)

    deleteItem= document.createElement("button")
    deleteItem.setAttribute("id","deleteBtn")
    deleteItem.setAttribute("class","deleteBtn")
    var btnName=document.createTextNode("Delete")
    deleteItem.appendChild(btnName)
    inputName=document.createTextNode(productNameVal)
    inputPrice=document.createTextNode(productPriceVal)
    listnames.appendChild(inputName)
    listprices.appendChild(inputPrice)
    addArea.appendChild(deleteItem)

    arrayOfProducts.push(productNameVal);
    arrayOfPrices.push(productPriceVal);
}

totalPrices()
});

var removing=document.addEventListener('click',function(e){
    if(e.target.className == 'deleteBtn'){
        e.target.parentNode.remove()
        for(var i in arrayOfPrices){
            if(arrayOfPrices[i]==index){
                itemIndex=i
                console.log(arrayOfPrices)
            }
        }
        arrayOfPrices.splice(itemIndex,1)
        arrayOfProducts.splice(itemIndex,1)
    }
    totalPrices()


})

function totalPrices(){
var totalBtn=document.createElement("span")
totalBtn.setAttribute("id","total")
    document.body.appendChild(totalBtn)
   var sum=0;
   if(arrayOfPrices.length>0){
    for (var i=0;i<arrayOfPrices.length;i++){
      sum+=arrayOfPrices[i]
      totalBtn.innerHTML=sum ;
      console.log(arrayOfPrices)
    }
   
}
else{
    totalBtn.innerHTML=0;
}
}

// function handleTotal(e){
// if (e.target.className == 'addArea'){
//     e.target.classList.remove("listprices")

//     // totalPrices()
// }
// // sum-=this

// }