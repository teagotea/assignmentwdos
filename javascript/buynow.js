
const name = document.getElementById("name");
const address = document.getElementById("address");
const number = document.getElementById("number");
const cname = document.getElementById("cname");
const cnumber = document.getElementById("cnumber");
const caddress = document.getElementById("caddress");
const btnaddfav= document.getElementById("addfav");
const btnorderfav = document.getElementById("orderfav");

btnaddfav.addEventListener("click",addentry);
let jsonstore;
btnorderfav.addEventListener("click",showentry);
function showentry(){
parsejson=JSON.parse(localStorage.getItem('jsonstore'));
coc.innerText="The cost: "+parsejson.total;
co.innerText=parsejson.name +" " + parsejson.number +" " + parsejson.address +" "+ parsejson.manufacture +" "+ parsejson.packt +" "+ parsejson.osize;
}

const btnorder = document.getElementById("order");
btnorder.addEventListener("click",order)
function order(){
 alert("Order Successfully Places!"); 
cname.innerText=null; 
cnumber.innerText=null;
caddress.innerText=null; 
co.innerText=null;
coc.innerText=`0`;
ooc.innerText=`0`;
oo.innerText=null;
}

const customer = document.getElementById("customer");
customer.addEventListener("click",details);
function details(){
  cname.innerText=("Name : "+ name.value); 
  cnumber.innerText=("Number : "+ number.value); 
  caddress.innerText=("Address : "+ address.value); 
}

let osize;
let tm=" ";
let c;
const size = document.getElementById("size");
size.addEventListener("click",calsize);
function calsize(){
if (document.getElementById("small").checked){
 c=1000;
 osize=`Small`
}
if (document.getElementById("medium").checked){
c=2500;
osize=`Medium`
}
if (document.getElementById("large").checked){
c=5000;
osize=`Large`
}
coc.innerText=`Current Cost: ${a+b+c}`;
co.innerText=` Manufacturer selected: ${manufacture}. Package type:${packt}.The size: ${osize}.`;
}

let packt;
let b;
const packagetype = document.getElementById("packagetype");
packagetype.addEventListener("click",package);
function package(){
if (document.getElementById("pouche").checked){
    packt=`Paper Pouches`
 b=1000;
}
if (document.getElementById("tin").checked){
    packt=`Tins`
b=5000;
}
if (document.getElementById("bag").checked){
    packt=`Bags`
 b=2500;
}
coc.innerText=`Current Cost:  ${a+b}`;
co.innerText=`Manufacturer selected: ${manufacture}. Package type: ${packt}.`
}

let d=0;
let e=0;
let f=0;
let ototal=0;
const extras = document.getElementById("extras");
extras.addEventListener("click",calextra);
function calextra(){
  if (document.getElementById("mug").checked==true){
    d=500;
  }
  else{
    d=0;
  }
  if (document.getElementById("silver").checked==true){
    e=1000;
  }
  else{
    e=0;
  }
  if (document.getElementById("wooden").checked==true){
    f=1500;
  }
  else{
    f=0;
  }
  coc.innerText=`Current Cost: ${a+b+c+d+e+f}`;
  total=a+b+c+d+e+f;
  ototal=ototal+total;
}

let manufacture=null;
let total=0;
let a=0;
const coc = document.getElementById("coc");
const co = document.getElementById("co");
const manufacturers = document.getElementById("manufacturers");
manufacturers.addEventListener("change",manu);
function manu(){
if (document.getElementById("dilmah").checked){
  manufacture=`Dilmah`
  a=1000;
}
if (document.getElementById("jhones").checked){
  manufacture=`Jhones`
  a=1500;
}
if (document.getElementById("george").checked){
  manufacture=`George Stuart`
  a=1000;
}
if (document.getElementById("malwatte").checked){
  manufacture=`Malwatte Valley Plantations`
  a=2000;
}
if (document.getElementById("prestige").checked){
  manufacture=`Prestige Ceylon Teas`
  a=1000;
}
if (document.getElementById("empire").checked){
  manufacture=`Empire Teas`
    a=2000;
}
coc.innerText=`Current  Cost is  ${a}`;
co.innerText=`Manufacturer selected: ${manufacture}. `
tm=tm + " " + manufacture; 
}

function addentry(){
  const store={
    "name":name.value,
    "number":number.value,
    "address":address.value,
    "manufacture":manufacture,
    "packt":packt,
    "osize":osize,
    "total":total,
  };
  localStorage.setItem('jsonstore',JSON.stringify(store));
}

const btnaddorder = document.getElementById("addorder");
let g=0;
const ooc= document.getElementById("ooc");
const oo = document.getElementById("oo");
btnaddorder.addEventListener("click",overallorder);
function overallorder(){
g=g+1;
oo.innerText=`Tea Manufacturers selected: ${tm}`
ooc.innerText=`Overall Cost: ${ototal}`
}

let loyalty=0;
const lp=document.getElementById("lp");
const btnCl=document.getElementById("cl");
btnCl.addEventListener("click",calloyalty);
function calloyalty(){
if (g>3){
  loyalty=g*20;
lp.innerText=`Loyalty points earned: ${loyalty}`
}
else{
 lp.innerText=`0`;
}
}






