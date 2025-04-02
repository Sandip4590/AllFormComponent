"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";


import DynamicForm from "@/components/ui/form/dynamicForm";
import FormFields from "./registerFormFiels";

const Register = () => {
  const form = useForm({
    defaultValues:FormFields.reduce((p, c) => ({ ...p, [c.name]: '' }), {}),
    mode: "all",
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <div className="h-screen flex flex-col sm:justify-center items-center gap-5">
      <DynamicForm form={form} onSubmit={onSubmit} formFields={FormFields} id="login-form" />
      <Button className="w-103" type="submit" form="login-form">
        Sign in
      </Button>
    </div>
  );
};

export default Register;
