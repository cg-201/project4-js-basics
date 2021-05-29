let title = "Project Title";
let count = 100;
let price = 99.99;
let avaivability = true;
let employee = { id: 1, name: "rohit" };
let list = [1, 2, 2];
let sum = () => {};

function mathExecutor(callback) {
  if (typeof callback == "function") {
    const total = myfn(10, 20);
    console.log(total);
  }
}

// mathExecutor(100);
// mathExecutor("sachin");
mathExecutor((n1, n2) => n1 + n2);
mathExecutor(function (n1, n2) {
  return n1 + n2;
});
