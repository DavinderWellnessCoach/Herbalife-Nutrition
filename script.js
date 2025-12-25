function openProduct(name,img,desc){
  document.getElementById("pd-name").innerText=name;
  document.getElementById("pd-img").src=img;
  document.getElementById("pd-desc").innerText=desc;

  document.getElementById("buyLink").href=
  "https://wa.me/917986162714?text=Hello%20I%20want%20to%20buy%20"+name;

  document.getElementById("productDetail").style.display="block";
}

function closeProduct(){
  document.getElementById("productDetail").style.display="none";
}

function showResults(){
  document.getElementById("products").style.display="none";
  document.getElementById("results").style.display="block";
}

function showProducts(){
  document.getElementById("results").style.display="none";
  document.getElementById("products").style.display="grid";
}
