var fullName;

  document.querySelector(".signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    fullName = document.getElementById("name").value;
    localStorage.setItem("name", fullName);
    console.log("Full Name:", fullName);

    window.location.href = "Main.html";
  });

