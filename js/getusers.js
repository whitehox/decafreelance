$(document).ready(function () {
    let searchUrl = new URLSearchParams(window.location.search);
    searchUrl.has('username');
    let param = searchUrl.get('username');

    if (param === null) {
        window.location.assign("index.html");
    }
    $.ajax({
        type: "GET",
        url: `http://localhost:3000/users?username!=${param}`,
        success: function (res) {
            $.each(res, function (index, value) {
                
                if(value.username == param) {

                }
                else {
                    
                allusers = "";

                allusers += `<div class="card">`;
                allusers += `<div class="card-body">`;
                allusers += `<h5 class="card-title">${value.username}</h5>`;
                allusers += `<p class="card-text">${value.description}</p>`;
                allusers += `<p class="card-text"><small class="text-muted">${value.category}</small></p>`;
                allusers += `<p class="card-text"><small class="text-muted">Active since ${value.date}</small></p>`;
                allusers += `<a class="cardLink" href="profile.html?username=${param}&view=${value.username}">View user</a>`;
                allusers += `</div>`;
                allusers += `</div>`;
                $("#allusers").append(allusers);
                }
            });

            
        }
    });
});