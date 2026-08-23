import { useState } from "react";

export default function useRegistrationFormValidation() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
  });

  const validateField = (field, value) => {
    let errorMsg = "";

    switch (field) {
      case "name":
        if (value.length > 0 && (value.length < 1 || value.length > 10)) {
          errorMsg = "10자 이내로 입력해주세요";
        }
        break;

      case "description":
        if (value.length > 0 && (value.length < 10 || value.length > 100)) {
          errorMsg = "10자 이상 입력해주세요";
        }
        break;

      case "price":
        if (value !== "" && isNaN(value)) {
          errorMsg = "숫자로 입력해주세요";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleNameChange = (e) => {
    const val = e.target.value;
    setName(val);
    validateField("name", val);
  };

  const handleDescriptionChange = (e) => {
    const val = e.target.value;
    setDescription(val);
    validateField("description", val);
  };

  const handlePriceChange = (e) => {
    const val = e.target.value;
    setPrice(val);
    validateField("price", val);
  };

  const isFormValid =
    name.trim() !== "" &&
    description.trim() !== "" &&
    price !== "" &&
    !errors.name &&
    !errors.description &&
    !errors.price;

  return {
    name,
    description,
    price,
    errors,
    handleNameChange,
    handleDescriptionChange,
    handlePriceChange,
    isFormValid,
  };
}