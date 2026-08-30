import { useState } from 'react';
import { useNavigate } from 'react-router';
import { nanoid } from 'nanoid';
import iconX from '../../../assets/ic_X.png'
import createProduct from '../../../apis/createProduct';
import style from './RegisterBody.module.css';

function Input({ children, name, value, placeholder, onChange, onKeyDown }) {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        className={`${style.input} ${style[name]}`}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </>
  );
}

function Tags({ children, onClick }) {
  return (
    <span className={style.tag} onClick={onClick}>
      #{children} <img src={iconX} className={iconX} alt="엑스버튼"/>
    </span>
  );
}

export function RegisterBody() {
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    tags: '',
  });
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleTagInputKeyDown = (event) => {
    event.preventDefault();
    if (event.key !== 'Enter' || event.nativeEvent.isComposing) return;
    const id = nanoid();
    const { name, value: text } = event.target;
    setTags((prev) => [...prev, { id, text }]);
    setValues((prev) => ({ ...prev, [name]: '' }));
    return tags;
  };
  const handleDelete = (targetId) => {
    setTags((prev) => prev.filter((tag) => targetId !== tag.id));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const submitBody = { ...values, tags: tags.map(({ text }) => text) };

    console.log(submitBody);
    try {
      const res = await createProduct(submitBody);
      const data = await res.json();
      navigate('/', { replace: true });
      return data;
    } catch (error) {
      console.error(error.messsage);
    }
  }

  return (
    <form onSubmit={(event) => handleSubmit(event)} className={style.form}>
      <div className={style.upper}>
        <h1>상품 등록하기</h1>
        <button>등록</button>
      </div>
      <Input
        name="name"
        value={values.name}
        placeholder="상품명을 입력해주세요"
        onChange={handleInputChange}
      >
        상품명
      </Input>
      <Input
        name="description"
        value={values.description}
        placeholder="상품 소개를 입력해주세요"
        onChange={handleInputChange}
      >
        상품 소개
      </Input>
      <Input
        name="price"
        value={values.price}
        placeholder="판매 가격을 입력해주세요"
        onChange={handleInputChange}
      >
        판매가격
      </Input>
      <Input
        name="tags"
        value={values.tags}
        placeholder="태그를 입력해주세요"
        onChange={handleInputChange}
        onKeyDown={handleTagInputKeyDown}
      >
        태그
      </Input>
      <div className={style.tags}>
      {tags.map((tag) => {
        return (
          <Tags
            key={tag.id}
            children={tag.text}
            onClick={() => handleDelete(tag.id)}
          />
        );
      })}
      </div>
    </form>
  );
}
