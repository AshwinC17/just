function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    if (name === "" || email === "" || phone === "" || date === "" || time === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}
