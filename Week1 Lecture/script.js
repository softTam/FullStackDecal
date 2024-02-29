function playGame() {
    var name = prompt("Hi guest, what is your name:");
    alert("Hi " + name + " , welcome to this website");

    var answer = Math.floor(Math.random() * 101);
    var number = prompt("Please guess a number between 0 and 100: ");
    // number = (int) number;

    while (number != answer) {
        // if (number < 0) break;
        if (number < answer) {
            alert("Your guess is smaller than our answer");
            number = prompt("Please guess again: ");
        } else if (number > answer) {
            alert("Your guess is greater than our answer");
            number = prompt("Please guess again: ");
        }
    }

    alert(`Congratulation ${name}, you got it correctly`);
}