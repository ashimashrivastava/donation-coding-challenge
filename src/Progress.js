import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'



const Container = Styled.div`
    progress {
        margin-right: 8px;
    }
    progress[value] {
        width: 350px;
        height: 20px;

    }
    progress[value]::-webkit-progress-value {
        background-image:
             -webkit-linear-gradient(-45deg, 
                                      rgba(0, 0, 0, .1) 33%, 
                                     rgba(0,0, 0, .1) 66%),
             -webkit-linear-gradient(top, 
                                     rgba(350, 350, 350, .25), 
                                     rgba(0, 0, 0, .25)),
             -webkit-linear-gradient(left, #09c, #f84);
      
          border-radius: 2px; 
          background-size: 35px 20px, 100% 100%, 100% 100%;
      }
`;



const Progress = ({value, max}) => {
    let amntComplete = false;
    const completeVal = Math.round((value / max) * 100);
    if (completeVal >= 100){
        amntComplete = true;
        console.log('Crossed 5000')
    }
    return (
        <Container>
        
            <progress value={value} max={max} />
            <br></br>
            <br></br>
            <span >{completeVal}% Complete!</span>
            <br></br>
            {amntComplete && <span>Thanks for helping us raise $5000! &#128516;</span>}
        
        </Container>
    )
};

Progress.propType = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string
}

Progress.defaultProps = {
    max: 5000,
    color: "lightBlue",
    width: "250px"
}

export default Progress
