/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import DeliveryForm from "./components/DeliveryForm";
import PersonalForm from "./components/PersonalForm";
import UserForm from "./components/UserForm";
import { Stepper, Step, StepLabel, Typography, Box } from "@mui/material";
import { useEffect } from "react";

const Finish = () => {
  return (
    <Box sx={{ padding: '25px' }}>
      <Typography variant="h6" component="h6" align="center">
        Cadastro realizado com sucesso!
      </Typography>
    </Box>
  )
}

const MultiPartForm = () => {
  const steps = ['Dados cadastrais', 'Dados pessoais', 'Dados de entrega']
  const stepsComponents = [UserForm, PersonalForm, DeliveryForm]

  const [activeStep, setActiveStep] = useState(1)
  const [dataForm, setDataForm] = useState({})

  useEffect(() => {
    if (activeStep === stepsComponents.length) {
      console.log(dataForm)
    }
  }, [activeStep])

  const nextStep = (data) => {
    setActiveStep(activeStep + 1)
    setDataForm({
      ...dataForm,
      ...data
    })
  }

  const renderForm = () => {
    if (activeStep === stepsComponents.length) {
      return <Finish />
    } else {
      const ActiveComponent = stepsComponents[activeStep]
      return (
        <ActiveComponent nextStep={nextStep} />
      )
    }


  }

  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={`step-${index}`}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      {renderForm()}
    </>
  );
};

export default MultiPartForm;
