import React, {useState, useEffect} from 'react';
import Header from './Header';
import DonationForm from './DonationForm';
import Progress from './Progress';
import Modal from './Modal';
import './App.css';

function App() {
  const [amount, setAmount] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [value, setProgressVal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [amountComplete, setAmountComplete] = useState(false);


  useEffect(() =>{
    let temp = 0;
    let count = 0;
    let progVal = 0;
    for(let i = 0; i < amount.length; i++){
      if(amount[i].dollar > 4){
        temp += parseInt(amount[i].dollar)
        count = count + 1
        progVal = temp
        setModalOpen(false)
        
      }
      else {
          console.log('less amount')
          setModalOpen(true) 
      }
    }
    //console.log(temp)
    setProgressVal(progVal)
    setCounter(count);
    setTotalAmount(temp);
  }, [value, counter, amount]);
  
  //console.log(this.temp)

  return (
    <div>
      <div>
        <Header/>
      </div>
      
      <div >
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <h3>Please make sure the amount is not blank and more tha $5!
            <br></br>
          Thanks :)
          </h3>
        </Modal>
        
      </div>
      <div className="Right-panel">
          <h2>We have raised ${totalAmount} out of $5000!</h2>
          <div className="Progress-bar">
            <Progress value={value} max={5000}/>
          </div>
          <div className="donation-wrapper">
            <h2>Only four days left to fund this project!</h2>
            <div className="form-group">
              <DonationForm amount={amount} counter={counter} setAmount={setAmount}/>
            </div>
          </div>
      </div>
    </div>
  );
}



export default App;


// for(let i = 0; i < amount.length; i++){
//   if(amount[i].dollar > 5){
//     temp += parseInt(amount[i].dollar)
//     count = count + 1
//     progVal = temp
//     setModalOpen(false)
//     setAmountComplete(false)
//   }
//   else {
//     if(amount[i].dollar == 5000){
//       console.log('5000 complete')
//       setAmountComplete(true)
//       setModalOpen(false)
//     } else {
//       console.log('less amount')
//       setAmountComplete(false)
//       setModalOpen(true)
//     }
       
//   }
// }