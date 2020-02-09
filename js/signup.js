window.onload = () => {
    const signup_btn = document.querySelector("#signup_btn");

    function signup(url) {
        const email = document.querySelector('#inputEmail').value;
        const password = document.querySelector('#inputPassword').value;
        const address = document.querySelector('#inputAddress').value;
        const city = document.querySelector('#inputCity').value;

        const data = {email, password, address, city};
        console.log(data)

    }

    signup_btn.addEventListener('click', (e) => {
        e.preventDefault();
        signup('')
    })
}