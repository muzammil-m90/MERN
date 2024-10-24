let StrName = "We are Learning MERN Full Stack at AIITE";
let Trainer = "By Madhubala Trainer";
let TrimValue = "   HTML CSS and JS   ";
var paddingValue = "7";
var replaceText = "Always Having a happy Weekend and Not Happy Happy MonthEnd";   
var repeatText = "Smile Pls, ";
var StrToArr = "All, is| Well";

function StringPrint()
{
    console.log("Extracting characters using belowMethod");
    console.log("---------------------------------------");
    console.log("\n");

    console.log("1) Printing Original String Length is :",StrName.length);
    console.log("\n");

    console.log("2) Original String Value is :",StrName);
    console.log("\n");
    // at Position introduced in ES6 at 2022
    console.log("3) Printing Negative Charatcer using at:",StrName.at(-5));
    console.log("\n");
    // charAt Position it doesn't allow negative value
    console.log("4) Printing Charatcer using charAt:",StrName.charAt(5));
    console.log("\n");
    //charCodeAt used to get character code in UTF-16 ( 0 to 65535 )
    console.log("5) Printing Charatcer using charCodeAt:",StrName.charCodeAt(5));
    console.log("\n");
    // property access using array    
    console.log("6) Printing Charatcer using Property access array:",StrName[4]);
    console.log("\n");

    console.log("Extracting String using belowMethod");
    console.log("-----------------------------------");
    console.log("\n");

    //Slicing Method
    console.log("7) Printing the String Using Slicing Method:",StrName.slice(7,15));
    console.log("\n");

    //Slicing Method Printing Remaining Values
    console.log("8) Printing the Remaining String Using Slicing Method:",StrName.slice(16));
    console.log("\n");

    //Slicing Method Printing Using Negative input
    console.log("9) Printing the String Using Slicing Method negative Position:",StrName.slice(-14, -9));
    console.log("\n");

    //SubString Method it wont allows Negative value 
    console.log("10) Printing the String Using SubString Method:",StrName.substring(16,20));
    console.log("\n");

    //Substring Not accept Negative Value Example
    console.log("11) Printig the example string for not accepting negative input in Substring:",StrName.substring(-16,6));
    console.log("\n");

    //SubStr method
    console.log("12) Printing the String Using SubStr Method:",StrName.substr(21, 10));
    console.log("\n");

    console.log("String Methods");
    console.log("--------------");
    console.log("\n");

    //Concatenation , Upper and Lower String 
    console.log("13) Printing Concatenation of Two Strings Method 1 :", StrName+ " "+Trainer)
    console.log("\n");

    console.log("14) Printing Concatenation of Two Strings Method 2 :", StrName.concat(" ",Trainer))
    console.log("\n");
    
    console.log("15) Printing Concatenation of Two Strings Method 3 :", `${StrName} ${Trainer}`);
    console.log("\n");

    console.log("16) Printing Values in Upper Case:", StrName.toUpperCase());
    console.log("\n");

    console.log("17) Printing Values in Lower Case:", StrName.toLowerCase());
    console.log("\n");

    console.log("Trim Methods");
    console.log("------------");
    console.log("\n");
    
    console.log("18) Printing Values uisng TrimStart :",TrimValue.trimStart());
    console.log("\n");

    console.log("19) Printing Values uisng TrimEnd :",TrimValue.trimEnd());
    console.log("\n");

    console.log("20) Printing Values uisng Trim :",TrimValue.trim());
    console.log("\n");

    console.log("Padding Methods");
    console.log("---------------");
    console.log("\n");

    console.log("21) Printing Values uisng Padd Starting with 0 :",paddingValue.padStart(3,'0'));
    console.log("\n");

    console.log("22) Printing Values uisng Padd Starting with x :",paddingValue.padStart(3,'x'));
    console.log("\n");

    console.log("23) Printing Values uisng Padd Ending with 0 :",paddingValue.padEnd(3,'0'));
    console.log("\n");

    console.log("24) Printing Values uisng Padd Ending with 0 :",paddingValue.padEnd(3,'x'));
    console.log("\n");

    console.log("Repeat , Replace and ReplaceALL Methods");
    console.log("---------------------------------------");
    console.log("\n");
    
    console.log("25) Repeating the Values :",repeatText.repeat(5))
    console.log("\n");
    
    // Replace will replace the first Occuring Word only
    console.log("26) Replacing the First Occuring single word With case Sensitive :", replaceText.replace('Happy','Fun'));
    console.log("\n");

    console.log("27) Replacing the First Occuring single word without Case Sensitive :", replaceText.replace(/Happy/i,'Fun'));
    console.log("\n");

    console.log("28) Replacing the all word with case Sensitve using Global input :", replaceText.replace(/Happy/g,'Fun'));
    console.log("\n");

    //Replace all will replace all words 
    console.log("29) Replacing all the words with case sensitive using Replace all method :", replaceText.replaceAll('Happy','Fun'));
    console.log("\n");

    console.log("30) Replacing all the words with case sensitive using Replace all method :", replaceText.replaceAll(/Happy/g,'Fun'));
    console.log("\n");
    /* Need to check with MaM Line No : 130 instead of g give i
    throughing RegEX Exception */
    
    console.log("String Value to Array Conversion");
    console.log("--------------------------------");
    console.log("\n");

    console.log("31) Converting String to array with Characters:",StrToArr.split(""))
    console.log("\n");

    console.log("32) Converting String to array with Words:",StrToArr.split(" "))
    console.log("\n");

    console.log("33) Converting String to array with Words with Comma :",StrToArr.split(","))
    console.log("\n");

    console.log("34) Converting String to array with Words with Pipe :",StrToArr.split("|"))
    console.log("\n");

    console.log("String Search Method");
    console.log("--------------------");
    console.log("\n");

    console.log("35) String search with index of :",replaceText.indexOf("Hap"))
    console.log("\n");

    console.log("36) Searching String without letter will return :",replaceText.indexOf("Hapii"))
    console.log("\n");

    console.log("37) String search with last index of :",replaceText.lastIndexOf("Hap"))
    console.log("\n");

    console.log("38) String search with index after particula position :",replaceText.indexOf("app", 40))
    console.log("\n");

    console.log("39) String search with last index of before particular position :",replaceText.lastIndexOf("Hap", 42));
    console.log("\n");

    console.log("40) String search with search method:",replaceText.search("a h"));
    console.log("\n");

    console.log("String Match Method");
    console.log("--------------------");
    console.log("\n")

    console.log("41) String match with Text:",replaceText.match("Hap"));
    console.log("\n");

    matchvalue = replaceText.matchAll("Hap")
    console.log("42) All Strings match with Text:",...matchvalue);
    console.log("\n");
    /* have to check with mam why its getting only in spread operator , normally given means not working */

    console.log("Include, Startwith and EndWith");
    console.log("------------------------------");
    console.log("\n")

    console.log("43) String starts with We :",StrName.startsWith("We"));
    console.log("\n");

    console.log("44) String starts with MERN :",StrName.startsWith("MERN"));
    console.log("\n");

    console.log("43) String ends with ITE :",StrName.endsWith("ITE"));
    console.log("\n");

    console.log("44) String ends with AiiTE:",StrName.startsWith("AiiTE"));
    console.log("\n");

    console.log("45) String includes with MERN :",StrName.includes("MERN"));
    console.log("\n");
}
StringPrint();