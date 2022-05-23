//store the products array in localstorage as "products"
function product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function addData(event){
event.preventDefault();
let form= document.getElementById("product");
let type= form.type.value;
let desc= form.desc.value;
let price=form.price.value;
let image=form.image.value;
// console.log(type,desc,price,image);
let s1=new product(type,desc,price,image)
let data=JSON.parse(localStorage.getItem("product")) || []
data.push(s1)
localStorage.setItem("product",JSON.stringify(data))
console.log(s1)
}
