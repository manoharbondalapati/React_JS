import React from 'react';

class Options extends React.Component
{
    render()
    {
        const  {options, selectedoption,onoptionchange}=this.props;

        return(
            <div className='options'>
                {options.map((option,index)=>(
                    <div key={index} className='form-check'>
                        <input
                        type='radio'
                        name='option'
                        value={option}
                        checked={selectedoption===option}
                        onChange={onoptionchange}
                        className="form-check-input"
                        />
                         <label className='fom-check-lable'>{option}</label>
                        </div>))}

            </div>
        )
    }
}
export default Options;