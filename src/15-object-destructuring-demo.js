// Declared an object
let rohitRef = {
  id: 1,
  username: "rohit",
  password: "@#@#",
  email: "rohit@gmail.com",
  mobile: "2323232",
  address: {},
  city: "mumbai",
  state: "MH",
  songList: [],
  movieList: [],
};

// Access the object member
let username = rohitRef.username;
let password = rohitRef.password;
let email = rohitRef.email;
let mobile = rohitRef.mobile;
console.log(username, password, email, mobile);

// destructure concept
let { username1, email1, mobile1, password1 } = rohitRef; // rohitRef is objec, that is getting destructured!!!
console.log(username1, password1, email1, mobile1);
