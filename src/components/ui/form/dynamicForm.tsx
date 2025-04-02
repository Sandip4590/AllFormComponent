import React from "react";

import { Form } from "../form";

import { cn } from "@/lib/utils";

const DynamicForm = ({ form, onSubmit, formFields, id, className }: any) => {
  // console.log(formFields);

  return (
    <Form {...form}>
      <form
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          " space-y-3  md:w-full sm:w-full  grid p-4  gap-2",
          className
        )}
      >
        {formFields.map(({ component: Component, ...item }: any) => {
          return <Component key={item.name} control={form.control} {...item} />;
        })}
      </form>
    </Form>
  );
};

export default DynamicForm;
