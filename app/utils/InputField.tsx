import React, { PropsWithChildren } from "react";
import { FieldConfig, useField, FormikProps } from "formik";
import { cn } from "./cn";

interface Props extends FieldConfig {
  label: string;
}

const InputField = ({ name }: Props) => {
  const [field, meta] = useField(name);

  return (
    <>
      <input
        className={cn(
          `focus:outline-none font-sans font-bold self-center w-1/3 text-center rounded-md shadow-[inset_0_2px_1px_rgba(0,0,0,0.6)]`,
          {
            "border-[3px] border-error": Boolean(meta.error) && meta.touched,
          }
        )}
        {...field}
      />
    </>
  );
};

export default InputField;
