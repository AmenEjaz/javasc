        let totalGuesses = 10;
        let max = 100;
        let min = 1;
        let result = document.querySelector('#result');
        let guess = document.querySelector('#g');
        let remGuess = document.querySelector('#guess');
        let previous = document.querySelector('#pre');
        let form = document.querySelector('#gameForm');
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(number);
        let attempts = 0;
        let previousGuesses = [];

        remGuess.value = totalGuesses;

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let userGuess = Number(guess.value);
            attempts++;
            previousGuesses.push(userGuess);
            previous.value = previousGuesses.join(', ');
            remGuess.value = totalGuesses - attempts;
            if (userGuess === number) {
                result.innerHTML = `Your guess is Accurate! ${guess}`;
                form.querySelector('button').disabled = true;

            } else if (attempts === totalGuesses) {
                result.innerHTML = `Game Over! Correct number is ${number}`;
                form.querySelector('button').disabled = true;
            } else if (userGuess > number) {
                result.innerHTML = `Your guess is too high!`;
            } else {
                result.innerHTML = `Your guess is too low!`;
            }
            guess.value = "";

        });