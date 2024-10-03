document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorElement = document.getElementById('error');
    
    if (username && password) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'home.html';
    } else {
        errorElement.innerText = 'Username and password cannot be empty';
    }
});s
