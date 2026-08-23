import { useState } from "react";

export default function useTags() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [tagError, setTagError] = useState("");

  const handleTagInputChange = (e) => {
    const val = e.target.value;
    setTagInput(val);

    if (val.length > 5) {
      setTagError("5글자 이내로 입력해주세요.");
    } else {
      setTagError("");
    }
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (tagInput.trim().length <= 5 && !tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
        setTagInput("");
        setTagError("");
      }
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const hasTagError = tagInput.trim().length > 5;

  return {
    tags,
    setTags,
    tagInput,
    tagError,
    hasTagError,
    handleTagInputChange,
    handleTagKeyDown,
    removeTag,
  };
}