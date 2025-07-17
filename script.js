function register() {
    const username = document.getElementById("usr").value.trim();
    const password = document.getElementById("pass").value.trim();
    if(username === "") {
        alert("Must put a username");
    } else if(password === "") {
        alert("Must put a basword");
    }
    let userCount = parseInt(localStorage.getItem("usrcount")) || 0;
    let currentUserId = parseInt(localStorage.getItem("currentuid")) || 0;
    const users = JSON.parse(localStorage.getItem("usrs")) || [];
    const newUser = {
        username: username,
        password: password,
        userId: userCount + 1
    };
    userCount++;
    users.push(newUser);
    localStorage.setItem("usrs", JSON.stringify(users));
    localStorage.setItem("usrcount", userCount);
    localStorage.setItem("currentuid", String(currentUserId));
    document.getElementById("loginreg").style.display = "none";
    document.getElementById("scam").style.display = "block";
    document.getElementById("congo").style.display = "block";
}

function killEveryone() {
    localStorage.clear();
}