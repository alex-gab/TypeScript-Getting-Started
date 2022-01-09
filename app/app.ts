function startGame() {
    // starting a new game
    const playerName: string = "Audrey";
    logPlayer(playerName);

    var messagesElement: HTMLElement | null | string;
    messagesElement = document.getElementById("messages");
    messagesElement!.innerText = "Welcome to MultiMath! Starting a new game...";
}

function logPlayer(name) {
    console.log(`New game starting for player ${name}`);
}

document.getElementById("startGame")!.addEventListener("click", startGame);