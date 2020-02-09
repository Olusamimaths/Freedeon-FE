
async function login() {
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;

    const response = await fetch('http://freedeon.herokuapp.com/api/token/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
        })
    })
    if (response.status == 200) {
        const userData = await response.json();
        localStorage.setItem('freedeonAuth', JSON.stringify(userData));
        window.location.href = '/index.html'
    }
}

document.getElementById('loginButton').addEventListener('click', (e => {
    e.preventDefault();
    login();
}));
