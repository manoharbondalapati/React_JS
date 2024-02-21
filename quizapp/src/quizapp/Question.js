import React from 'react';
import Options from './Options';
import './App.css';
import questions from './Questions';

function Question({ question, selectedOption, onOptionChange, onNextQuestion, onPreviousQuestion  }) {
    return (
        <div className='questionbox'>
            <h3>Question {question.id}</h3>
            <h5 className='mt-2'>{question.question}</h5>
            <form  className='mt-2 mb-2'>
                <Options
                    options={question.options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange}
                />
                <div>
                <button type="button" onClick={onPreviousQuestion} disabled={question.id === 1} className='btn btn-primary'>
                        Previous
                    </button>
                    <button type="button" onClick={onNextQuestion} className='btn btn-primary'>
                        {question.id < questions.length ? 'Next' : 'Finish'}
                    </button>
                    </div>
            </form>
           
        </div>
    );
}

export default Question;