/* function printRes(str){
    if(str){
console.log("result-----")
for (i=1;i<str.length+1;i++){
    console.log(i,-,str[i-1])
}
console.log("----------")
    }
    else console.log("--no result--")
}
 */
/*  let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.filter((v,i,str)=>{
    if(v.length>=6) return true
    else return false
})
console.log(str1)
printRes(str1) */

/* let input=prompt("give me char");
let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.filter((v,i,str)=>{
    if (v.charAt(0)==input) return true
    else return false
})
printRes(str1) */

/* let input=prompt("give me char");
let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.filter((v,i,str)=>{
    if (v[0]==input) return true
    else return false
})
printRes(str1) */

/* let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.filter((v,i,str)=>{
    if (v.toLocaleLowerCase().split("p").length-1>=2) return true
    else return false
})
printRes(str1) */

/* let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.filter((v,i,str)=>{
    if (v.toLocaleLowerCase().split("i").length-1>=2) return true
    else return false
})
printRes(str1) */

/* 
 let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.filter((v,i,str)=>{
    if (v.toLocaleLowerCase().split("a").length-1>=2) return true
    else return false
})
printRes(str1)  */

/* let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.filter((v,i,str)=>{
    if (v.toLocaleLowerCase().split("t").length-1>=2) return true
    else return false
})
printRes(str1) */
/* 
let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.filter((v,i,str)=>{
    if (i%2==1) return true
    else return false
})
console.log(str1) */

/* let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.filter((v,i,str)=>{
    if (i%2==1) return true
    else return false
}).sort().reverse()
printRes(str1) */

/* let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.find((v,i,str)=>{
    if (v.length>=3 && v.length<=5 && v[v.length-1]=="e"||v[v.length-1]=="m"  ) return true
    else return false
})
printRes(str1) */

/* let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.find((v,i,str)=>{
    if (v.split("").sort().join().replaceAll(",","").includes("cc")==true ) return true
    else return false
})
printRes(str1) */

/* let str=["Banana", "Peach", "Pineapple", "Apple", "Grapes", "Fig", "Plum","Kiwi","Coconut", "Papaya"];
let str1=str.find((v,i,str)=>{
    if (v[0].toLowerCase==str[str.length-1].slice(-1) ) return true
    else return false
})
printRes(str1) */

/* let str=[23,5,2,76,9,65,43,90,3];
let str1=str.map((v,i,str)=>{
    return Math.round (v*1.1)
   
})
console.log(str1) */

/* let str=[23,5,2,76,9,65,43,90,3];
let str1=str.map((v,i,str)=>{
    return "price:".concat(v)
   
})
console.log(str1) */

/* let str=[23,5,2,76,9,65,43,90,3];
let str1=str.map((v,i,str)=>{
    if (((v%100-v%10)/10)%2==0&& v>9) return v*Math.floor(Math.random()*10)
    else return v
   
})
console.log(str1) */

/* let str=["michael","netanel","meir","trol","avi","nati"];
let str1=str.map((v,i,str)=>{
    if (v.length<4) return v.concat("  AVI LEVI  ")
    else return v
   
})
console.log(str1) */

/* let str=["michael","netanel","meir","trol","avi","nati"];
let str1=str.map((v,i,str)=>{
    if (i%2==0) return v.concat("  KOBI  ")
    else return v
   
})
console.log(str1) */

/* let str=["michael","netanel","meir","trol","avi","nati"];
let str1=str.map((v,i,str)=>{
     return v.split("e").join().replaceAll(",","").split("r").join().
     replaceAll(",","").split("c").join().replaceAll(",","").replaceAll("y","p")
    
    
   
})
console.log(str1) */

//let prod={makat:"1",price:20,name:"table",stok:12};
/* let listOfProd=[];
listOfProd[0]={makat:"1",price:20,name:"table",amount:12};
listOfProd[1]={makat:"2",price:20,name:"table",amount:12};
listOfProd[2]={makat:"3",price:20,name:"table",amount:12};
listOfProd[3]={makat:"4",price:20,name:"table",amount:12};
listOfProd[4]={makat:"5",price:20,name:"table",amount:12};

function insertProdoct(x){
listOfProd.push(x)
return 1
}
x={makat:"100",price:20,name:"table",amount:12}
insertProdoct(x)


function replacemlai(name,amount){
    listOfProd.find(v=>v.makat.includes(name)).amount=amount
    return 1
    }
    replacemlai("5",20)

    function reduceSTOCK(name,amountTo){
        listOfProd.find(v=>v.makat.includes(name)).amount-=amountTo
        return 1
        }
        reduceSTOCK("5",20) */
