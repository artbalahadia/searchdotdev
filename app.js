// Init dev and ui
const dev = new Dev;
const ui = new Ui;

// To search
const searchUser = document.getElementById('searchUser')
.addEventListener('keyup', (event) => {
    // input value
    const userText = event.target.value;

    if(userText != ''){
        // http call
        dev.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found'){
                    // alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // clear search
        ui.clearProfile();
    }
})