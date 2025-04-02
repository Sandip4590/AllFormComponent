import FormDatePicker from "@/components/ui/form/formDatePicker";
import FormFieldArray from "@/components/ui/form/formFielsArry";
import FormInput from "@/components/ui/form/formInput";
import FormSelect from "@/components/ui/form/formSelect";
import TextArea from "@/components/ui/form/textArea";



const formFields =[
  {
    component: FormInput,
    name: "Bill_From.street_address",
    label: "Street Address",
    placeholder: "19 Union Terrace",
    rules: {
      required: {
        value: true,
        message: "Street Address is required",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormInput,
    name: "Bill_From.city",
    label: "city",
    placeholder: "London",
    rules: {
      required: {
        value: true,
        message: "City is required",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "Bill_From.Post_code",
    label: "Post Code",
    placeholder: "E1 3EZ",
    rules: {
      required: {
        value: true,
        message: "Post Code is required",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "Bill_From.Country",
    label: "Country",
    placeholder: "United Kingdom",
    rules: {
      required: {
        value: true,
        message: "Country is required",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "Bill_To.client_name",
    label: "Client's Name",
    placeholder: "Alex Grim",
    rules: {
      required: {
        value: true,
        message: "Client's Name is required",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormInput,
    name: "Bill_To.client_email",
    label: "Client's Email",
    placeholder: "alexgrim@mail.com",
    rules: {
      required: {
        value: true,
        message: "Email is required",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormInput,
    name: "Bill_To.billing_street_address",
    label: "Street Address",
    placeholder: "84 Church Way",
    rules: {
      required: {
        value: true,
        message: "Street Address is required",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormInput,
    name: "Bill_To.City",
    label: "City",
    placeholder: "Bradford",
    rules: {
      required: {
        value: true,
        message: "City is required",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "Bill_To.post_code",
    label: "Post Code",
    placeholder: "BD1 9PB",
    rules: {
      required: {
        value: true,
        message: "Post Code is required",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormInput,
    name: "Bill_To.country",
    label: "Country",
    placeholder: "United Kingdom",
    rules: {
      required: {
        value: true,
        message: "Country is required",
      },
    },
    className: "col-span-4",
  },
  {
    component: FormDatePicker,
    name: "Bill_To.invoice_date",
    label: "Invoice Date",
    placeholder: "21 Aug 2021",
    rules: {
      required: {
        value: true,
        message: "Invoice Date is required",
      },
    },
    className: "col-span-6",
  },
  {
    component: FormSelect,
    name: "Bill_To.payment_terms",
    label: "Payment Terms",
    placeholder: "Select payment term",
    options: [
      { value: "net_7_days", text: "Net 7 Days" },
      { value: "net_14_days", text: "Net 14 Days" },
      { value: "net_30_days", text: "Net 30 Days" },
    ],
    rules: {
      required: {
        value: true,
        message: "Payment Terms are required",
      },
    },
    className: "col-span-6 bg-red-500",
  },
  {
    component: TextArea,
    name: "Bill_To.project_description",
    label: "Project Description",
    placeholder: "Graphic Design",
    rules: {
      required: {
        value: true,
        message: "Project Description is required",
      },
    },
    className: "col-span-full",
  },
  {
    component: FormFieldArray,
    name: "Bill_To.productItems",
    className:"grid grid-cols-12 items-end gap-2 ",
    fieldArray: [
      {
        component: FormInput,
        name: "itemName",
        label: "Item Name",
        placeholder: "Item Name",
        rules: {
          required: {
            value: true,
            message: "Item Name is mendetory",
          },
        },
        className: "col-span-4",
      },
      {
        component: FormInput,
        name: "quantity",
        label: "Qty",
        placeholder: "Quantity",
        rules: {
          required: {
            value: true,
            message: "Quantity is mendetory",
          },
        },
        className: "col-span-4",
      },
      {
        component: FormInput,
        name: "price",
        label: "Price",
        placeholder: "Price",
        rules: {
          required: {
            value: true,
            message: "Price is mendetory",
          },
        },
        className: "col-span-3",
      },
    ],
  },
];

export default formFields;
