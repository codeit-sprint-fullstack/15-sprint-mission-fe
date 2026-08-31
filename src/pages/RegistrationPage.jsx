import NavBar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ic_X from "@/assets/registration/ic_X.svg";
import RegistrationInput from "@/components/registrationPageComponents/RegistrationInput";

import useRegistrationFormValidation from "@/hooks/useRegistrationFormValidation";
import useProductRegistration from "@/hooks/useProductRegistration";
import useTags from "@/hooks/useTags";

export default function RegistrationPage() {
  const {
    name,
    description,
    price,
    errors,
    handleNameChange,
    handleDescriptionChange,
    handlePriceChange,
    isFormValid,
  } = useRegistrationFormValidation();

  const {
    tags,
    tagInput,
    tagError,
    hasTagError,
    handleTagInputChange,
    handleTagKeyDown,
    removeTag,
  } = useTags();

  const { registerProduct, isLoading } = useProductRegistration();
  const isSubmitEnabled = isFormValid && !hasTagError && !isLoading;


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isSubmitEnabled) return;
    await registerProduct({ name, description, price, tags });
  };

  return (
    <>
      <NavBar />

      <main className="w-full flex justify-center px-4 py-10 flex-1">
        <div className="w-full max-w-[344px] md:max-w-[696px] lg:max-w-[1200px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-[20px] font-bold text-[#1F2937] leading-[32px]">
              상품 등록하기
            </h1>
            <button
              type="submit"
              form="product-form"
              disabled={!isSubmitEnabled}
              className={`font-semibold text-[16px] px-[23px] py-3 rounded-[8px] transition ${
                isSubmitEnabled
                  ? "bg-[#3692FF] hover:bg-blue-600 text-white cursor-pointer"
                  : "bg-[#9CA3AF] text-[#F3F4F6] cursor-not-allowed"
              }`}
            >
              {isLoading ? "등록 중..." : "등록"}
            </button>
          </div>

          <form id="product-form" onSubmit={handleSubmit}>
            <RegistrationInput
              label="상품명"
              placeholder="상품명을 입력해주세요"
              value={name}
              onChange={handleNameChange}
              error={errors.name}
            />

            <RegistrationInput
              label="상품 소개"
              placeholder="상품 소개를 입력해주세요"
              value={description}
              onChange={handleDescriptionChange}
              error={errors.description}
              isTextarea={true}
            />

            <RegistrationInput
              label="판매가격"
              type="text"
              placeholder="판매 가격을 입력해주세요"
              value={price}
              onChange={handlePriceChange}
              error={errors.price}
            />

            <div className="flex flex-col gap-2 mb-6">
              <RegistrationInput
                label="태그"
                placeholder="태그를 입력해주세요"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleTagKeyDown}
                error={tagError}
              />

              <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 bg-[#F3F4F6] text-gray-700 text-sm px-3 py-1.5 rounded-full"
                  >
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="rounded-full flex items-center justify-center text-[16px] text-[#1F2937] cursor-pointer"
                    >
                      <img src={ic_X} alt="태그 삭제" className="w-6 h-6" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}
