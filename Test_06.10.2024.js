// Creating Function Inside the Object

var $HotelMenu = {
    northIndianFoods : {
        item1 : "Rotti",
        item1Price : 20,
        item2 : "Naan",
        item2Price : 30,
        item3 : "Samosa",
        item3Price : 15
    },
    southIndianFood : {
        item1 : "Dhosa",
        item1Price : 25,
        item2 : "Idly",
        item2Price : 5,
        item3 : "Parotta",
        item3Price : 17
    },
    Deserts : function() {        
        console.log("IceCreams are Currently Not Available");
        console.log("Available Items are"); 
        return  this.southIndianFood
        // Need to check with Mam for Returning UnDefined in Output    
    }
}

console.log($HotelMenu.southIndianFood["item2"])  
console.log("Printing Function in the Object", $HotelMenu.Deserts())
console.log("\n");

// Creating Object inside the function
function _mobileShop(Brand, Model, Year, Price)
{
    this.brand = Brand;
    this.model = Model;
    this.year = Year;    
    this.price = Price;  
    // console.log(this.model)     
}

const printMobileShop = new _mobileShop("Samsung", "Rx125", 2005, 9650)
console.log("Printing Object Values in the Function", printMobileShop)

const test = _mobileShop("Nokia","z", 1, 2);

_mobileShop("Nokia","z", 1, 2);

// Shallow Copy
let shallowCopy = {
    Cricket : "Sachin",
    Music : "Aniruth",
    Mobile : {        
        Model : 2020
    }
}

// Shallow Copy Method 1
let org = Object.assign({}, shallowCopy);

org.Music = "Rahman";
org.Mobile.Model = 2005;

// Working Shallow Copy without Nested
console.log(shallowCopy.Music)
console.log(org.Music)

// Not Working Shallow Copy with Nested
console.log(shallowCopy.Mobile)
console.log(org.Mobile)

// Shallow Copy Method 2
let org2 = {...shallowCopy};
org2.Cricket = "Dhoni";
org2.Mobile.Model = 1000;

// Working Shallow Copy without Nested
console.log(shallowCopy.Cricket)
console.log(org2.Cricket)

// Not Working Shallow Copy with Nested
console.log(shallowCopy.Mobile)
console.log(org2.Mobile)

// Deep Copy Method
let Deep = JSON.parse(JSON.stringify(shallowCopy));
Deep.Mobile.Model = 5000;
Deep.Cricket = "Shewag";

// Working Deep Copy without Nested
console.log(shallowCopy.Cricket)
console.log(Deep.Cricket)

// Working Deep Copy with Nested
console.log(shallowCopy.Mobile)
console.log(Deep.Mobile)


