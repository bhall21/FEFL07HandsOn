function checkName() {
    let firstName = document.getElementById('first').value;
    let lastName = document.getElementById('last').value;
    let nameRegex = /^[^a-z ]+\D/g;
    if (firstName.match(nameRegex)&&lastName.match(nameRegex)) {
      alert("Yay! Your inputs were all correct!");

    }
    else {
      alert("Oh no! Thats an invalid format!");
      
    }                                            
  }