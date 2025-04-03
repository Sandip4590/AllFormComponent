"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusIcon } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import DynamicForm from "@/components/ui/form/dynamicForm";
import { useForm } from "react-hook-form";
import { onSubmit } from "../actions";
import FormFields from "./invoiceFormFields";
import { ScrollArea } from "@/components/ui/scroll-area";

// import FormFields from "./loginFormFiels";

type Props = {};

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const Invoice = (props: Props) => {
  const form = useForm({
    defaultValues: FormFields.reduce((p, c) => ({ ...p, [c.name]: "" }), {}),
  });

  const handleSubmit = async (value) => {
    await onSubmit(value, form.reset);
    //  // Passing form.reset here
    form.reset();
    console.log(value);
  };

  return (
    <section className="   mx-auto flex flex-col gap-5 p-5  h-screen">
      <header className=" flex justify-between flex-wrap">
        <div className="flex flex-col gap-2">
          <h1 className=" text-5xl font-semibold  ">Invoices</h1>
          <p className=" font-semibold">There are 7 Total Invoices</p>
        </div>

        <div className="flex gap-4 ">
          <Select>
            <SelectTrigger className="w-[180px]  border-none  !text-black font-semibold ">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Filter by status</SelectLabel>
                <SelectItem value="paid">Paid</SelectItem>
                <SelectItem value="unpaid">Unpaid</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className=" rounded-3xl border-none flex justify-center w-40 h-12  bg-purple-600 text-white "
              >
                <PlusIcon
                  className=" bg-white text-purple-500  rounded-full "
                  aria-hidden="true"
                />
                <span className="max-sm:sr-only">New Invoice</span>
              </Button>
            </SheetTrigger>
            <SheetContent className=" w-full !max-w-xl ">
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
              </SheetHeader>

              <ScrollArea className="h-[80%]  rounded-md border">
                <DynamicForm
                  form={form}
                  onSubmit={handleSubmit}
                  formFields={FormFields}
                  id="login-form"
                  className="grid grid-cols-12  "
                />
              </ScrollArea>

              <SheetFooter>
                <SheetClose className=" flex justify-end gap-4">
                  <Button type="submit" variant="secondary">
                    Cancle
                  </Button>
                  <Button type="submit" form="login-form">
                    Save changes
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </main>
    </section>
  );
};

export default Invoice;
