// menangkap semua element a
document.querySelectorAll("#opts a").forEach((a) =>
    // jika  di klik akan menjalankan fungsi computerChoice
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
);
function computerChoice(element) {
    // tangkap pilihan user 
    let pilihanuser = element.target.innerText;

    // menangkap element result dengan queryselector untuk menampung
    // nilai hasil dari game 
    let pilihanComputer = document.querySelector("#result"); 

    let choices = ["Rock", "Paper", "Scissors"];

    // pilihan random untuk komputer 
    pilihanComputer.innerHTML = 
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer dan pilihan user sama (draw)
    if (pilihanuser == pilihanComputer) {
        alert("DRAW");
    }

    // jika pilihan user yang menang 
    if (pilihanuser == "Rock" && pilihanComputer == "Scissors") {
        alert("YOU WIN");
    }else if(pilihanuser == "Paper" && pilihanComputer == "Rock"){
        alert("YOU WIN");
    }else if(pilihanuser == "Scissors" && pilihanComputer == "Paper"){
        alert("YOU WIN");
    }

    // jika plihan komputer yang menang
    if (pilihanuser == "Rock" && pilihanComputer == "Paper") {
        alert("COMPUTER WIN");
    }else if(pilihanuser == "Paper" && pilihanComputer == "Scissors"){
        alert("COMPUTER WIN");
    }else if(pilihanuser == "Scissors" && pilihanComputer == "Rock"){
        alert("COMPUTER WIN");
    }
}