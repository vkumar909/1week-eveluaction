function append(){
    let data=JSON.parse(localStorage.getItem("product")) || [];
    let all_product=document.getElementById("all_products"); 
    all_products.innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=el.image;
        let p=document.createElement("p")
        p.innerText=el.type;
        let d=document.createElement("p")
        d.innerText=el.desc;
        let pr=document.createElement("p")
        pr.innerText=el.price;
        let btn=document.createElement("button")
        btn.innerText="Remove product"
        btn.addEventListener("click",function(){
            remove(index);
        })
        div.append(img,p,d,pr,btn)
        all_product.append(div);
    });
}
append()
function remove(index){
    let data=JSON.parse(localStorage.getItem("product"))||[];
    let newData=data.filter(function(el,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash"))||[];
            trash.push(el)
            localStorage.setItem("trash",JSON.stringify(trash))

        }
        else{
            return 1 !==index
        }
    })
    localStorage.setItem("product",JSON.stringify(newData))
    append()
}




    
    

