function register() {
    const username = document.getElementById("usr").value.trim();
    const password = document.getElementById("pass").value.trim();
    if(username === "") {
        alert("Must put a username");
        return;
    } else if(password === "") {
        alert("Must put a basword");
        return;
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
    currentUserId = newUser.userId;
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

function gotoForm() {
    document.getElementById("scam").style.display = "none";
    document.getElementById("scamForm").style.display = "block";
}

function makeChat() {
    document.getElementById("scamForm").style.display = "none";
    document.getElementById("chatrom").style.display = "block";
    document.getElementById("msgs").style.display = "block";
}
function musa_sendMsg() {
    const messages = [
        "Helo ppls give phone number",
        "Pls buy amazon gif card then send number on back",
        "DO NOT REDEEM CARD",
        "What help u need",
        "Pls give card number",
        "DO NOT REDEEM",
        "Helo i musa"
    ];
    const chatDiv = document.getElementById("msgs");
    const container = document.createElement('div');
    const musa = document.createElement("div");
    musa.textContent = "Musa";
    musa.textContent = 'Musa';
    musa.style.fontSize = 'small';
    musa.style.textAlign = 'left';
    musa.style.marginBottom = '2px';
    const p = document.createElement('p');
    p.textContent = messages[Math.floor(Math.random() * messages.length)];
    p.style.margin = '1';
    p.style.padding = '2';
    p.style.textAlign = 'left';
    p.style.color = "blue";
    p.style.fontFamily = "Segoe UI, Tahoma, sans-serif";
    container.appendChild(musa);
    container.appendChild(p);
    chatDiv.appendChild(container);
    chatDiv.scrollTop = chatDiv.scrollHeight;
}
setInterval(musa_sendMsg, 5000);