/*  const items= {
            name:"rtr",
            id:1,
            amount:12,
            price:12, */
// addQuantity:(amount)=>void;
//minusQuantity:(amount)=>void;

function createItem(name, id, amount, price) {
  return {
    name,
    id,
    amount,
    price,
    addQuantity: function (amount) {
      this.amount += amount;
    },
    minusQuantity: function (amount) {
            if (this.amount - amount >= 0) {
        this.amount -= amount;
      }
    }
   
  };
}
function find1(id){
 
  for(i=0;i<listOfSell.length;i++)
      if (listOfSell[i].id==id) return i
   return -1
}
 

/*   for(i in this){
    if (this[i].id==id) {console.log("sddddddddddddddddddd");return id}
    else return-1 */
  
  
      
//item = {};
let listOfSell=[];
let listOfProd = [];
listOfProd.push((items = createItem("multimedia speakers ", 12, 5, 120)));
listOfProd.push((items = createItem("laptop ", 13, 5, 120)));
listOfProd.push((items = createItem("computer ", 14, 5, 120)));
//listOfSell.push((items = createItem("computer ", 14, 5, 120)));
/* listOfSell.forEach(function(v,i,arr){
  if (v.id==id) return id
      
   
  }

)  */


/* books.push(new_book);
    new_book = {id: "book2", name: "The_call", category: "Movies", price: 17};
    books.push(new_book); */

/*  for(i=0;i<listOfProd.length;i++)
{
 elem=document.createElement
elem.innerText=cards[i].typeOfCards; */ 
const newlistOfProd = document.createElement("div");
let listProd = document.getElementById("ulProd");

for (i = 0; i < listOfProd.length; i++) {
  
  let li = document.createElement("li");

  li.innerText = 'name: ' + listOfProd[i].name + ', amount: ' + listOfProd[i].amount  ; // items;
 
  listProd.appendChild(li);
  listProd.id=i
}
 
  const newlistSell = document.createElement("div");
let listSell = document.getElementById("ulSell");

 
 





let elems = document.getElementsByTagName('li');
Array.from(elems).forEach((v,i) => v.addEventListener('click', function(){
 //listOfProd[i].amount--
 listOfProd[i].minusQuantity(1)
  this.innerHTML = 'name: ' + listOfProd[i].name + ', amount: ' + listOfProd[i].amount; 
  //this.style.background = '#E3F6CE';

  /* dblclick */
}));
let x=0
Array.from(elems).forEach((v,i) => v.addEventListener('click', function(){
  j=find1(listOfProd[i].id)
if (j==-1){

  listOfSell.push((items = createItem(listOfProd[i].name, listOfProd[i].id, 1, listOfProd[i].price)));


  let p = document.createElement("p");
  p.innerText = 'name: ' + listOfSell[listOfSell.length-1].name + ', amount: ' + listOfSell[listOfSell.length-1].amount;
 // this.innerHTML = 'name: ' + listOfSell[i].name + ', amount: ' + listOfSell[i].amount; 
  listSell.appendChild(p);
  listSell.id=++x
 // elemsa = document.getElementsByTagName('p');
 let elemsp = document.getElementsByTagName('p');

/*  Array.from(elemsp).forEach((v,i) => v.addEventListener('click', function(){
  //listOfProd[i].amount--
  
   listOfSell[i].addQuantity(1)
   this.innerHTML = 'name: ' + listOfSell[i].name + ', amount: ' + listOfSell[i].amount; 
  })); */

  Array.from(elemsp).forEach((v,i) => v.addEventListener('dblclick', function(){
    //listOfProd[i].amount--
     listOfSell[i].minusQuantity(1)
    // listSell.innerText = 'name: ' + listOfProd[i].name + ', amount: ' + listOfProd[i].amount; 
     

    }));
    elemsp.innerHTML=""
    for (i = 0; i < listOfSell.length; i++) {
  
      let li = document.createElement("li");
    
      li.innerText = 'name: ' + listOfSell[i].name + ', amount: ' + listOfSell[i].amount  ; // items;
     
      listOfSell.appendChild(li);
     // listProd.id=i
    }
  }
  
  else{
   if (listOfProd[i].amount>0) listOfSell[j].addQuantity(1)
   console.log( listOfSell[j].amount,j)
   //p.innerText = 'name: ' + listOfSell[listOfSell.length-1].name + ', amount: ' + listOfSell[listOfSell.length-1].amount;
  }
})); 
  //  listOfSell[j].addQuantity(1)
