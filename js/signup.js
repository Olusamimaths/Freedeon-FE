
async function signUp() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('inputPassword4').value;
    const email = document.getElementById('email').value;

    const response = await fetch('http://freedeon.herokuapp.com/api/users/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            username: username,
            password: password,
        })
    })
    if (response.status == 201) {
        window.location.href = '/signin.html';
    }
    else {
        alert('An error ocurred');
    }
}


document.getElementById('signUpButton').addEventListener('click', (e => {
    e.preventDefault();
    signUp();
}));
