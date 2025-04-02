
import FormFileUpload from "@/components/ui/form/fileupload";
import FormFieldArray from "@/components/ui/form/formFielsArry";
import FormInput from "@/components/ui/form/formInput";



const loginFormFields = [
  {
    component: FormInput,
    name: "cardholder name",
    label: "CARDHOLDER NAME",
    placeholder: "e.g.Jane Appleseed",
    rules: {
      required: {
        value: true,
        message: "Name   is mandatory",
      },
      pattern: {
        // value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Please enter a valid email address",
      },
    },
     className:"col-span-3",
     labelClassName: " text-red-700"
  },
  {
    component: FormInput,
    name: "card number",
    label: "CARD NUMBER",
    placeholder: "e.g. 11234 5678 9123 0000",
    rules: {
      required: {
        value: true,
        message: "Password is mandatory",
      },
      pattern: {
        value:
          /^[0-9]{6}/,
        message: "Wrong input. number only",
      },
    },
     className:"col-span-3 "
  },

  {
    component: FormInput,
    name: "exp. date ",
    label: "EXP. DATE ",
    placeholder: "Enter strong password",
    type: "password",
    rules: {
      required: {
        value: true,
        message: "Password is mandatory",
      },
      pattern: {
        // value:
        //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/,
        message: "Please enter a Valid Password",
      },
    },
     className:" "
  },
  {
    component: FormInput,
    name: "[mm?yy]",
    label: "[MM/YY]",
    placeholder: "Enter strong password",
    type: "password",
    rules: {
      required: {
        value: true,
        message: "Password is mandatory",
      },
      pattern: {
        // value:
          // /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/,
        message: "Please enter a Valid Password",
      },
    },
     className:""
  },
  {
    component: FormInput,
    name: "cvc",
    label: "CVC-",
    placeholder: "Enter strong password",
    type: "password",
    rules: {
      required: {
        value: true,
        message: "Password is mandatory",
      },
      pattern: {
        // value:
          // /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/,
        message: "Please enter a Valid Password",
      },
    },
     className:" "
  },
  {
    component: FormFieldArray,
    name: "productItems",
    className:"grid grid-cols-4 items-end  w-sm gap-4",
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
        className: "w-[100%]",
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
        className: "w-full",
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
        className: "w-full",
      },
    ],
  },
  {
    component: FormFileUpload,
    name: "profile_picture",
    label: "Profile Picture",
    rules: {
      required: {
        value: true,
        message: "Profile picture is required",
      },
    },
    className: "col-span-3",
    labelClassName: "text-blue-700",
  },
  

//   {
//     component: FormSelect,
//     name: "age",
//     label: "Sex",
//     placeholder: "Select gender",
//     options: [
//       {
//         value: "male",
//         text: "Male",
//       },
//       {
//         value: "female",
//         text: "Female",
//       },
//     ],
//     rules: {
//       required: {
//         value: true,
//         message: "Age is mandatory",
//       },
//     },
//     //  className:" "
//   },
//   
    
//   },
//   {
//     component: OTPInput,
//     name: "otp",
//     label: "Enter OTP",
//     placeholder: "Enter the OTP",
//     rules: {
//       required: {
//         value: true,
//         message: "OTP is required",
//       },
//       minLength: {
//         value: 6,
//         message: "OTP must be 6 digits",
//       },
//       maxLength: {
//         value: 6,
//         message: "OTP must be 6 digits",
//       },
//     },
// },

  // {
  //   component: TimePicker,
  //   name: "time",
  //   label: "Select Time",
  //   placeholder: "Choose a time",
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Time is required",
  //     },
  //   },
  // },

  // {
  //   component: ComboBox,
  //   name: "country",
  //   label: "Select Country",
  //   placeholder: "Choose a country",
  //   options: [
  //     { value: "United States", text: "United States" },
  //     { value: "Canada", text: "Canada" },
  //     { value: "United Kingdom", text: "United Kingdom" },
  //     { value: "India", text: "India" },
  //   ],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Country selection is required",
  //     },
  //   },
  //   className:"col-span-2 "
  // },

  

  // {
  //   component: TextArea,
  //   name: "address",
  //   label: "Address",
  //   placeholder: "Enter your permanent address...",
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Address is mandatory",
  //     },
  //     minLength: {
  //       value: 10,
  //       message: "Address must be at least 10 characters long",
  //     },
  //     maxLength: {
  //       value: 200,
  //       message: "Address cannot exceed 200 characters",
  //     },
  //   },
  //    className:"col-span-2"
  // },

  // {
  //   component: FormToggle,
  //   name: "notifications",
  //   label: "Enable Notifications",
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "This field is required",
  //     },
  //   },
  //   className:"col-span-2 "
  // },

  // {
  //   component: FormCheckboxGroup,
  //   name: " Select preferences",
  //   label: "Select Preferences",
  //   options: [
  //     { value: "Email Notifications", text: "Email Notifications" },
  //     { value: "SMS Alerts", text: "SMS Alerts" },
  //     { value: "Push Notifications", text: "Push Notifications" },
  //   ],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "At least one option must be selected",
  //     },
  //   },
    
  // },

  // {
  //   component: FormSlider,
  //   name: "slider",
  //   label: "Slider",
  //   min: 0,
  //   max: 100,
  //   step: 5,
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Slider is required",
  //     },
  //   },
  //    className:"col-span-2 "
  // },
  // {
  //   component: FormRadio,
  //   name: "payment_method",
  //   label: "Select Payment Method",
  //   options: [
  //     { value: "credit_card", text: "Credit Card" },
  //     { value: "paypal", text: "PayPal" },
  //     { value: "bank_transfer", text: "Bank Transfer" },
  //   ],
  //   rules: {
  //     required: {
  //       value: true,
  //       message: "Please select a payment method",
  //     },
  //   },
  //   //  className:"col-span-2 "
  // },
];

export default loginFormFields;