//listOfSell[j].amount=12
//Array.from(elemsa) .forEach((v,i) => v.addEventListener('click', function(){
 // this.innerHTML = 'name: ' + listOfSell[j].name + ', amount: ' + listOfProd[j].amount; 
 
 
   //this.style.background = '#E3F6CE';
 
   /* dblclick */


  
  
   
   //this.style.background = '#E3F6CE';
 
  
 




/* var elems = document.getElementsByTagName('li');
Array.from(elems).forEach((v,i) => v.addEventListener('click', function(){
  Array.from(elems).forEach((c,k) => {c.style.background = 'transparent'; c.innerHTML = 'name: ' + records.states[k].name;});
  this.innerHTML = 'name: ' + records.states[i].name + ', command: ' + records.states[i].command; 
  //this.style.background = '#E3F6CE';
})); */
/* var records = {states:[{name:"johor",command:"view_johor"},{name:"selangor",command:"view_selangor"},{name:"melaka",command:"view_melaka"},{name:"kuala lumpur",command:"view_kl"},{name:"penang",command:"view_penang"}]},

    elem = document.getElementById('ul');  //get 'ul' element from the DOM
      records.states.forEach(function(v) { //iterate over array in JSON
        var li = document.createElement('li'); //create 'li' element
        li.innerHTML = 'name: ' + v.name; //assign your data to each 'li'
        elem.appendChild(li); //append 'li' to the 'ul' element
    });
    
var elems = document.getElementsByTagName('li');
Array.from(elems).forEach((v,i) => v.addEventListener('click', function(){
  Array.from(elems).forEach((c,k) => {c.style.background = 'transparent'; c.innerHTML = 'name: ' + records.states[k].name;});
  this.innerHTML = 'name: ' + records.states[i].name + ', command: ' + records.states[i].command; 
  //this.style.background = '#E3F6CE';
})); */
/* /* function createTable(element, tableData) {
  
  // creating table elements
  var table = document.createElement('table');
  // creating table body <tbody> element
  var tableBody = document.createElement('tbody');

  // creating rows based on first diamention datas
  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');

    // creating cells in each row based on second diamention datas
    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      // adding array item to it's cell
      cell.appendChild(document.createTextNode(cellData));
      // adding the cell to it's row
      row.appendChild(cell);
    });

    // adding each row to table body
    tableBody.appendChild(row);
  }); */

  // adding table body to table
  /* table.appendChild(tableBody);
  // adding table to document body
  element.appendChild(table);
}

// example
createTable(
 // document.getElementById('my-table'),[ [listOfProd[0].name,listOfProd[0].name],[listOfProd[0].id]]
 document.getElementById('my-table'),listOfProd[0]
  /* [
    ['r1, c1', ' r1, c2'], 
    ['r2, c1', ' r2, c2']
  ] */

/*  }   
        
        const items: {
name:any;
id:any;
amount:any;
price:any;
addQuantity:(amount:any)=>void;
minusQuantity:(amount:any)=>void;
        }[]
        

    } */
/* <button id="button">Alt+Shift+Click on me!</button>

<script>
  button.onclick = function(event) {
    if (event.altKey && event.shiftKey) {
      alert('Hooray!');
    }
  };
</script>


<!DOCTYPE html>
<html>
<head>
    <title>JS Mouse Events - Button Demo</title>
</head>
<body>
    <button id="btn">Click me with any mouse button: left, right, middle, ...</button>
    <p id="message"></p>
    <script>
        let btn = document.querySelector('#btn');

        // disable context menu when right-mouse clicked
        btn.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        // show the mouse event message
        btn.addEventListener('mouseup', (e) => {
            let msg = document.querySelector('#message');
            switch (e.button) {
                case 0:
                    msg.textContent = 'Left mouse button clicked.';
                    break;
                case 1:
                    msg.textContent = 'Middle mouse button clicked.';
                    break;
                case 2:
                    msg.textContent = 'Right mouse button clicked.';
                    break;
                default:
                    msg.textContent = `Unknown mouse button code: ${event.button}`;
            }
        });
    </script>
</body>
</html */