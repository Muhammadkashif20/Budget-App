// Programming In Budget App:-
let leftbtn = document.getElementById("leftbtn");
let leftinp = document.getElementById("leftinp");
let para = document.getElementById("para");
leftbtn.addEventListener("click", () => {
  para.innerHTML = leftinp.value;
  if (leftinp.value == "") {
    alert("please Set Your Budget 🙁");
  }
  leftinp.value = "";
});
let rightbtn = document.getElementById("rightbtn");
let para1 = document.getElementById("para1");
let rigthinp1 = document.getElementById("rigthinp1");
let rigthinp2 = document.getElementById("rigthinp2");
let para2 = document.getElementById("para2");
let product = document.getElementById("product");
let expense = document.getElementById("expense");
let delBtn = document.getElementById("del-Btn");
let list = document.getElementById("list");
let count = 0;
rightbtn.addEventListener("click", () => {
  para1.innerHTML = rigthinp2.value;
  para2.innerHTML = para.innerHTML - para1.innerHTML;
  if (rigthinp1.value == "") {
    alert("please Enter Your Product 😐");
return
  }
  if (rigthinp2.value == "") {
    alert("please Enter Your Cost Of Product 🙄");
    return
  }
  product.innerHTML = rigthinp1.value;
  rigthinp1.value = "";
  expense.innerHTML = rigthinp2.value;
  rigthinp2.value = "";
  if (list.style.display == "none") {
    list.style.display = "block";
    list.style.display = "flex";
    list.style.justifyContent = "space-around";
  }
  let items= `<div class="list" id="list" style="display: none;">
              <h4 id="product"></h4>
              <h4 id="expense"></h4>
              <button id="del-Btn"><i class="fa-solid fa-trash-can fa-xl" style="color: #5a7ef1;"></i></button>
            </div>`;
list.innerHTML+=items
});
delBtn.addEventListener("click", () => {
  document.getElementById("list").remove();
});
