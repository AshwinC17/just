document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
  
    let userDetails = {
      name: name,
      email: email
    };
  
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  
    alert('User details saved to local storage!');
  });
  