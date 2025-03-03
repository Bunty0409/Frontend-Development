maindiv = document.getElementById("maindiv");
input_name = document.getElementById("input_name");
click_btn = document.getElementById("click_btn");

let products = [
  {
    Name: "Bike",
    Img: "images/bike.jpeg",
  },
  {
    Name: "Apple",
    Img: "images/apple.jpg",
  },
  {
    Name: "AC",
    Img: "images/ac.jpeg",
  },
  {
    Name: "Books",
    Img: "images/Books.jpg",
  },
  {
    Name: "Bottol",
    Img: "images/bottol.jpeg",
  },
  {
    Name: "Car",
    Img: "images/car.jpg",
  },
  {
    Name: "Chair",
    Img: "images/chair.jpeg",
  },
  {
    Name: "Cycle",
    Img: "images/cycle.avif",
  },
  {
    Name: "Mobile",
    Img: "images/mobile.avif",
  },
  {
    Name: "TV",
    Img: "images/tv.avif",
  },
];

// Load images and product name in random orders
window.addEventListener("load", function () {
  showImages(" "); // Call showImages without any filter on page load
});

// show random order with out any input
function showImages(filterText) {
  maindiv.innerHTML = ""; // Clear the previous products
  randomIndex = []; // Put all random numbers from randomIndex

  // collect all random numbres in one variable
  for (let index = 0; randomIndex.length < 10; index++) {
    abc = Math.floor(Math.random() * products.length); // get diffrent number with this mathod
    randomIndex.push(abc); // push one by one random numbers to randomIndex
    randomIndex = [...new Set(randomIndex)]; // remove duplicate numbers from randomIndex generate unique numbers only
  }

  // for Loop to create each elements in random order
  let matched = false; // Flag to check if there is a match
  for (let index = 0; index < randomIndex.length; index++) {
    randomIndexNo = randomIndex[index]; // Get numbers from randomIndex variable one by one
    const productName = products[randomIndexNo].Name.toLowerCase(); // get product name and convert into lowercase

    if (
      productName.match(filterText) && // condition for match product name and input name
      productName.length == filterText.length // condition for check length of product name and input name
    ) {
      matched = true; // There is a match, so set the flag to true
      continue; // Skip products that match the filter text
    }

    imgs = document.createElement("img"); // create new element of img
    imgs.src = products[randomIndexNo].Img; // insert src into img tag
    imgs.style.width = "200px"; // img width
    imgs.style.height = "195px"; // img height

    iteam_name = document.createElement("h3"); //create new element of h3
    iteam_name.innerText = products[randomIndexNo].Name; //insert name of product

    main_div = document.createElement("div"); // create new div for hold img and product tag
    main_div.classList.add("main"); // add class main into main_div

    main_div.appendChild(imgs); // append imags into main_div
    main_div.appendChild(iteam_name); // append productname into main_div
    maindiv.appendChild(main_div); // append main_div into main div
  }

  // condition if input product name not match with available products
  if (!matched && filterText.trim() !== "") {
    alert("Please enter a valid product");
  }
}

//  click  event for show elements According to input
click_btn.addEventListener("click", function () {
  const filterText = input_name.value.split(" ").join("").toLowerCase();

  if (filterText === "") {
    showImages(" "); // show all images if input is empty
  } else {
    input_name.value = filterText; // show text after removing all empty space from inputs
    showImages(filterText); // to show required image
  }
});
