document.addEventListener('DOMContentLoaded', function() {
  // Make a GET request to crudcrud.com using Axios to retrieve saved user details
  axios.get('https://crudcrud.com/api/f2ef75475adb446c87a2b76ea66f11e4/new')
      .then(function(response) {
          // Handle the success response here
          console.log('User details retrieved from cloud:', response.data);

          // Display the retrieved user details on the website
          response.data.forEach(function(userDetails) {
              displayUserDetails(userDetails);
          });
      })
      .catch(function(error) {
          // Handle errors here
          console.error('Error retrieving user details:', error);
      });
});

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

  // Make a POST request to crudcrud.com using Axios to save user details
  axios.post('https://crudcrud.com/api/f2ef75475adb446c87a2b76ea66f11e4/new', userDetails)
      .then(function(response) {
          // Handle the success response here if needed
          console.log('User details saved to cloud:', response.data);

          // Call the displayUserDetails function with the response data
          displayUserDetails(response.data);

          //clear the form after successful submission
          clearForm();
      })
      .catch(function(error) {
          // Handle errors here
          console.error('Error saving user details:', error);
      });
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
  axios.put('https://crudcrud.com/api/f2ef75475adb446c87a2b76ea66f11e4/new/' + userDetailsToEdit._id, updatedUserDetails)
}

function removeUserDetails(userDetailsToRemove) {
  axios.delete('https://crudcrud.com/api/f2ef75475adb446c87a2b76ea66f11e4/new/' + userDetailsToRemove._id)
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}
