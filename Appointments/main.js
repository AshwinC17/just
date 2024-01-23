// Load existing user details when the page loads
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

  // POST request to crudcrud.com using Axios
  axios.post('https://crudcrud.com/api/27fc12661ecb4341ac504cf8e6e2609b/new', userDetails)
      .then(function(response) {
          // Handle the success response here if needed
          console.log('User details saved to cloud:', response.data);

          // Call the displayUserDetails function with the response data
          displayUserDetails(response.data);

          // clear the form after successful submission
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
  let updatedName = prompt('Enter updated name:', userDetailsToEdit.name);
  let updatedEmail = prompt('Enter updated email:', userDetailsToEdit.email);
  let updatedPhone = prompt('Enter updated phone:', userDetailsToEdit.phone);

  let updatedUserDetails = {
      _id: userDetailsToEdit._id,
      name: updatedName,
      email: updatedEmail,
      phone: updatedPhone
  };

  // Update the user details in the cloud using the PUT method
  axios.put(`https://crudcrud.com/api/27fc12661ecb4341ac504cf8e6e2609b/new/${userDetailsToEdit._id}`, updatedUserDetails)
      .then(function(response) {
          // Handle the success response here if needed
          console.log('User details updated in cloud:', response.data);

          // Update the displayed details on the website
          userDetailsToEdit.name = response.data.name;
          userDetailsToEdit.email = response.data.email;
          userDetailsToEdit.phone = response.data.phone;

          // Remove the existing details and display the updated ones
          removeUserDetails(userDetailsToEdit);
          displayUserDetails(userDetailsToEdit);
      })
      .catch(function(error) {
          // Handle errors here
          console.error('Error updating user details:', error);
          alert('Error updating user details. Please check the console for more information.');
      });
}




function removeUserDetails(userDetailsToRemove) {
  axios.delete(`https://crudcrud.com/api/f2ef75475adb446c87a2b76ea66f11e4/new/${userDetailsToRemove._id}`)
      .then(function(response) {
          // Handle the success response here if needed
          console.log('User details deleted from cloud:', response.data);
      })
      .catch(function(error) {
          // Handle errors here
          console.error('Error deleting user details:', error);
      });
}

function clearForm() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
}
