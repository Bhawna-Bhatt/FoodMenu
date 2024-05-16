let menu = {
    drinks : [
       "Water", "Tea", "Sweet Tea", 
       "Coke", "Dr. Pepper", "Sprite"
     ],
    entrees : [
       "Hamburger w/ Fries", 
       "Grilled Cheese w/ Tater Tots",
       "Grilled Chicken w/ Veggies", 
       "Chicken Fried Steak w/ Mashed Potatoes",
       "Fried Shrimp w/ Coleslaw", 
       "Veggie Plate"
    ],
    desserts: [
       "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
 };

 const menulist = document.getElementById("menu");
 let keyArray = Object.keys(menu);

 const showitem = document.getElementById("items");
 let itemlist = Object.values(menu);
 



 window.onload = function (){
    initdropdown();
    menulist.onchange = onMenuSelectionChanged;

  }

  function initdropdown () 
  {
        console.log(keyArray);

    for (let i=0;i<keyArray.length;i++) {
       let theOption = new Option((keyArray[i]));
            menulist.appendChild(theOption)
    }
 }


    function onMenuSelectionChanged() {
    
        showitem.innerHTML ="";
    if (menulist.value=="drinks"){
        createSubMenu((itemlist[0]));
    }
    else if (menulist.value=="entrees"){
        createSubMenu(itemlist[1]);
    }
    else if (menulist.value=="desserts"){
        createSubMenu(itemlist[2]);
    }
    else {
        
    } 
}

function createSubMenu(itemArray) {
     
    

    for (let i=0;i<itemArray.length;i++) {
        let theOption = new Option((itemArray[i]));
        showitem.appendChild(theOption)
    }

}


    

    


    

  