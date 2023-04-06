function login() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const continueParam = urlParams.get('continue');

    for(const input of $("#login-form")) {
        if(input && !input.checkValidity()) {
            input.reportValidity();
            return;
        }
    }

    if(!continueParam) {
        continueParam = "dashboard";
    }

    handleContinue(continueParam);
}

function handleContinue(continueParam) {
    switch(continueParam) {
        default:
            dashboard();
            break;
    }
}

function dashboard() {
    const username = $("#username").val();

    $("#login").hide();
    document.title = "No Man's Land Revenue Agency | Dashboard";

    $("#dashboard").html(`<header><h2>Dashboard</h2></header><h4>Welcome, ${username}!</45>`);
    $("#dashboard").show();
}