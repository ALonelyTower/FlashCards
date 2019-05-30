var flashcard_topic;
var topic_item_name;
var question;
var correct_tally = 0;
var incorrect_tally = 0;

first_topic = {
    "A Topic": "A Solution"
}

second_topic = {
    "A Topic": "A Solution"
}

default_topic = {
    "A Topic": "A Solution"
}

function setTopic(topic) {
    var flashcardtext = document.getElementById("flashcard-text");
    if (topic == 'first_topic') {
        flashcard_topic = first_topic;
    } else if (topic == 'second_topic') {
        flashcard_topic = second_topic;
    } else {
        flashcard_topic = default_topic;
    }

    flashcardtext.innerHTML = "Click Here to Begin"
    question = false;
}

function getRandomKey() {
    let keys = Array.from(Object.keys(flashcard_topic));
    return keys[Math.floor(Math.random() * keys.length)];
}

function clickFlashCard() {
    var flashcardtext = document.getElementById("flashcard-text");

    if (question) {
        question = false;
        flashcardtext.innerHTML = `${flashcard_topic[topic_item_name].toFixed(2)}`;
    } else {
        question = true;
        topic_item_name = getRandomKey();
        flashcardtext.innerHTML = topic_item_name;
    }
}

function tallyScore(correct) {
    if (correct) {
        var score_text = document.getElementById("correct-score");
        correct_tally = correct_tally + 1;
        score_text.innerHTML = `Correct: ${correct_tally}`;
    } else {
        var score_text = document.getElementById("incorrect-score");
        incorrect_tally = incorrect_tally + 1;
        score_text.innerHTML = `Incorrect: ${incorrect_tally}`;
    }
}

function clearScore() {
    var correct_score_text = document.getElementById("correct-score");
    var incorrect_score_text = document.getElementById("incorrect-score");
    correct_score_text.innerHTML = "Correct: 0";
    incorrect_score_text.innerHTML = "Incorrect: 0";
    correct_tally = 0;
    incorrect_tally = 0;
}
