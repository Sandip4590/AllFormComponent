import FormInput from "@/components/ui/form/formInput";

const RegisterFormFields = [
  {
    component : FormInput,
    name: "First Name",
    label: "CardHolder Name",
    placeholder: "Enter Your First Name",
    rules: {
      required: {
        value: true,
        message: "First_Name is mandatory",
      },
    },
  },
  {
    component : FormInput,
    name: "Last Name",
    label: "Card Name",
    placeholder: "Enter Your Last Name",
    rules: {
      required: {
        value: true,
        message: "Last_Name is mandatory",
      },
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address",
      },
    },
  },
  
];

export default RegisterFormFields;
