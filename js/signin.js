window.onload = () => {
    const signin_btn = document.querySelector("#signin_btn");

    function signup(url) {
        const email = document.querySelector('#inputEmail').value;
        const password = document.querySelector('#inputPassword').value;

        const data = {email, password};
        console.log(data)

    }

    signin_btn.addEventListener('click', (e) => {
        e.preventDefault();
        signup('')
    })
}