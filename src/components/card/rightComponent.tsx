"use client";

import React from "react";
import DynamicForm from "../ui/form/dynamicForm";
import { useForm } from "react-hook-form";
import { onSubmit } from "@/app/actions";

import { Button } from "../ui/button";
import FormFields from "@/app/(auth)/login/loginFormFiels";

type Props = {};

const RightComponent = (props: Props) => {
  const form = useForm({
    defaultValues: FormFields.reduce((p, c) => ({ ...p, [c.name]: "" }), {}),
  });


  const handleSubmit = async (value) => {
    await onSubmit(value, form.reset); // Passing form.reset here
    console.log(value);
  };
  return (
    <div className=" flex-1 ml-[20%]   h-screen flex flex-col  w-full justify-center items-center gap-5 mt-16">
     
      <DynamicForm
        form={form}
        onSubmit={handleSubmit}
        formFields={FormFields}
        id="login-form"
        className=" grid-cols-1 sm:grid-cols-2 md:grid-cols-2"
      />
      <Button className=" w-105 h-12 bg-violet-950 "  type="submit" form="login-form">
        Confirm
      </Button>
    </div>
  );
};

export default RightComponent;
