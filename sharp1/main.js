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
  
    displayUserDetails(userDetails);
  
    alert('User details saved to local storage!');
  });
  
  function displayUserDetails(userDetails) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `<p>Name: ${userDetails.name}</p><p>Email: ${userDetails.email}</p><p>Phone: ${userDetails.phone}</p>`;
  
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      removeUserDetails(userDetails);
      userDiv.remove();
    });
  
    userDiv.appendChild(deleteButton);
  
    document.body.appendChild(userDiv);
  }
  
  function removeUserDetails(userDetailsToRemove) {
    let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    let updatedUsers = existingUsers.filter(user => {
      return user.email !== userDetailsToRemove.email;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }
  
  