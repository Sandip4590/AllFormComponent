"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

import DynamicForm from "@/components/ui/form/dynamicForm";
import FormFields from "./loginFormFiels";
import { onSubmit } from "@/app/actions";

const Login = () => {
  const form = useForm({
    defaultValues: FormFields.reduce((p, c) => ({ ...p, [c.name]: "" }), {}),
  });

  const handleSubmit = async (value) => {
    await onSubmit(value, form.reset); // Passing form.reset here
    console.log(value)
  };

  return (
    <div className="h-screen flex flex-col sm:justify-center items-center gap-5 mt-16">
      <h1 className=" text-3xl font-bold underline">Login Page</h1>
      <DynamicForm
        form={form}
        onSubmit={handleSubmit}
        formFields={FormFields}
        id="login-form"
        className=" grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
      />
      <Button className="w-100 h-12 bg-violet-950"type="submit" form="login-form">
        Confirm
      </Button>
    </div>
  );
};

export default Login;
