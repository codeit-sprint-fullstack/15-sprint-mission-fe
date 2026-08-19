import express from 'express';
import { nanoid } from 'nanoid';

export const productsRouter = express.Router();

let data = [
  {
    id: 1,
    name: 'LG V60 ThinQ 5G 스마트폰',
    description: '2020년 출시된 LG 마지막 스마트폰',
    price: 300000,
    tag: ['LG', '스마트폰'],
    createdAt: 202608190900,
    updatedAt: 202608190905,
  },
  {
    id: 2,
    name: '삼성 갤럭시 북4 프로',
    description: '14인치 OLED 디스플레이를 탑재한 삼성 노트북',
    price: 1890000,
    tag: ['삼성', '노트북'],
    createdAt: 202608190910,
    updatedAt: 202608190915,
  },
  {
    id: 3,
    name: '애플 에어팟 프로 2세대',
    description: '액티브 노이즈 캔슬링을 지원하는 무선 이어폰',
    price: 359000,
    tag: ['애플', '이어폰'],
    createdAt: 202608190920,
    updatedAt: 202608190925,
  },
  {
    id: 4,
    name: '다이슨 V15 디텍트',
    description: '레이저로 먼지를 감지하는 무선 청소기',
    price: 990000,
    tag: ['다이슨', '가전'],
    createdAt: 202608190930,
    updatedAt: 202608190935,
  },
  {
    id: 5,
    name: '로지텍 MX 마스터 3S',
    description: '조용한 클릭감을 강조한 무선 마우스',
    price: 129000,
    tag: ['로지텍', '주변기기'],
    createdAt: 202608190940,
    updatedAt: 202608190945,
  },
];

productsRouter.get('/', (req, res) => {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(200).json({ data, count: data.length });
  }

  const lowerKeyword = keyword.toLowerCase();
  const numericKeyword = Number(keyword);

  const result = data.filter((list) => {
    const isId = !isNaN(numericKeyword) && list.id === numericKeyword;
    const isPrice = !isNaN(numericKeyword) && list.price === numericKeyword;
    const isName = list.name.toLowerCase().includes(lowerKeyword);
    const isDescription = list.description.toLowerCase().includes(lowerKeyword);
    const isTag = list.tag.some((t) => t.toLowerCase().includes(lowerKeyword));
    const isCreatedAt = String(list.createdAt).includes(keyword);

    return isId || isName || isDescription || isPrice || isTag || isCreatedAt;
  });

  res.status(200).json({ result, count: result.length });
});

productsRouter.post('/', (req, res) => {
  const { name, description, price, tag } = req.body ?? {};

  const newProduct = {
    id: nanoid(),
    name,
    description,
    price,
    tag,
    createdAt: Date.now(),
  };

  data.push(newProduct);

  res.status(201).json({
    data: newProduct,
  });
});

productsRouter.patch('/:productId', (req, res) => {
  const productId = Number(req.params.productId);
  const { name, description, price, tag } = req.body ?? {};
  const target = data.find((list) => list.id === productId);
  if (!target) {
    throw new console.error('일치하는 제품 없음');
  }
  if (name) {
    target.name = name;
  }
  if (description) {
    target.description = description;
  }
  if (price) {
    target.price = price;
  }
  if (tag) {
    target.tag = tag;
  }

  target.updatedAt = Date.now();

  res.status(200).json({
    data: target,
  });
});
