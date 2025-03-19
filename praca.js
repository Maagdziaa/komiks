const comicFrames = [
    { type: "single", src: "1.png" },
    { type: "double", src1: "2.png", src2: "3.png" },
    { type: "single", src: "4.png" },
    { type: "double", src1: "5.png", src2: "6.png" },
    { type: "single", src: "7.png" },
    { type: "double", src1: "8.png", src2: "9.png" },
    { type: "double", src1: "10.png", src2: "11.png" },
    { type: "single", src: "12.png" },
    { type: "double", src1: "13.png", src2: "14.png" },
    { type: "double", src1: "15.png", src2: "16.png" },
    { type: "double", src1: "17.png", src2: "18.png" },
    { type: "single", src: "19.png", hasTask: true, taskId: "task-1" },
    { type: "single", src: "20.png", hasTask: true, taskId: "task-2" },
    { type: "double", src1: "27.png", src2: "28.png" },
    { type: "single", src: "29.png" },
    { type: "double", src1: "30.png", src2: "31.png" },
    { type: "double", src1: "32.png", src2: "33.png" },
    { type: "double", src1: "34.png", src2: "35.png" },
    { type: "double", src1: "36.png", src2: "37.png" },
    { type: "double", src1: "38.png", src2: "39.png" },
    { type: "double", src1: "40.png", src2: "41.png" },
    { type: "double", src1: "42.png", src2: "43.png" },
    { type: "single", src: "21.png", hasTask: true, taskId: "task-3", subtasks: [
        { id: "subtask-3-1", type: "matrix", description: " a) ", matrixRows: 2, matrixCols: 2, correctAnswer: [[6, 12], [7, 3]] },
        { id: "subtask-3-2", type: "text", description: "b) ", correctAnswer: "operacja niemożliwa" },
        { id: "subtask-3-3", type: "matrix", description: "c) ", matrixRows: 3, matrixCols: 2, correctAnswer: [[4, 1], [2, 5], [1, 0]] },
        { id: "subtask-3-4", type: "matrix", description: "d) ", matrixRows: 3, matrixCols: 3, correctAnswer: [[6, 2, 0], [-3, 7, 0], [6, -2, 4]] }
    ] },
    { type: "single", src: "22.png", hasTask: true, taskId: "task-4", subtasks: [
        { id: "subtask-4-1", type: "matrix", description: " ", matrixRows: 2, matrixCols: 3, correctAnswer: [[6, -6, 2], [4, 8, 0]] }
    ] },
    { type: "single", src: "23.png", hasTask: true, taskId: "task-5", subtasks: [
        { id: "subtask-5-1", type: "matrix", description: " a) ", matrixRows: 1, matrixCols: 2, correctAnswer: [[-11, -13]] },
        { id: "subtask-5-2", type: "matrix", description: " b) ", matrixRows: 2, matrixCols: 3, correctAnswer: [[3, 14, 8], [31, -5, -3]] },
        { id: "subtask-5-3", type: "text", description: "c) ", correctAnswer: "operacja niemożliwa" },
        { id: "subtask-5-4", type: "matrix", description: "d) ", matrixRows: 3, matrixCols: 3, correctAnswer: [[2, -2, 1], [2, -2, 1], [6, -6, 3]] }
    ] },
    { type: "double", src1: "44.png", src2: "45.png" },
    { type: "single", src: "46.png" },
    { type: "double", src1: "47.png", src2: "48.png" },
    { type: "single", src: "49.png" },
    { type: "double", src1: "50.png", src2: "51.png" },
    { type: "single", src: "52.png" },
    { type: "double", src1: "53.png", src2: "54.png" },
    { type: "double", src1: "55.png", src2: "56.png" },
    { type: "single", src: "57.png" },
    { type: "single", src: "58.png" },
    { type: "single", src: "59.png" },
    { type: "single", src: "24.png", hasTask: true, taskId: "task-6" },
    { type: "single", src: "60.png" },
    { type: "double", src1: "61.png", src2: "62.png" },
    { type: "double", src1: "63.png", src2: "64.png" },
    { type: "double", src1: "65.png", src2: "66.png" },
    { type: "single", src: "67.png" },
    { type: "single", src: "25.png", hasTask: true, taskId: "task-7", subtasks: [
        { id: "subtask-7-1", type: "matrix", description: " a) ", matrixRows: 2, matrixCols: 2, correctAnswer: [[3/16, 1/4], [-1/16, 1/4]] },
        { id: "subtask-7-2", type: "text", description: "b) ", correctAnswer: "nie istnieje" },
        { id: "subtask-7-3", type: "matrix", description: "c) ", matrixRows: 3, matrixCols: 3, correctAnswer: [[-3, 2, 0], [2, -1, 0], [5, -3, 1]] }
    ] },
    { type: "double", src1: "68.png", src2: "69.png" },
    { type: "single", src: "70.png" },
    { type: "single", src: "71.png" },
    { type: "double", src1: "72.png", src2: "73.png" },
    { type: "double", src1: "74.png", src2: "75.png" },
    { type: "double", src1: "76.png", src2: "77.png" },
    { type: "single", src: "78.png" },
    { type: "double", src1: "79.png", src2: "80.png" },
    { type: "single", src: "81.png" },
    { type: "double", src1: "82.png", src2: "83.png" },
    { type: "double", src1: "84.png", src2: "85.png" },
    { type: "double", src1: "86.png", src2: "87.png" },
    { type: "double", src1: "88.png", src2: "89.png" },
    { type: "double", src1: "90.png", src2: "91.png" },
    { type: "double", src1: "92.png", src2: "93.png" },
    { type: "single", src: "26.png", hasTask: true, taskId: "task-8" },
    { type: "single", src: "94.png" },
    { type: "single", src: "95.png" }
];

