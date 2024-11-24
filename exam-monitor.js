document.addEventListener('DOMContentLoaded', () => {
    // Ensure exam data is available in sessionStorage
    const examDetails = sessionStorage.getItem('examDetails');

    if (!examDetails) {
        console.error('Exam data not found in sessionStorage.');
        alert('Exam data is missing. Please reload the page.');
        return;
    }

    const examData = JSON.parse(examDetails);
    const { examName, examDate, startTime, examDuration, endTime } = examData;

    // Validate exam data
    if (!examName || !examDate || !startTime || !endTime || isNaN(examDuration)) {
        alert('Invalid exam data. Please reload the page.');
        return;
    }

    const examStartDateTime = new Date(`${examDate}T${startTime}`);
    const examEndDateTime = new Date(`${examDate}T${endTime}`);
    const currentTime = new Date().getTime();

    // Check if the exam has started or expired
    if (currentTime < examStartDateTime.getTime()) {
        alert('The exam has not started yet.');
        return;
    }

    if (currentTime > examEndDateTime.getTime()) {
        alert('The exam has expired.');
        window.location.href = 'examexpired.html';
        return;
    }

    // Timer logic (countdown)
    const totalDurationSeconds = parseInt(examDuration, 10) * 60; // Convert duration from minutes to seconds
    let timeRemaining = totalDurationSeconds;

    // Track the timestamp when the exam starts
    const examStartTimestamp = new Date().getTime();
    sessionStorage.setItem('examStartTimestamp', examStartTimestamp); 

    const timerElement = document.createElement('div');
    timerElement.id = 'exam-timer';
    timerElement.style.position = 'fixed';
    timerElement.style.top = '10px';
    timerElement.style.left = '10px';
    timerElement.style.fontSize = '20px';
    timerElement.style.fontWeight = 'bold';
    timerElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    timerElement.style.color = 'white';
    document.body.appendChild(timerElement);

    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        timeRemaining--;

        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            alert('The exam time is up! The exam will be submitted automatically.');
            submitExam();
        }
    }, 1000);

    let isSubmitted = false;
    let cheatingDetected = false;

    // Attach submit button event listene

const submitButton = document.querySelector('#submit-btn');
if (submitButton) {
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent default form submission

        if (!isSubmitted) {
            isSubmitted = true;  // Mark as submitted

            // Show confirmation dialog
            const confirmation = confirm("Are you sure you want to submit the exam?");
            
            // If the user confirms, proceed with the submission
            if (confirmation) {
                let score = 0;
                const answers = [];
                const results = []; // Array to store result details

                // Assuming `questions` is an array of question objects with the relevant data
                questions.forEach((question, index) => {
                    const answer = [];
                    let correctOrWrong = "Wrong"; // Default to wrong

                    // Handle multiple-choice and checkbox answers
                    if (question.questionType === "mcq" || question.questionType === "multiple-answer") {
                        const options = document.getElementsByName(`question-${index}`);
                        options.forEach((option) => {
                            if (option.checked) {
                                answer.push(option.value);
                            }
                        });

                        // Check if the answer is correct
                        if (JSON.stringify(answer) === JSON.stringify(question.correctAnswers)) {
                            score += 1;
                            correctOrWrong = "Correct";
                        }
                    } else {
                        // Handle text input answers
                        const textArea = document.querySelector(`#question-${index}`);
                        if (textArea) {
                            answer.push(textArea.value);
                        }

                        if (answer[0] === question.expectedAnswer) {
                            score += 1;
                            correctOrWrong = "Correct";
                        }
                    }

                    // Add result details to the results array
                    results.push({
                        question: question.questionText,
                        yourInput: answer.join(", "),
                        correctOrWrong: correctOrWrong,
                    });

                    answers.push(answer); // Store the selected answers
                });

                // Calculate percentage
                const percentage = (score / questions.length) * 100;

                // Save results to session storage for later access
                const examResults = {
                    answers: results,
                    finalScore: score,
                    percentage: percentage,
                };
                sessionStorage.setItem("examResults", JSON.stringify(examResults));

                // Display results (for debugging purposes)
                console.log("Results saved to sessionStorage:", examResults);

                // Get the exam ID from the URL or sessionStorage
                const urlParams = new URLSearchParams(window.location.search);
                const storedExamId = urlParams.get('exam-id'); // Get 'exam-id' from URL parameters
                console.log(storedExamId); // For debugging: log exam ID

                // Redirect to student dashboard after successful submission
                window.location.href = "okcretesmart.html"; // Redirects to the student dashboard
            } else {
                // If the user cancels, show a message or do nothing
                console.log("Exam submission canceled.");
            }
        }
    });
} else {
    console.warn('Submit button (#submit-btn) not found.');
}




// Prevent copy-pasting (cheating prevention)
document.addEventListener('copy', (e) => {
    e.preventDefault();
    if (!isSubmitted && !cheatingDetected) {
        cheatingDetected = true;
        alert('Copying is not allowed during the exam.');
        submitExam(); // Trigger the submission if the student tries to copy
    }
});

// Detect when the window is minimized or loses focus (tab switching or focus loss)
window.addEventListener('blur', () => {
    if (!isSubmitted && !cheatingDetected) {
        cheatingDetected = true;
        alert('You switched tabs! The exam will be submitted with a zero score.');
        submitExam(); // Trigger the submission if the tab is switched or window is minimized
    }
});

// Detect when the window gains focus again (in case the user re-focuses)
window.addEventListener('focus', () => {
    if (!isSubmitted && cheatingDetected) {
        alert('You switched back to the exam window.');
        window.location.href = 'studentdashboard.html';
    }
});

// Prevent right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('Right-click is disabled during the exam.');
    if (!isSubmitted && !cheatingDetected) {
        cheatingDetected = true;
        submitExam();
    }
});

// Prevent keyboard shortcuts for copy-paste and developer tools
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'x')) || 
        (e.key === 'F12' || e.key === 'F5' || e.key === 'F11')) {
        e.preventDefault();
        if (!isSubmitted && !cheatingDetected) {
            cheatingDetected = true;
            alert('Keyboard shortcuts are disabled during the exam.');
            submitExam();
        }
    }
});

// Optional: Using the Page Visibility API to detect when the tab is hidden or minimized
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (!isSubmitted && !cheatingDetected) {
            cheatingDetected = true;
            alert('The exam page is no longer visible. Submitting with a zero score.');
            submitExam();
        }
    }
});




    // Assuming cheatingDetected is a global variable defined elsewhere in your code
function submitExam() {
    if (isSubmitted) return; // Avoid multiple submissions

    clearInterval(timerInterval); // Stop the timer, make sure timerInterval is defined elsewhere
    const examEndTimestamp = new Date().getTime();
    sessionStorage.setItem('examEndTimestamp', examEndTimestamp);

    // Simulate getting user answers (replace this with actual logic)
    const userAnswers = {}; // Replace with form data or actual collected answers
    
    // No need to redefine cheatingDetected here
    if (cheatingDetected) {
        localStorage.setItem('cheatingNotification', 'Student1 has cheated!');
    }

    // Store results
    const results = {
        score: 0, // Calculate score based on user answers
        message: cheatingDetected ? 'Exam submitted due to cheating.' : 'Exam submitted successfully.',
    };
    sessionStorage.setItem('examResults', JSON.stringify(results));

    // Update isSubmitted to true to prevent multiple submissions
    isSubmitted = true;

    // Redirect to student dashboard
    window.location.href = 'okcretesmart.html'; // Make sure the target page exists and is correct
}

});





    
   