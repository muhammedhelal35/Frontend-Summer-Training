
window.onload = function() {
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    let username = localStorage.getItem('username');

    if (isLoggedIn !== 'true') {
        
        window.location.href = 'login.html';
    } else {
        
        document.getElementById('welcomeMessage').innerText = `Welcome, ${username}!`;
    }
};


document.getElementById('logoutButton').addEventListener('click', function() {
    
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
});
