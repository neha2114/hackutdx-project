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
    const [creditRec, setCreditRec] = useState()
    const [LTVRec, setLTVRec] = useState()
    const [DTIRec, setDTIRec] = useState()
    const [FEDTIRec, setFEDTIRec] = useState()

    const Update = () => {
      setDTISum(Number(car) + Number(creditCard) + Number(mortgage))
    }
 
    const handleSubmit = (event) => {
        event.preventDefault()
        Update()
        setLTV(loan / appraised)
        setDTI(DTISum / income)
        setFEDTI(mortgage / income)

        console.log(LTV)
        console.log(DTI)
        console.log(FEDTI)

        if (creditScore >= 640 && (LTV >= 0.8 && LTV <= 0.95) && DTI <= 0.43 && FEDTI <= 0.28) {
         setRec("Congratulations, you are approved to purchase a home! Please review our suggestions and speak with an advisor for additional information")
         setCreditRec("Your Credit Score follows the recommendation of above 640")
         setDTIRec("Your Debt to Income ratio follows the recommendation of below 43%")
         setFEDTIRec("Your Front End Debt To Income ratio follows the recommendation of below 28%")

         if (LTV < 0.8) {
            setLTVRec("Your Loan To Value ratio follows the recommendation of below 80%")
         }
         else {
            setLTVRec("Your Loan To Value ratio is below the recommendation of below 80% so you may need to purchase Private Mortgage Insurance to qualify for buying a home")
         }
        }
        else {
         setRec("One or more of your responses do not follow financial recommendations to purchase a home. Please review our suggestions and speak with an advisor to create a personalized plan")
         
         if (creditScore < 640) {
            setCreditRec("Your Credit Score is too low (recommended below 640)")
         }
         if (LTV > 0.95) {
            setLTVRec("Your Loan to Value ratio is too high (recommended below 95%)")
         }
         if (DTI > 0.43) {
            setDTIRec("Your Debt to Income ratio is too high (recommended below 43%)")
         }
         if (FEDTI > 0.28) {
            setFEDTIRec("Your Front End Debt To Income ratio is too high (recommended below 28%)")
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
        <p>{creditRec}</p>
        <p>{LTVRec}</p>
        <p>{DTIRec}</p>
        <p>{FEDTIRec}</p>
        </React.Fragment>
     );
}
 
export default Form;