import React, {useState} from "react";
import { TextField, Button } from "@mui/material";

const Form = () => {
    const [income, setIncome] = useState()
    const [creditCard, setCreditCard] = useState()
    const [car, setCar] = useState()
    const [student, setStudent] = useState()
    const [appraised, setAppraised] = useState()
    const [down, setDown] = useState()
    const [loan, setLoan] = useState()
    const [mortgage, setMortgage] = useState()
    const [creditScore, setCreditScore] = useState()
    const [LTV, setLTV] = useState()
    const [DTI, setDTI] = useState()
    const [DTISum, setDTISum] = useState(0)
    const [FEDTI, setFEDTI] = useState()
    const [rec, setRec] = useState()

    const Update = () => {
      setDTISum(Number(car) + Number(creditCard) + Number(mortgage))
    }
 
    const handleSubmit = (event) => {
        event.preventDefault()
        Update()
        setLTV(loan/appraised)
        setDTI(DTISum / income)
        setFEDTI(mortgage / income)

        console.log(LTV)
        console.log(DTI)
        console.log(FEDTI)

        if (creditScore >= 640 && LTV < 0.8 && DTI <= 0.43 && FEDTI <= 0.28) {
         setRec("Congratulations, you are approved to purchase a home")
        }
        else {
         if (creditScore < 640) {
            setRec("Your Credit Score is too low (recommended below 640)")
         }
         else if (LTV > 0.95) {
            setRec("Your Loan to Value ratio is too high (recommended below 95%)")
         }
         else if (DTI > 0.43) {
            setRec("Your Debt to Income ratio is too high (recommended below 43%)")
         }
         else if (FEDTI > 0.28) {
            setRec("Your Front End Debt To Income ratio is too high (recommended below 28%)")
         }
         else if (LTV >= 0.8 && LTV <= 0.95) {
            setRec("You are approved to purchase a home but your Loan to Value ratio is high (above 80%), so you may need to purchase Private Mortgage Insurance to qualify for buying a home")
         }
        }
    }
    return ( 
        <React.Fragment>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <h2>Home Purchase Eligibility Calculator</h2>
                <TextField 
                    label="Gross Monthly Income"
                    onChange={e => setIncome(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="number"
                    sx={{mb: 3}}
                    fullWidth
                    value={income}
                 />
                 <TextField 
                    label="Credit Card Payment"
                    onChange={e => setCreditCard(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="number"
                    value={creditCard}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Car Payment"
                    onChange={e => setCar(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="number"
                    value={car}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Student Loan Payment"
                    onChange={e => setStudent(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="number"
                    value={student}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Appraised Value"
                    onChange={e => setAppraised(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="number"
                    value={appraised}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Down Payment"
                    onChange={e => setDown(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="number"
                    value={down}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Loan Amount"
                    onChange={e => setLoan(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="number"
                    value={loan}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Monthly Mortgage Payment"
                    onChange={e => setMortgage(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="number"
                    value={mortgage}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <TextField 
                    label="Credit Score"
                    onChange={e => setCreditScore(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="number"
                    value={creditScore}
                    fullWidth
                    sx={{mb: 3}}
                 />
                 <Button variant="outlined" color="secondary" type="submit">Submit</Button>             
        </form>
        <p>{rec}</p>
        </React.Fragment>
     );
}
 
export default Form;