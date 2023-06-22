const game = document.querySelector("#game");
const card = document.querySelector(".card");

const riskujCategories = [
    {
        movie: "Dědictví aneb...",
        questions: [
            {
                question: "Kdo hrál ve filmu Dědictví aneb...?",
                answer: ["Bolek Polívka", "Vladimír Polívka"],
                correct: "Bolek Polívka",
                level: "easy",
            },
            {
                question: "Která herečka ve filmu také hraje?",
                answer: ["Magda Vašáryová", "Dagmar Havlová"],
                correct: "Dagmar Havlová",
                level: "medium",
            },
            {
                question: "Kdy byl film natočen?",
                answer: ["1992", "1995"],
                correct: "1992",
                level: "hard",
            },
        ],
    },
    {
        movie: "Ženy v běhu",
        questions: [
            {
                question: "Kdo hrál ve filmu Ženy v běhu?",
                answer: ["Veronika Khek Kubařová", "Lucie Vondráčková"],
                correct: "Veronika Khek Kubařová",
                level: "easy",
            },
            {
                question: "Kdo nehrál ve filmu Ženy v běhu?",
                answer: ["Tereza Kostková", "Tereza Bebarová"],
                correct: "Tereza Bebarová",
                level: "medium",
            },
            {
                question: "Kde se převážně natáčelo?",
                answer: ["Brno", "Praha"],
                correct: "Praha",
                level: "hard",
            },
        ],
    },
    {
        movie: "Nejkrásnější hádanka",
        questions: [
            {
                question: "Kdo hrál roli Matěje?",
                answer: ["Jan Dolanský", "Miroslav Hrabě"],
                correct: "Jan Dolanský",
                level: "easy",
            },
            {
                question: "Kdo pohádku režíroval?",
                answer: ["Věra Chytilová", "Zdeněk Troška"],
                correct: "Věra Chytilová",
                level: "medium",
            },
            {
                question: "Kde se pohádka také natáčela?",
                answer: ["Litomyšl", "Sychrov"],
                correct: "Sychrov",
                level: "hard",
            },
        ],
    },
    {
        movie: "Teorie tygra",
        questions: [
            {
                question: "Kdo hrál hlavní mužskou roli?",
                answer: ["Bolek Polívka", "Jiří Bartoška"],
                correct: "Jiří Bartoška",
                level: "easy",
            },
            {
                question: "Jaké má hlavní hrdina povolání?",
                answer: ["veterinář", "právník"],
                correct: "veterinář",
                level: "medium",
            },
            {
                question: "Pod jakou přehradou našel Jan útočiště?",
                answer: ["Orlická přehrada", "Slapská přehrada"],
                correct: "Slapská přehrada",
                level: "hard",
            },
        ],
    },
    {
        movie: "Po čem muži touží",
        questions: [
            {
                question: "Kdo ve filmu hraje?",
                answer: ["Jiří Langmajer", "Karel Roden"],
                correct: "Jiří Langmajer",
                level: "easy",
            },
            {
                question: "Kde hlavní postava pracuje?",
                answer: ["V redakci", "Na poště"],
                correct: "V redakci",
                level: "medium",
            },
            {
                question: "Kdy byl film natočen?",
                answer: ["2020", "2018"],
                correct: "2018",
                level: "hard",
            },
        ],
    },
];

function addCategory(category) {
    const column = document.createElement("div");
    column.classList.add("movie-column");

    const movieTitle = document.createElement("div");
    movieTitle.classList.add("movie-title");
    movieTitle.innerHTML = category.movie;

    column.appendChild(movieTitle);
    game.append(column);

    category.questions.forEach((question) => {
        const card = document.createElement("div");
        card.classList.add("card");

        column.appendChild(card);

        if (question.level === "easy") {
            card.innerHTML = 100;
        } else if (question.level === "medium") {
            card.innerHTML = 200;
        } else if (question.level === "hard") {
            card.innerHTML = 300;
        }
    });
}

riskujCategories.forEach((category) => addCategory(category));
