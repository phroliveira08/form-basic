import React, { useState } from "react";
import DeliveryForm from "./components/DeliveryForm";
import PersonalForm from "./components/PersonalForm";
import UserForm from "./components/UserForm";
import { Stepper, Step, StepLabel, StepContent } from "@mui/material";

const MultiPartForm = () => {
  const steps = ['Dados cadastrais', 'Dados pessoais', 'Dados de entrega']
  const stepsComponents = {
    'Dados cadastrais': UserForm,
    'Dados pessoais': PersonalForm,
    'Dados de entrega': DeliveryForm
  }

  const [activeStep, setActiveStep] = useState(0)

  const nextStep = () => {
    setActiveStep(activeStep + 1)
  }

  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label, index) => {
        const StepComponent = stepsComponents[label]
        return (
          <Step key={`step-${index}`}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <StepComponent nextStep={nextStep} />
            </StepContent>
          </Step>
        )
      })}
    </Stepper>
  );
};

export default MultiPartForm;
