import React from "react";
import { useFieldArray } from "react-hook-form";
import { TrashIcon } from "lucide-react";
import { Button } from "../button";
import { cn } from "@/lib/utils";

type Props = {};

const FormFieldArray = ({ control, name, fieldArray, className }: any) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <ul className=" flex w-lg  flex-col gap-3.5">
      {fields.map((item, index) => (
        <li key={item.name} className={cn("", className)}>
          {fieldArray.map(
            ({ component: Component, name: itemName, ...item }) => {
              return (
                <Component
                  key={item.name}
                  control={control}
                  name={`${name}.${index}.${itemName}`}
                  {...item}
                />
              );
            }
          )}
          <Button size="icon" type="button" onClick={() => remove(index)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
      <Button className=" flex-1"
        type="button"
        onClick={() => {
          append(fieldArray.reduce((p, c) => ({ ...p, [c.name]: "" }), {}));
        }}
      >
        Add Item
      </Button>
    </ul>
  );
};

export default FormFieldArray;
