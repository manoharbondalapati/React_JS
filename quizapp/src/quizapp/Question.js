import React from 'react';
import Options from './Options';
import './App.css';

class Question extends React.Component
{
    render()
    {
        const{question,selectedoption,onoptionchange,onSubmit}=this.props;

        return(
            <div className='questionbox'>
                <h3>Question{question.id}</h3>
                <h5 className='mt-2'>{question.question}</h5>
                <form onSubmit={onSubmit} className='mt-2 mb-2'>
                    <Options
                        options={question.options}
                        selectedoption={selectedoption}
                        onoptionchange={onoptionchange}
                    />
                   <button type="submit" id='questionbtn' className='btn btn-primary mt-2'>Submit</button>
                </form>
                </div>
        )
    }
}

export default Question;
