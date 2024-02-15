import React from 'react';
import questions from './Questions';
import Question from './Question';
import Score from './Score';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';







class App extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            questions:questions,
            currentQuestion:0,
            selectedoption:"",
            score:0,
            quizend:false,
        };
    }

    handleOptionChange =(event)=>
    {
        this.setState({selectedoption:event.target.value})
    };

    handleformsubmit=(event)=>
    {
        event.preventDefault();
        const { selectedoption } = this.state;
        if (selectedoption === "") {
            alert("Please select an answer.");
        } else {
            this.checkAnswer();
            this.handlenextQuestion();
        }

    };

    checkAnswer=()=>
    {
        const {questions,currentQuestion,selectedoption}=this.state;
        if(selectedoption===questions[currentQuestion].answer)
        {
            this.setState((prevState)=>({score:prevState.score+1}));
        }
    };

    handlenextQuestion=()=>
    {
        const {questions , currentQuestion}=this.state;
        if(currentQuestion+1<questions.length)
        {
            this.setState((prevState)=>({currentQuestion:prevState.currentQuestion+1,selectedoption:"",}));

        }
        else
        {
            this.setState({quizend:true,
            });
        }
    }
    render()
    {
        const{questions,currentQuestion,selectedoption,score,quizend}=this.state;
        return(
            <div className='App d-flex flex-column align-items-center justify-content-center'>
                <h1 className='app-title'>Quiz APP</h1>
                {
                    !quizend?(
                        <Question question={questions[currentQuestion]}
                        selectedoption={selectedoption}
                        onoptionchange={this.handleOptionChange}
                        onSubmit={this.handleformsubmit}/>
                    ):(
                        <Score score={score}
                        onnextquestion={this.handlenextQuestion}
                        className="score"/>
                    )
                
                }

            </div>
        );
    }
}

export default App;