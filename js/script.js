function searchFunction() {
        let input = document.getElementById('search-input').value.toLowerCase();
        let items = document.querySelectorAll('#search-results li');
        
        items.forEach(item => {
            if (item.textContent.toLowerCase().includes(input)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

function checkAnswers() {
    const answers = {
        q1: 'b',
        q2: 'b',
        q3: 'a',
        q4: 'b',
        q5: 'b',
        q6: 'a',
        q7: 'b',
        q8: 'a',
        q9: 'b',
        q10: 'b'
    };

    let score = 0;
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');

    for (let i = 1; i <= 10; i++) {
        const question = 'q' + i;
        const userAnswer = form[question].value; // Access user's selected answer
        if (userAnswer === answers[question]) {
            score++;
        }
    }

    resultDiv.innerHTML = You scored ${score} out of 10!;
}
