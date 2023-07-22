// A sample list of users
var users = [
    { name: 'Alice', progress: 50 },
    { name: 'Bob', progress: 30 },
    { name: 'Charlie', progress: 70 },
];

var userList = document.getElementById('userList');

users.forEach(function(user) {
    var userDiv = document.createElement('div');
    userDiv.className = 'user';

    var userName = document.createElement('div');
    userName.textContent = user.name;
    userDiv.appendChild(userName);

    var progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';

    var progressBarInner = document.createElement('div');
    progressBarInner.className = 'progress-bar-inner';
    progressBarInner.style.width = user.progress + '%';
    progressBar.appendChild(progressBarInner);

    userDiv.appendChild(progressBar);

    userList.appendChild(userDiv);
});
