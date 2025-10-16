const questions = {
    0: {question: "What is the Logos Hope?", answer: "The world's largest floating book fair.", wrong_answers: ["A cruise ship", "A cargo ship", "A fishing boat"]},
    1: {question: "Where is the Logos Hope currently located?", answer: "Germany", wrong_answers: ["USA", "Brazil", "India"]},
    2: {question: "How many books does the Logos Hope carry?", answer: "Over 5,000 titles", wrong_answers: ["500 titles", "1,000 titles", "10,000 titles"]},
    3: {question: "What is the main purpose of the Logos Hope?", answer: "To share knowledge and culture through books", wrong_answers: ["To provide luxury cruises", "To conduct scientific research", "To transport goods"]},
    4: {question: "Who operates the Logos Hope?", answer: "GBA Ships", wrong_answers: ["NASA", "UNESCO", "Red Cross"]},
    5: {question: "When was the Logos Hope launched?", answer: "2009", wrong_answers: ["1995", "2015", "2020"]},
    6: {question: "What type of books can you find on the Logos Hope?", answer: "Fiction, non-fiction, children's books, and more", wrong_answers: ["Only fiction", "Only non-fiction", "Only textbooks"]},
    7: {question: "How can you visit the Logos Hope?", answer: "By purchasing a ticket to board the ship", wrong_answers: ["By invitation only", "By winning a contest", "By being a crew member"]},
    8: {question: "What is the crew of the Logos Hope like?", answer: "Volunteers from around the world", wrong_answers: ["Professional sailors", "Military personnel", "Tour guides"]},
    9: {question: "What additional activities does the Logos Hope offer?", answer: "Cultural events, educational programs, and community outreach", wrong_answers: ["Only book sales", "Only sightseeing tours", "Only dining experiences"]},
    10: {question: "How long does the Logos Hope stay in each port?", answer: "Several weeks to months", wrong_answers: ["A few hours", "One day", "One year"]},
    11: {question: "What is the mission of the Logos Hope?", answer: "To bring hope and knowledge to people around the world", wrong_answers: ["To make a profit", "To promote tourism", "To conduct research"]},
    12: {question: "How can you support the Logos Hope?", answer: "By volunteering, donating, or purchasing books", wrong_answers: ["By ignoring it", "By protesting against it", "By competing with it"]},
    13: {question: "What is the size of the Logos Hope?", answer: "Over 500 feet long", wrong_answers: ["100 feet long", "200 feet long", "300 feet long"]},
    14: {question: "What is the crew's main focus on the Logos Hope?", answer: "Serving the community and sharing knowledge", wrong_answers: ["Making money", "Exploring new territories", "Conducting experiments"]},
    15: {question: "What languages are the books on the Logos Hope available in?", answer: "Multiple languages including English, Spanish, and German", wrong_answers: ["Only English", "Only Spanish", "Only German"]},
    16: {question: "What is the atmosphere like on the Logos Hope?", answer: "Friendly and welcoming", wrong_answers: ["Formal and strict", "Competitive and intense", "Quiet and reserved"]},
    17: {question: "How does the Logos Hope contribute to local communities?", answer: "Through educational programs and community outreach", wrong_answers: ["By taking resources away", "By ignoring local needs", "By competing with local businesses"]},
    18: {question: "What is the significance of the Logos Hope's book fair?", answer: "It provides access to knowledge and culture for people who may not have it otherwise", wrong_answers: ["It's just for entertainment", "It's a way to make money", "It's a way to promote certain ideologies"]},
    19: {question: "How can you stay updated on the Logos Hope's journey?", answer: "By following their website and social media", wrong_answers: ["By guessing", "By asking random people", "By ignoring it"]},
};

currectQuestionIndex = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showSelectAnswerModal() {
    document.getElementById("modalSelectAnswer").classList.add("visible");
}

function showCorrectModal() {
    document.getElementById("modalCorrectAnswer").classList.add("visible");
}

function showWrongModal(correctText) {
    document.getElementById("correctAnswerText").textContent = correctText;
    document.getElementById("modalWrongAnswer").classList.add("visible");
}

function nextQuestion() {
    document.getElementById("modalCorrectAnswer").classList.remove("visible");
    document.getElementById("modalWrongAnswer").classList.remove("visible");
    currectQuestionIndex = Math.round(Math.random()*(Object.keys(questions).length-1));
    loadQuestion(currectQuestionIndex);
}

function loadQuestion(index) {
    const questionData = questions[index];

    const question = document.getElementById('question');
    
    const options = [
        document.getElementById('option1'),
        document.getElementById('option2'),
        document.getElementById('option3'),
        document.getElementById('option4')
    ];

    const answers = [questionData.answer, ...questionData.wrong_answers];
    shuffleArray(answers);

    question.innerHTML = questionData.question;

    for(let i = 0; i < options.length; i++)  {
        options[i].value = answers[i];
        options[i].nextSibling.textContent = answers[i];
    }

}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[id="option1"]:checked, input[id="option2"]:checked, input[id="option3"]:checked, input[id="option4"]:checked');
    if (!selectedAnswer) {
        showSelectAnswerModal()
        return;
    }
    console.log("Selected answer: " + selectedAnswer.value);
    console.log("Checking answer...");

    if(selectedAnswer.value === questions[currectQuestionIndex].answer) {
        showCorrectModal();
    } else {
        showWrongModal(questions[currectQuestionIndex].answer);
    }
}

window.onload = function() {
  nextQuestion();
}