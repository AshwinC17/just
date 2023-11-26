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
    clearForm();
  });
  
  function displayUserDetails(userDetails) {
    let userDiv = document.createElement('div');
    userDiv.innerHTML = `<p>Name: ${userDetails.name}</p><p>Email: ${userDetails.email}</p><p>Phone: ${userDetails.phone}</p>`;
  
    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editUserDetails(userDetails);
      userDiv.remove(); // Remove the displayed details after editing
    });
  
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      removeUserDetails(userDetails);
      userDiv.remove();
    });
  
    userDiv.appendChild(editButton);
    userDiv.appendChild(deleteButton);
  
    document.body.appendChild(userDiv);
  }
  
  function editUserDetails(userDetailsToEdit) {
    // Remove the existing user details from local storage
    removeUserDetails(userDetailsToEdit);
  
    // Populate the form fields with the existing details for modification
    document.getElementById('name').value = userDetailsToEdit.name;
    document.getElementById('email').value = userDetailsToEdit.email;
    document.getElementById('phone').value = userDetailsToEdit.phone;
  }
  
  function removeUserDetails(userDetailsToRemove) {
    let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    let updatedUsers = existingUsers.filter(user => {
      return user.email !== userDetailsToRemove.email;
    });
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  }
  
  function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }
  