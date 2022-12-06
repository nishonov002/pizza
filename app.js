let input = document.querySelector("#tomato"),
  input1 = document.querySelector("#meat"),
  input2 = document.querySelector("#cucumber"),
  input3 = document.querySelector("#mushroom"),
  input4 = document.querySelector("#seer"),
  breadThin = document.querySelector("#bread-thin"),
  breadThick = document.querySelector("#bread-thick");

let tomato = document.querySelector(".tomato"),
  meat = document.querySelector(".meat"),
  cucumber = document.querySelector(".cucumber"),
  mushroom = document.querySelector(".mushroom"),
  seer = document.querySelector(".seer"),
  bread = document.querySelector(".bread"),
  price = document.querySelector(".price"),
  total = 0;
price.textContent = `${total}`;
input.addEventListener("click", function (e) {
  console.log(e.target.checked);

  if (e.target.checked) {
    tomato.style.display = "block";
    total += 2;
    price.textContent = `${total}`;
  } else {
    tomato.style.display = "none";
    total -= 2;
    price.textContent = `${total}`;
  }
  return total;
});

breadThin.addEventListener("click", function (e) {
  price.textContent = `${total}`;
  if (e.target.checked) {
    bread.style.backgroundColor = " rgb(214, 36, 63)";
    total += 1;
    price.textContent = `${total}`;
  } else {
    bread.style.backgroundColor = " rgb(214, 36, 13)";

    total -= 1;
    price.textContent = `${total}`;
  }
  return total;
});

breadThick.addEventListener("click", function (e) {
  if (e.target.checked) {
    bread.style.backgroundColor = " rgb(214, 36, 13)";
    total += 2;
    price.textContent = `${total}`;
  } else {
    bread.style.backgroundColor = " rgb(214, 36, 63)";

    total -= 2;
    price.textContent = `${total}`;
  }
 
  return total;
});

input1.addEventListener("click", function (e) {
  if(e.target.checked){
    meat.style.display = "block";
    total += 4;
    price.textContent = `${total}`;
  }else{
   meat.style.display = "none";
   total -= 4;
   price.textContent = `${total}`;
  }
  
  return total;
});

input2.addEventListener("click", function (e) {
 if(e.target.checked){
  cucumber.style.display = "block";
  price.textContent = `${total}`;
  total += 1;
 }else{
   cucumber.style.display = "none";
   price.textContent = `${total}`;
   total -= 1;
 }
  return total;
});

input3.addEventListener("click", function (e) {
  if(e.target.checked){
    mushroom.style.display = "block";
    price.textContent = `${total}`;
    total += 2;

  }else{
    mushroom.style.display = "none";
    price.textContent = `${total}`;
    total -= 2;
  }
  return total;
});
input4.addEventListener("click", function (e) {
  if(e.target.checked){
    seer.style.display = "block";
    bread.style.backgroundColor = "rgb(238, 173, 93)";
    price.textContent = `${total}`;
    total += 2;
  }else{
    seer.style.display = "none";
    bread.style.backgroundColor = "rgb(214, 36, 13)";
    price.textContent = `${total}`;
    total -= 2;
  }
  return total;
});
