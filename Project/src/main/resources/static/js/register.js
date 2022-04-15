// Call the dataTables jQuery plugin
$(document).ready(function() {
    // on ready
});

async function userRegister(){

let data = {};
data.name = document.getElementById('txtName').value;
data.lastname = document.getElementById('txtLastName').value;
data.email = document.getElementById('txtEmail').value;
data.password = document.getElementById('txtPassword').value;

let confirmPassword = document.getElementById('txtConfirmPassword').value;

if (confirmPassword != data.password){
    alert("Your password and confirmation password must match");
    return;
}
      const request = await fetch('api/userRegister', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    alert("registration completed successfully")
    window.location.href = 'login.html'
}