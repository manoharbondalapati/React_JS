// import React, { useState } from 'react';
// import questions from './Questions';
// import Question from './Question';
// import Score from './Score';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [selectedOption, setSelectedOption] = useState("");
//     //const [score, setScore] = useState(0);
//     const [quizEnd, setQuizEnd] = useState(false);
//     const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(""));

//     const handleOptionChange = (event) => {
//         setSelectedOption(event.target.value);
//     };


    
//     const handleNextQuestion = () => {
//         if (selectedOption === "") {
//             alert("Please select an answer.");
//          } else  {
//             if(currentQuestion + 1 < questions.length){
//             setUserAnswers(prevAnswers => {
//                 const newAnswers = [...prevAnswers];
//                 newAnswers[currentQuestion] = selectedOption;
//                 return newAnswers;
//             });
//             setCurrentQuestion(currentQuestion + 1);
//             setSelectedOption("");
//         } else {
//             setUserAnswers(prevAnswers => {
//                 const newAnswers = [...prevAnswers];
//                 newAnswers[currentQuestion] = selectedOption;
//                 return newAnswers;
//             });
//             setQuizEnd(true);
//         }
//     };
// }

//     const handlePreviousQuestion = () => {
//         if (currentQuestion > 0) {
//             setUserAnswers(prevAnswers => {
//                 const newAnswers = [...prevAnswers];
//                 newAnswers[currentQuestion] = selectedOption;
//                 return newAnswers;
//             });
//             setCurrentQuestion(currentQuestion - 1);
//         }
//     };

//     // const calculateScore = () => {
//     //     let newScore = score;
//     //     if (selectedOption === questions[currentQuestion].answer) {
//     //         newScore += 1;
//     //     }
//     //     setScore(newScore);
//     // };

//     // const handleFinishQuiz = () => {
//     //     // Calculate score or any other finalization steps
//     //     setQuizEnd(true);
//     // };


//     // const handleFormSubmit = (event) => {
//     //     event.preventDefault();
//     //     if (selectedOption === "") {
//     //         alert("Please select an answer.");
//     //     } else {
//     //         checkAnswer();
//     //         handleNextQuestion();
//     //     }
//     // };

//     // const checkAnswer = () => {
//     //     if (selectedOption === questions[currentQuestion].answer) {
//     //         setScore(score + 1);
//     //     }
//     // };

//     // const handleNextQuestion = () => {
//     //     if (currentQuestion + 1 < questions.length) {
//     //         setCurrentQuestion(currentQuestion + 1);
//     //         setSelectedOption("");
//     //     } else {
//     //         setQuizEnd(true);
//     //     }
//     // };

//     return (
//         <div className='App d-flex flex-column align-items-center justify-content-center'>
//             <h1 className='app-title'>Quiz ApP</h1>
//             {!quizEnd ? (
//                 <Question
//                     question={questions[currentQuestion]}
//                     selectedOption={selectedOption}
//                     onOptionChange={handleOptionChange}
//                     //onSubmit={handleFormSubmit}
//                     onNextQuestion={handleNextQuestion}
//                     onPreviousQuestion={handlePreviousQuestion}
//                 />
//             ) : (
//                 <Score
//                       questions={questions}
//                       userAnswers={userAnswers}
//                     // score={score}
//                     // onNextQuestion={handleNextQuestion}
//                     className="score"
//                 />
//             )}
//         </div>
//     );
// }

// export default App;


import React, { useState } from 'react';
import questions from './Questions';
import Question from './Question';
import Score from './Score';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [quizEnd, setQuizEnd] = useState(false);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(""));

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleNextQuestion = () => {
        if (selectedOption === "") {
            alert("Please select an answer.");
        } else {
            updateUserAnswer(); // Update the user's answer for the current question
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedOption(userAnswers[currentQuestion + 1] || ""); // Load previously selected option if available
            } else {
                setQuizEnd(true);
            }
        }
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion > 0) {
            updateUserAnswer(); // Update the user's answer for the current question
            setCurrentQuestion(currentQuestion - 1);
            setSelectedOption(userAnswers[currentQuestion - 1] || ""); // Load previously selected option if available
        }
    };

    const updateUserAnswer = () => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestion] = selectedOption;
        setUserAnswers(newAnswers);
    };

    return (
        <div className='App d-flex flex-column align-items-center justify-content-center'>
            <h1 className='app-title'>Quiz App</h1>
            {!quizEnd ? (
                <Question
                    question={questions[currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                    onNextQuestion={handleNextQuestion}
                    onPreviousQuestion={handlePreviousQuestion}
                />
            ) : (
                <Score
                    questions={questions}
                    userAnswers={userAnswers}
                />
            )}
        </div>
    );
}

export default App;

