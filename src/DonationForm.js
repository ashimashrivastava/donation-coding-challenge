import React, {useState, useEffect, useRef} from 'react'

function DonationForm({counter, amount, setAmount}){

    //const name = useRef(null);
    const dollar = useRef(null);
    // const [counter, setCounter] = useState(0);

    

    const AddAmount = e => {
        e.preventDefault();

        setAmount([...amount, {
            //"name": name.current.value,
            "dollar": dollar.current.value
        }]);

        // name.current.value = ""
        dollar.current.value = null
    }

    return (
        
        <div>
            
            <form onSubmit={AddAmount}>
            <p>Join the {counter} other donors who have already supported the project.</p>
                {/* <label for="username">USERNAME</label>
                <input type="text" id="username" ref={name} placeholder="Enter Donor's Name"/> */}
                <label for="number">Amount</label>
                <input type="text" id="amount" ref={dollar} placeholder="Donation Amount in $"/>
                <input type="submit" value="Donate" className="submit" />
                {/* <input onClick={() =>{setCounter(counter + 1);}} type="submit" value="Donate" className="submit" /> */}
            </form>
        </div>
          
    );
  }

export default DonationForm
