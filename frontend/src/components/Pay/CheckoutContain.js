import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


//styles
import "./Pay.css";
import FormCheck from './FormCheck';
import Payment from './Payment';

const steps = ['Input method payment', 'Payment finish'];

const CheckoutForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
  
    const isStepOptional = (step) => {
      return step === 1;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    const Form = () => activeStep === 0 
    ? <FormCheck handleNext={handleNext} />
    : <Payment handleNext={handleNext}  />

    const Confirmation = () =>(
      <div className='p-6'>
        <h2 className='text-center text-2xl font-bold'>Cảm ơn bạn đã ủng hộ</h2>
      </div>
  )
      
  return (
    <div className='bg-[#191919]'>
      <h1 className='text-center text-3xl uppercase text-red-600 font-bold p-4'>Checkout</h1>
      <Box sx={{ width: '100%' }} >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps} className="title-label" >{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset} color="error">Reset</Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
        <div className=' mt-5 flex justify-center'>
              {/* form for custommer*/}
              <section className='w-full'>
                {activeStep === steps.length ? <Confirmation /> :  <Form  />}
              </section>
         </div>
  </div>
  )
}

export default CheckoutForm
