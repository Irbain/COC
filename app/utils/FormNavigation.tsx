import React from "react";
import { ErrorMessage, FormikValues, validateYupSchema } from "formik";
import ClashBtn from "../components/ClashBtn";
import { cn } from "@/app/utils/cn";

interface Props {
  hasPrevious?: boolean;
  onBackClick: (value: FormikValues) => void;
  isLastStep: Boolean;
  stepX: Boolean;
  show: Boolean;
  buttonsTitles: JSON | any;
}

const FormNavigation = (props: Props) => {
  return (
    <div
      className="fixed bottom-[6%] xxs:bottom-[4%] xs:bottom-[4%]
    left-0 right-0
    "
    >
      <div className="flex justify-evenly text-error text-xs mb-1 animate-wiggle mx-[10%] -z-10">
        <ErrorMessage component="div" name="gems" />

        <ErrorMessage component="div" name="devices" />

        <ErrorMessage component="div" name="input" />

        <ErrorMessage component="div" name="agreement" />

        <ErrorMessage component="div" name="email" />
      </div>
      <div
        className={cn(`flex justify-evenly mx-[20%]`, {
          "justify-center": props.hasPrevious === false,
        })}
      >
        {props.hasPrevious && (
          <ClashBtn
            type="button"
            onClick={props.onBackClick}
            width={60}
            height={30}
            color="orange"
            className=""
            props
          >
            {props.buttonsTitles.back}
          </ClashBtn>
        )}

        <br />
        {props.stepX && !props.show ? (
          <div className=""></div>
        ) : (
          <ClashBtn
            color="green"
            type="submit"
            width={60}
            height={30}
            props
            className=""
          >
            {props.isLastStep
              ? `${props.buttonsTitles.submit}`
              : `${props.buttonsTitles.next}`}
          </ClashBtn>
        )}
      </div>
    </div>
  );
};

export default FormNavigation;
