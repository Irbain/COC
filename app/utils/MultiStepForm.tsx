import {
  FormikConfig,
  FormikValues,
  FormikHelpers,
  Formik,
  Form,
} from "formik";
import React, { useState } from "react";
import FormNavigation from "./FormNavigation";
// import { Progress } from "./../input/page";
import { FaRegCheckCircle, FaCheckCircle } from "react-icons/fa";

interface Props extends FormikConfig<FormikValues> {
  children: React.ReactNode;
  show: Boolean;
  buttonsTitles: any;
}

export default function MultiStepForm({
  children,
  initialValues,
  onSubmit,
  show,
  buttonsTitles,
}: Props) {
  const [stepNumber, setStepNumber] = useState(0);
  const steps = React.Children.toArray(children) as React.ReactElement[];

  const [snapshot, setSnapShot] = useState(initialValues);

  const step = steps[stepNumber];
  const totalSteps = steps.length;
  const isLastStep = stepNumber === totalSteps - 1;

  const next = (values: FormikValues) => {
    setSnapShot(values);
    setStepNumber(stepNumber + 1);
  };

  const previous = (values: FormikValues) => {
    setSnapShot(values);
    setStepNumber(stepNumber - 1);
  };

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ) => {
    if (step.props.onSubmit) {
      await step.props.onSubmit(values);
    }

    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <Formik
        initialValues={snapshot}
        onSubmit={handleSubmit}
        validationSchema={step.props.validationSchema}
      >
        {(formik) => (
          <Form className="h-full mb-[12%] overflow-hidden">
            <div className="flex flex-col h-full w-full justify-center">
              {/* <Progress step={stepNumber} /> */}
              {step}
            </div>
            <FormNavigation
              buttonsTitles={buttonsTitles}
              show={show}
              isLastStep={isLastStep}
              hasPrevious={stepNumber > 0}
              onBackClick={() => previous(formik.values)}
              stepX={stepNumber === 2}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

export const FormStep = ({ stepName = "", children }: any) => children;