let currentFrameIndex = 0;
const comicContainer = document.querySelector(".comic-container");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const taskSection = document.getElementById("task-section");

function updateFrame() {
    const currentFrame = comicFrames[currentFrameIndex];
    comicContainer.innerHTML = "";

    document.querySelectorAll(".task").forEach(task => {
        task.style.display = "none";
    });

    if (currentFrame.type === "single") {
        const singleFrame = document.createElement("div");
        singleFrame.classList.add("single-frame");
        const img = document.createElement("img");
        img.src = currentFrame.src;
        img.alt = "Klatka komiksu";
        singleFrame.appendChild(img);
        comicContainer.appendChild(singleFrame);
    } else if (currentFrame.type === "double") {
        const doubleFrame = document.createElement("div");
        doubleFrame.classList.add("double-frame");
        const img1 = document.createElement("img");
        img1.src = currentFrame.src1;
        img1.alt = "Klatka 1";
        doubleFrame.appendChild(img1);
        const img2 = document.createElement("img");
        img2.src = currentFrame.src2;
        img2.alt = "Klatka 2";
        doubleFrame.appendChild(img2);
        comicContainer.appendChild(doubleFrame);
    }

    if (currentFrame.hasTask) {
        const task = document.getElementById(currentFrame.taskId);
        if (task) {
            taskSection.style.display = "block";
            task.style.display = "block";

            const subtasksContainer = task.querySelector(".subtasks-container");
            if (subtasksContainer) {
                subtasksContainer.innerHTML = "";

                if (currentFrame.subtasks) {
                    currentFrame.subtasks.forEach(subtask => {
                        const subtaskDiv = document.createElement("div");
                        subtaskDiv.classList.add("subtask");

                        const description = document.createElement("p");
                        description.textContent = subtask.description;
                        subtaskDiv.appendChild(description);

                        if (subtask.type === "matrix") {
                            const matrixContainer = document.createElement("div");
                            matrixContainer.id = `matrix-input-container-${subtask.id}`;
                            matrixContainer.classList.add("matrix-input-container");
                            subtaskDiv.appendChild(matrixContainer);

                            setTimeout(() => {
                                createMatrixInputs(subtask.matrixRows, subtask.matrixCols, matrixContainer.id);
                            }, 0);
                        } else if (subtask.type === "text") {
                            const input = document.createElement("input");
                            input.type = "text";
                            input.id = `text-input-${subtask.id}`;
                            input.placeholder = "Wpisz odpowiedź";
                            subtaskDiv.appendChild(input);
                        }

                        subtasksContainer.appendChild(subtaskDiv);
                    });
                }
            }
        }
    } else {
        taskSection.style.display = "none";
    }

    prevButton.disabled = currentFrameIndex === 0;
    nextButton.disabled = currentFrameIndex === comicFrames.length - 1;

    if (currentFrameIndex === comicFrames.length - 1) {
        nextButton.textContent = "Koniec";
    } else {
        nextButton.textContent = "Dalej";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showNextFrame() {
    if (currentFrameIndex < comicFrames.length - 1) {
        currentFrameIndex++;
        updateFrame();
    }
}

function showPrevFrame() {
    if (currentFrameIndex > 0) {
        currentFrameIndex--;
        updateFrame();
    }
}

prevButton.addEventListener("click", showPrevFrame);
nextButton.addEventListener("click", showNextFrame);

updateFrame();

function getUserMatrix(rows, cols, containerId) {
    const container = document.getElementById(containerId);
    const inputs = container.querySelectorAll("input");
    const matrix = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const value = parseFloat(inputs[i * cols + j].value) || 0;
            row.push(value);
        }
        matrix.push(row);
    }

    return matrix;
}

