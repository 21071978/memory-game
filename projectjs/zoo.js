/* //התכנית מדמה בסיס נתונים (מחרוזת) ומערך=טבלה שלתוכה נשפכים הנתונים לצורך ביצוע כל הפעולות.כמובן שבסיס הנתונים מתעדכן לאחר כל פעולה
convertArrToStr// convertStrToArr//ישנם פונקציות תשתיתיות- העברה ממחרוזת למערך וכן להיפך
//התכנית כוללת מיון בשיטת בועות וכן חיפוש בינארי
//לצערי לא כל הפונקציות עובדות מחוסר זמן(:)
convertToTypeDAta//התכנית תומכת בטיפוס נתונים מסוג חיה אשר כולל קוד וחיה בנפרד עבור כל תא במערך
 */ //התכנית כוללת פונקציות FLEXABILITY אשר ניתן להשתמש בהם גם בתכניות אחרות ללא שינויים
 function addStr(str1, str2, str3) {
    let str_result = str1.concat(",", str2, ",", str3);
    return str_result;
  }
  function convertToTypeDAta(arr) {
    console.log(arr);
    let arrType = [];
    let str, i;
    for (i = 0; i < arr.length; i++) {
      str = arr[i];
      iKey = findKey(str);
      arrType[i] = {
        nameOfAnimal: str.slice(0, iKey),
        key: str.slice(iKey, str.length),
      };
      console.log({ nameOfAnimal: arrType[i], key: arr[i] });
    }
  
    console.log(arrType);
    return arrType;
  }
  function sortArr(arr) {
    //מיון בועות
    let str, strKey;
    for (i = arr.length - 1; i >= 0; i--)
      for (j = 0; j < i; j++) {
        if (Number(arr[j].key) > Number(arr[j + 1].key)) {
          str = arr[j + 1].nameOfAnimal;
          strKey = arr[j + 1].key;
          arr[j + 1].nameOfAnimal = arr[j].nameOfAnimal;
          arr[j + 1].key = arr[j].key;
          arr[j].nameOfAnimal = str;
          arr[j].key = strKey;
          //console.log(str,strKey)
        }
        console.log(arr, "keyyyyyyyyyyyyy", i, j);
  
        // console.log({ nameOfAnimal: arr[i]},{ key: arr[i] },"sortttttttttttttttttt");
      }
  
    return arr;
  }
  function findKey2(arr, keyToFind, start, end) {
    console.log(arr, keyToFind, start, end,Number(arr[Math.round(end/2)].key))
    if (Number(keyToFind) > Number(arr[Math.round(start)].key))
     return  findKey2(arr, keyToFind, Math.round((start+end))/2, end);
    if (Number(keyToFind) < Number(arr[Math.round(start)].key))
     return  findKey2(arr, keyToFind, start, Math.round(end)/2);
      console.log(arr[Math.round(end/2)].key,"finddddddddddddddd")
    if (Number(keyToFind) == Number(arr[Math.round( end/2 )].key)) return 1;
    if (start > end) return -1;
    
  }
  
  function findKey(str) {
    for (i = 0; i < str.length; i++) if (str[i] >= 0 && str[i] <= 9) return i;
    return -1;
  }
  function convertStrToArr(str) {
    let arr = str.split(",");
    console.log(arr);
    return arr;
  }
  function convertArrToStr(arr) {
    for (i of arr) arr + ",";
    let str = arr.join();
    return str;
  }
  function AddAnimal(str) {
    arr = convertStrToArr(str);
    let animal = prompt("enter animal");
    let key = prompt("enter key");
    find = findKey2(arr, key, 0, arr2.length);
    if (find) console.log("key is");
    else {
      arr.push(); // נדרש להשלים
      sortArr(arr);
      convertArrToStr(arr);
    }
  }
  function delAnimal(key) {
    arr = convertStrToArr(str);
    arr1 = convertToTypeDAta(arr);
  
    isFind = findKey2(arr1.key, key);
    if (isFind) {
      arr.splice(isFind, 1);
      return convertArrToStr(arr);
      console.log("the animal deleted");
    } else console.log("the key isnt");
  }
  function findAnimalByKey(str, key) {
    arr = convertStrToArr(str);
    arr1 = convertToTypeDAta(arr);
    console.log(arr1, "onvertToTypeDAta");
    keyRes = findKey2(arr1, key, 0, arr1.length);
    console.log(arr1[keyRes].nameOfAnimal);
  }
  function findByName(str, strToFind) {
    arr = convertStrToArr(str);
    arr1 = convertToTypeDAta(arr);
    resFind = false;
    for (i of arr1) {
      res = arr1.nameOfAnimalincludes.includes(strToFind);
      if (res) {
        console.log(arr1.nameOfAnimal, arr1.key);
        resFind = true;
      }
      if (resFind == false) console.log("there isnt animal by the name");
    }
  }
  function menu() {
    return /* (choise = "5"); */ prompt(
      "1.search by key, 2. search by name , 3.add new animal, 4.delete animal, 5.exit---enter your choise"
    );
  }
  function main(str) {
    choise = menu();
    console.log(choise);
  
    let isNoExit = true;
    while (isNoExit == true) {
      switch (choise) {
        case "1":
          {
            key = prompt("what's the key of animal?");
            findAnimalByKey(str, key);
          }
          break;
        case "2":
          {
            strToFind = prompt("what's the name/char of animal?");
            findByName(str, strToFind);
          }
          break;
        case "3":
          {
            AddAnimal(str);
          }
          break;
        case "4":
          {
            key = prompt("what's the key of animal?");
            delAnimal(key);
          }
          break;
        case "5":
          {
            isNoExit = false;
          }
          break;
        default: {
          choise = menu();
        }
      }
      return 1;
    }
  }
  let txt1 = "Dog123,CAT3,LiOn7,DolphiN11,fish6";
  let txt2 = "PIG17,bear29,BiRd8";
  let txt3 = "SNAKE39,donkey14";
  let str_result = "" + addStr(txt1, txt2, txt3);
  
  
  let arr = convertStrToArr(str_result);
  arr1=convertToTypeDAta(arr);
  
   /*  arr = convertStrToArr(str_result);
  console.log(arr, "dconvertStrToArr");
   */
  let str = convertArrToStr(arr);
  console.log(str, "convertArrToStr");
  //let x = {firstName:"John", lastName:"Doe"};
  //console.log(arr1, "onvertToTypeDAta");
  
  arr2=sortArr(arr1)
  //console.log({ nameOfAnimal: arr2, key: arr2, },"sortArt");
  
  find= findKey2(arr2,"6",0,arr2.length)
  console.log(find); 
  //main(str_result);