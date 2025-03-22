document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
   
    if (nama.length <= 3) {
        showError("nama", "Nama harus lebih dari 3 karakter");
        isValid = false;
    } else {
        clearError("nama");
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        showError("email", "Email tidak valid");
        isValid = false;
    } else {
        clearError("email");
    }

    if (password.length < 8) {
        showError("password", "Password minimal 8 karakter");
        isValid = false;
    } else {
        clearError("password");
    }

    if (isValid) {
        alert("Registrasi berhasil!");
    }
});

function showError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = inputElement.nextElementSibling;
    errorElement.innerText = message;
}

function clearError(inputId) {
    const inputElement = document.getElementById(inputId);
    const errorElement = inputElement.nextElementSibling;
    errorElement.innerText = "";
}