function createMatrixInputs(rows, cols, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Kontener o ID "${containerId}" nie istnieje!`);
        return;
    }

    container.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("matrix-row");

        for (let j = 0; j < cols; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.classList.add("matrix-input");
            input.placeholder = ``;
            rowDiv.appendChild(input);
        }

        container.appendChild(rowDiv);
    }
}

document.querySelectorAll(".submit-answers").forEach(button => {
    button.addEventListener("click", (event) => {
        const task = event.target.closest(".task");
        const resultMessage = task.querySelector(".result-message");

        if (!task) {
            console.error("Nie można znaleźć zadania!");
            return;
        }

        const taskId = task.id;
        const currentFrame = comicFrames.find(frame => frame.taskId === taskId);

        let correctCount = 0;
        let totalQuestions = 0;

        const htmlQuestions = task.querySelectorAll(".question");
        htmlQuestions.forEach(question => {
            const input = question.querySelector("input");
            const correctAnswer = question.dataset.correctAnswer;

            if (input && correctAnswer) {
                const userAnswer = input.value.trim().toLowerCase();
                if (userAnswer === correctAnswer.toLowerCase()) {
                    correctCount++;
                }
                totalQuestions++;
            }
        });

        if (currentFrame && currentFrame.subtasks) {
            currentFrame.subtasks.forEach(subtask => {
                if (subtask.type === "matrix") {
                    const matrixContainer = task.querySelector(`#matrix-input-container-${subtask.id}`);
                    if (!matrixContainer) return;

                    const userMatrix = getUserMatrix(subtask.matrixRows, subtask.matrixCols, matrixContainer.id);
                    const correctMatrix = subtask.correctAnswer;

                    if (JSON.stringify(userMatrix) === JSON.stringify(correctMatrix)) {
                        correctCount++;
                    }
                    totalQuestions++;
                } else if (subtask.type === "text") {
                    const input = task.querySelector(`#text-input-${subtask.id}`);
                    if (!input) return;

                    const userAnswer = input.value.trim().toLowerCase();
                    const correctAnswer = subtask.correctAnswer.toLowerCase();

                    if (userAnswer === correctAnswer) {
                        correctCount++;
                    }
                    totalQuestions++;
                }
            });
        }

        if (correctCount === totalQuestions) {
            resultMessage.textContent = "Wszystkie odpowiedzi są poprawne!";
            resultMessage.style.color = "green";
        } else {
            resultMessage.textContent = `Poprawne odpowiedzi: ${correctCount} z ${totalQuestions}`;
            resultMessage.style.color = "red";
        }
    });
});

function showHint(event) {
    event.preventDefault();
    const hintButton = event.target;
    const taskId = hintButton.id.replace("hint-button-", "");
    const hintMessage = document.getElementById(`hint-message-${taskId}`);

    if (hintMessage.style.display === "block") {
        hintMessage.style.display = "none";
    } else {
        switch (taskId) {
            case "1":
                hintMessage.textContent = " Najpierw podaj liczbę wierszy, potem kolumn.";
                break;
            case "2":
                hintMessage.textContent = " Cofnij się w komiksie do podstawowych pojęć.";
                break;
            case "3":
                hintMessage.textContent = " Zwróć uwagę na wymiary macierzy.";
                break;
            case "4":
                hintMessage.textContent = " Pomnóż każdy element przez wartość.";
                break;
            case "5":
                hintMessage.textContent = " Zwróć uwagę na liczbę kolumn pierwszej macierzy i liczbę wierszy drugiej macierzy.";
                break;
            case "6":
                hintMessage.textContent = " Sprowadź macierz do postaci trójkątnej za pomocą operacji na wierszach.";
                break;
            case "7":
                hintMessage.textContent = " Oblicz najpierw wyznaczniki - pamiętaj kiedy macierz odwrotna nie istnieje.";
                break;
            case "8":
                hintMessage.textContent = " Sprawdź rzędy macierzy głównej i uzupełnionej.";
                break;
            default:
                hintMessage.textContent = " Cofnij się w komiksie.";
        }
        hintMessage.style.display = "block";
    }
}

document.querySelectorAll(".hint-button").forEach(button => {
    button.addEventListener("click", showHint);
});

prevButton.addEventListener("click", showPrevFrame);
nextButton.addEventListener("click", showNextFrame);

updateFrame();