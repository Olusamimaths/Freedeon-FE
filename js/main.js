
function getFreedeonAuthData() {
    const userDataString = JSON.localStorage.getItem('freedeonAuth');
    if (userDataString) {
        return JSON.parse(userDataString);
    }
    return null;
}


function getAccessToken() {
    const freedeon = getFreedeonAuthData()
    return freedeon.access || null;
}
