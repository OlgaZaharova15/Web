// JavaScript source code
function calculateScore() {
        let score = 0;
        const answers = {
            q1: 'a',
            q2: 'c',
            q3: 'b',
            q4: 'a',
            q5: 'a'
        };

    for (let question in answers) {

        const userAnswer = document.querySelector(`input[name = "${question}"]:checked`);
        console.log(userAnswer);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }

    }

    document.getElementById("result").innerText = `Вы набрали ${score} из 5 правильных ответов.`;
}