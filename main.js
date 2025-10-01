let addBtn = document.getElementById("addbtn");
let input = document.getElementById("inputlist");
let ul = document.getElementById("ullist");
addBtn.addEventListener("click", function () {
  let task = input.value.trim();
  if (task === "") {
    alert("Please enter a task!");
    return;
  }
  let li = document.createElement("li");
  li.textContent = task;

  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(delBtn);

  ul.appendChild(li);

  input.value = "";
});
p;
