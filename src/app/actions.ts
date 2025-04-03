export const onSubmit = async (value, reset) => {
  try {
    console.log(value);

    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    console.log("Data Fatch SuccessFully")
    reset();
   
  } catch (error) {
    console.error("Error:", error);
  }
};
