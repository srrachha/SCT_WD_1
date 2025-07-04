let listItem = document.getElementsByTagName("li");
console.log(listItem);

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", function () {
    let text = listItem[i].textContent.trim();
    if (text === "Home") {
      alert("This will take to Home");
    }
    if (text === "About") {
      alert("This will take to About");
    }

    if (text === "Contact") {
      alert("This will take to Contact");
    }
    if (text === "Sign Up") {
      alert("This will take to Sign-up");
    }
    if (text === "Login") {
      alert("This will take to Login");
    }
  });
}
