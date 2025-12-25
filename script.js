function openProduct(name,img,desc){
  document.getElementById("pname").innerText=name;
  document.getElementById("pimg").src=img;
  document.getElementById("pdesc").innerText=desc;
  document.getElementById("buyBtn").href=
  "https://wa.me/917986162714?text=I%20want%20to%20buy%20"+name;
  document.getElementById("productModal").style.display="block";
}

function closeProduct(){
  document.getElementById("productModal").style.display="none";
}

function showResults(){
  document.getElementById("products").style.display="none";
  document.getElementById("results").style.display="block";
}

function showProducts(){
  document.getElementById("results").style.display="none";
  document.getElementById("products").style.display="block";
}
