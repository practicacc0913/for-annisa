// 1. Define the possible Valentines
const personalities = {
    "me": {
        name: "Your Favorite Human (Me!)",
        description: "The perfect match! Reliable, a great listener, and clearly has excellent taste in partners. Side effects include: endless love and occasional bad jokes.",
        image: "img/profiles/me.jpg"
    },
    "monkey": {
        name: "A Dirty Criminal Low life",
        description: "Great at saving the world, but terrible at texting back because they're 'busy fighting crime.' Do you really want to compete with a city for their attention?",
        image: "img/profiles/monkey.avif"
    },
    "bunny": {
        name: "Bashful Bunny",
        description: "Will take you on magical dates, but might accidentally turn you into a frog. Also, their beard is a major fire hazard.",
        image: "img/profiles/bashful.webp"
    },
    "hippo": {
        name: "Moo Deng",
        description: "Great fashion sense and a private island, but they'll spend the whole date talking about their 'plan for world domination.' A bit of a red flag.",
        image: "img/profiles/moodeng.jpg"
    }
};

// 2. Define the Questions (7 Total)
const questions = [
    {
        question: "What is your ideal date night?",
        image: "img/story/1.gif", 
        choices: [
            { text: "A cozy night in with movies and snacks", score: "me" },
            { text: "A cute night at Fox River Penitentiary", score: "monkey" },
            { text: "Climbing and Wingstop after", score: "bunny" },
            { text: "A fancy gala where we stay in the shadows", score: "hippo" }
        ]
    },
    {
        question: "How do you handle a minor inconvenience?",
        image: "img/story/2.gif",
        choices: [
            { text: "Laugh it off and find a solution together", score: "me" },
            { text: "Kill everyone", score: "monkey" },
            { text: "Cast a spell that makes it 10x worse", score: "bunny" },
            { text: "Vow revenge on whoever caused it", score: "hippo" }
        ]
    },
    {
        question: "Choose a Valentine's gift:",
        image: "img/story/3.gif",
        choices: [
            { text: "Something thoughtful and hand-made with love", score: "me" },
            { text: "A box of coal", score: "monkey" },
            { text: "An ancient dusty book that whispers", score: "bunny" },
            { text: "The deed to a slightly haunted island", score: "hippo" }
        ]
    },
    {
        question: "Pick a vacation destination:",
        image: "img/story/4.gif",
        choices: [
            { text: "Hawaii, beach adventures, farmers markets, and delcious food", score: "me" },
            { text: "North Korea", score: "monkey" },
            { text: "A floating castle in the clouds", score: "bunny" },
            { text: "A secret lair inside a volcano", score: "hippo" }
        ]
    },
    {
        question: "What’s your favorite way to communicate?",
        image: "img/story/5.gif",
        choices: [
            { text: "Long late-night talks", score: "me" },
            { text: "Physical abuse", score: "monkey" },
            { text: "Sending thoughts via telepathy", score: "bunny" },
            { text: "A formal declaration of war", score: "hippo" }
        ]
    },
    {
        question: "What is your best quality?",
        image: "img/story/avatar.webp",
        choices: [
            { text: "Kindness and loyalty", score: "me" },
            { text: "Roundness", score: "monkey" },
            { text: "A really cool hat", score: "bunny" },
            { text: "A collection of expensive capes", score: "hippo" }
        ]
    },
    {
        question: "How do you handle being hangry?",
        image: "img/story/7.gif",
        choices: [
            { text: "I'll wait patiently, but I might get a little pouty.", score: "me" },
            { text: "being really rude cos im round", score: "monkey" },
            { text: "I'll just nibble on a single cracker and say I'm fine.", score: "bunny" },
            { text: "I become a menace to society until fed.", score: "hippo" }
        ]
    }
];

// Quiz State
let currentQuestion = 0;
let scores = { "me": 0, "monkey": 0, "bunny": 0, "hippo": 0 };

function startTest() {
    document.getElementById("start").hidden = true;
    document.getElementById("test").hidden = false;
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestion];
    
    // Update Question Text
    document.getElementById("question").innerText = q.question;
    
    // Update Question Image
    const storyImg = document.getElementById("story-image");
    if (q.image) {
        storyImg.src = q.image;
        storyImg.hidden = false;
    } else {
        storyImg.hidden = true;
    }

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; 

    q.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.className = "choice";
        btn.onclick = () => selectChoice(choice.score);
        choicesDiv.appendChild(btn);
    });
}

function selectChoice(person) {
    scores[person]++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}
function showResults() {
    document.getElementById("test").hidden = true;
    document.getElementById("results").hidden = false;

    let finalScores = { ...scores };
    finalScores["me"] += 0.1;

    const winner = Object.keys(finalScores).reduce((a, b) => finalScores[a] > finalScores[b] ? a : b);
    const result = personalities[winner];

    // Standard results text
    let resultsHTML = `<h2>You got: ${result.name}</h2><p>${result.description}</p>`;
    
    // THE SECRET ADD-ON: Only if "me" wins
    if (winner === "me") {
        resultsHTML += `
            <div style="margin-top: 20px;">
                <button class="valentine-btn" onclick="window.location.href='special.html'">
                    Open Your Secret Gift 🎁
                </button>
            </div>
        `;
    }

    document.getElementById("results-text").innerHTML = resultsHTML;
    document.getElementById("personality").src = result.image;
}

function reset() {
    currentQuestion = 0;
    scores = { "me": 0, "monkey": 0, "bunny": 0, "hippo": 0 };
    document.getElementById("results").hidden = true;
    document.getElementById("start").hidden = false;
}
