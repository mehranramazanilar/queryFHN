# queryFHN
query inside a JSON object  
This simple javascript function will help you query inside a JSON object.  
# Installation  
1. Clone or download the queryFHN.js file.  
2. Include the js file in your project.  
# Usage  
You should convert your JSON object to String First. You can use ```JSON.stringify()``` method.  
Example:  
```
var myJson = [
{firstName: "Mehran", lastName: "Ramazanilar"},
{firstName: "Ali", lastName: "Kianmehr"},
{firstName: "Babak", lastName: "Ramazanilar"}
];  
var jsonString = JSON.stringify(myJson);

//display the items with lastname = ramazanilar
var result = jsonString.queryFHN("lastName", "Ramazanilar");

//result will be : 
//[{firstName: "Mehran", lastName: "Ramazanilar"}, {firstName: "Babak", lastName: "Ramazanilar"}]
```
