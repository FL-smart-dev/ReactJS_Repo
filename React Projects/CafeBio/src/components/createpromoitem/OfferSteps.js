import React, { useState, useEffect } from "react";
import { Button, Steps } from "antd";
import CreateOffer from "./CreateOffer";
import OfferTheme from "./OfferTheme";
import OfferSchedule from "./OfferSchedule";
import styles from "./OfferSteps.module.css";
import CampaignDataStore from "./Utils/CampaignDataStore";
import CustomerGroupServices from "../../services/CustomerGroupServices";

const { Step } = Steps;

function OfferSteps({ form, onFormSubmit }) {
  const steps = [
    {
      title: "Create Offer",
      content: <CreateOffer form={form} />,
    },
    {
      title: "Offer Theme",
      content: <OfferTheme />,
    },
    {
      title: "Offer Schedule",
      content: <OfferSchedule />,
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);


  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const stepTitle = query.get("step");
    const stepIndex = steps.findIndex(step => step.title === stepTitle);
    if (stepIndex !== -1) {
      setCurrentStep(stepIndex);
    }
  }, []);

  const updateQueryParameter = (stepIndex) => {
    const stepTitle = steps[stepIndex].title;
    const query = new URLSearchParams(window.location.search);
    query.set("step", stepTitle);
    window.history.pushState({}, '', `${window.location.pathname}?${query.toString()}`);
  };

  const nextStep = () => {
    const nextStep = currentStep + 1;
    setCurrentStep(nextStep);
    updateQueryParameter(nextStep);
  };

  const prevStep = () => {
    const prevStep = currentStep - 1;
    setCurrentStep(prevStep);
    updateQueryParameter(prevStep);
  };

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        onFormSubmit(values);
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div style={{padding:'10px'}} >
      <Steps current={currentStep}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[currentStep].content}</div>
      <div className="steps-action">
        {currentStep < steps.length - 1 && (
          <Button
            className={styles.nextButton}
            onClick={() => {
              nextStep();
              scrollToTop();
            }}
          >
            Next
          </Button>
        )}
        {currentStep === steps.length - 1 && (
          <Button className={styles.nextButton} onClick={handleSubmit}>
            Submit
          </Button>
        )}
        {currentStep > 0 && (
          <Button className={styles.prevButton} onClick={prevStep}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

export default OfferSteps;
