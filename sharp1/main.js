document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
  
    let userDetails = {
      name: name,
      email: email,
      phone: phone
    };
  
    let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push(userDetails);
    localStorage.setItem('users', JSON.stringify(existingUsers));
  
    alert('User details saved to local storage!');
  });
  