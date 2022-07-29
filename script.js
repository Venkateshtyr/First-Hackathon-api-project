const div = document.createElement("div");
div.setAttribute("class","a");
div.innerHTML=`<input type="text" name="" id="txt">
<button type="button" onclick="Brewery()">search</button>
<div id="name"></div><div id="type"></div>
<div id="address"></div>
<div id="URL"></div>`;
div.style.textAlign="center";
document.body.append(div);

async function Brewery(){
   try{ 
    let b = document.querySelector("#txt").value;
    let bb = await fetch(`https://api.openbrewerydb.org/breweries/search?query={${b}}`);
    let bbb = await bb.json();

    let index = bbb.length-1;

    let name = bbb[index].name;
    document.querySelector("#name").innerText=`Name: ${name}`;

    let type = bbb[index].brewery_type;
    document.querySelector("#type").innerText=`Type: ${type}`;

    let address = bbb[index].address;
    document.querySelector("#address").innerText=`Address : ${address}`;

    let URL = bbb[index].website_url;
    document.querySelector("#URL").innerText=`Website URL: ${URL}`;
   }
   catch(error){
       console.log("Incorrect City"); 
   }
}
