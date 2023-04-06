import React, { useState } from 'react'

function Radiobtn() {
    const [audience, setAudience] = useState('');

    const handleAudienceChange = (event) => {
        setAudience(event.target.value);
      };
  return (
    <div className='row radioBtns'>
        <div className='col-md-6'>
            <label>
            <input type='radio' name='audience' value='children' checked={audience === 'children'} className="dRadio" onChange={handleAudienceChange} />
            Children
            </label>
            <br />
            <label>
            <input type='radio' name='audience' value='youths' checked={audience === 'youths'} className="dRadio" onChange={handleAudienceChange} />
            Youths
            </label>
            <br />
            <label>
            <input type='radio' name='audience' value='young_adults' checked={audience === 'young_adults'} className="dRadio" onChange={handleAudienceChange} />
            Young Adults
            </label>
            <br/>
        </div>
        <div className='col-md-6'>
            <label>
            <input type='radio' name='audience' value='entrepreneurs' checked={audience === 'entrepreneurs'} className="dRadio" onChange={handleAudienceChange} />
            Entrepreneurs
            </label>
            <br />
            <label>
            <input type='radio' name='audience' value='students' checked={audience === 'students'} className="dRadio" onChange={handleAudienceChange} />
            Students
            </label>
            <br />
            <label>
            <input type='radio' name='audience' value='elderly' checked={audience === 'elderly'} className="dRadio" onChange={handleAudienceChange} />
            The Elderly
            </label>
            <br/>
        </div>
    </div>
  )
}

export default Radiobtn