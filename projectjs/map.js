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