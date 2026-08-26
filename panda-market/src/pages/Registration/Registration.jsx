import { Footer } from '../../Components/Footer/Footer';
import { Nav } from '../../Components/Nav/Nav';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createPosts } from '../../api/posts';
import { useValidation } from '../../hook/useValidation';
import './Registration.css';
import iconX from '../../assets/ic_X.svg';

export const Registration = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]); //-> 태그 내용을 저장하는 방식으로 변경

  const navigate = useNavigate();
  const { errors, isOkay } = useValidation({
    itemName,
    description,
    price,
    tags,
    tagInput,
  });

  //Enter키 누르면 태그 저장
  const handleTagkeydown = (event) => {
    if (event.nativeEvent.isComposing) {
    return; 
  }
  //한글 조합시 글자가 중복되서 엔터가 되는 걸 막음

    if (event.key === 'Enter') {
      const trimTag = tagInput.trim();

      if (trimTag === '') return;
      if (trimTag.length > 5) return;
      if (tags.includes(trimTag)) {
        setTagInput('');
        return;
      }

      setTags((prev) => [...prev, trimTag]);
      setTagInput('');
    }
  };

  //tag 지우기
  const handleDeleteTag = (removeTag) => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== removeTag));
  };

  const handleRegister = async () => {
    try {
      const newItem = await createPosts({
        name: itemName,
        description,
        price: Number(price),
        tags,
      });

      //등록 성공 후 상세페이지로 이동 -> useNavigate()
      navigate(`/items/${newItem.id}`, { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };
  //입력 칸들이 다 채워져 있을 경우 : 비교 연산자를 사용하여 true/false를 담는다
  // const isValid = itemName && description && price && tags;

  return (
    <>
      <Nav />
      <section className="registerWrap">
        <div className="registerContainer">
          <div className="Header">
            <h2>상품 등록하기</h2>
            <button
              className="registerBtn"
              onClick={handleRegister}
              disabled={!isOkay}
            >
              등록
            </button>
          </div>
          <div className="registerForm">
            <div className="itemName">상품명</div>
            <input
              id="itemName"
              className={errors.itemName ? 'notOkay' : ''}
              type="text"
              placeholder="상품명을 입력해주세요"
              value={itemName}
              onChange={(event) => setItemName(event.target.value)}
            />
            {errors.itemName && (
              <p className="errorMessage">{errors.itemName}</p>
            )}
            <div className="description">상품 소개</div>
            <textarea
              id="description"
              className={errors.description ? 'notOkay' : ''}
              placeholder="상품 소개를 입력해주세요"
              maxLength={100}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
            {errors.description && (
              <p className="errorMessage">{errors.description}</p>
            )}
            <div className="price">판매가격</div>
            <input
              id="price"
              className={errors.price ? 'notOkay' : ''}
              type="text"
              placeholder="판매 가격을 입력해주세요"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            {errors.price && <p className="errorMessage">{errors.price}</p>}
            <div className="tag">태그</div>
            <div className="tagChipwrapper">
              <input
                id="tag"
                className={errors.tags ? 'notOkay' : ''}
                type="text"
                placeholder="태그를 입력해주세요"
                value={tagInput}
                onChange={(event) => setTagInput(event.target.value)}
                onKeyDown={handleTagkeydown}
              />
              {errors.tags && <p className="errorMessage">{errors.tags}</p>}
              {tags.map((tag) => (
                <span key={tag} className="tagChip">
                  {`#${tag}`}
                  <img src={iconX} onClick={() => handleDeleteTag(tag)}></img>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
