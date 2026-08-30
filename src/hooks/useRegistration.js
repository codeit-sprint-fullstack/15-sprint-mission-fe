import { useState } from "react";

export function useRegistration({ name, description, price, tags }) {
  const [error, setError] = useState({});

  const validate = () => {
    const nextError = {
      name: "",
      description: "",
      price: "",
      tags: "",
    };

    if (name.length > 10) {
      nextError.name = "10자 이내로 입력하세요";
    }

    if (description.length < 10 || description.length > 100) {
      nextError.description = "100자 이내로 입력하세요";
    }

    if (typeof price !== Number) {
      nextError.price = "숫자로 입력해주세요";
    }

    if (tags[0].length > 5) {
      nextError.tags = "5글자 이내로 입력해주세요";
    }

    setError(nextError);
  };

  return {
    error,
    validate,
  };
}
// 자 생각을 해보자
// 들어가려면 일단 name, description, price, tag 다 검사 해야함
// 그럼 다 받으면 되겠지?
// 거기서 이제 검사를 해.
// 근데 각각 입력창에 해당되는 걸 보여줘야 하지?
// 그러면 handleChange 각각 돌거니까 거기에 보여줘야 하는거 아닐까!!
