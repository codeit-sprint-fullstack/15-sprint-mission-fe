import express from 'express';
import { Product } from '../models/product.model.js';

export const productsRouter = express.Router();

productsRouter.get('/', async (req, res) => {
  try {
    const { keyword, sort } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const sortOption = sort === 'oldest' ? { createdAt: 1 } : { createdAt: -1 };

    let filter = {};

    if (keyword) {
      const orConditions = [
        { name: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } },
        { tags: { $regex: keyword, $options: 'i' } },
      ];

      if (!isNaN(Number(keyword))) {
        orConditions.push({ price: Number(keyword) });
      }

      const parsedDate = new Date(keyword);
      if (!isNaN(parsedDate.getTime())) {
        const startOfDay = new Date(parsedDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(parsedDate.setHours(23, 59, 59, 999));
        orConditions.push({ createdAt: { $gte: startOfDay, $lte: endOfDay } });
      }

      filter = { $or: orConditions };
    }

    const products = await Product.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    const totalCount = await Product.countDocuments(filter);

    res.json({
      success: true,
      data: products,
      currentPage: page,
      totalPages: Math.ceil(totalCount / limit),
      totalCount,
      message: '제품 목록 불러오기 완료',
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

productsRouter.post('/', async (req, res, next) => {
  const { name, description, price, tags, img } = req.body ?? {};

  const newProduct = new Product({ name, description, price, tags, img });

  await newProduct.save();

  res.status(201).json({
    success: true,
    data: newProduct,
    message: '제품 생성 완료',
  });
});

productsRouter.patch('/:productId', async (req, res) => {
  const productId = req.params.productId;
  const { name, description, price, tags, img } = req.body ?? {};
  const target = Product.findOne({ _id: productId });
  if (!target) {
    throw new console.error('일치하는 제품 없음');
  }

  const update = {};
  if (name) {
    update.name = name;
  }
  if (description) {
    update.description = description;
  }
  if (price) {
    update.price = price;
  }
  if (tags) {
    update.tags = tags;
  }
  if (img) {
    update.img = img;
  }

  const udpatedProduct = await Product.findByIdAndUpdate(productId, update, {
    returnDocument: 'after',
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: udpatedProduct,
    message: '제품 업데이트가 완료',
  });
});

productsRouter.delete('/:productId', async (req, res, next) => {
  const { productId } = req.params;

  const target = await Product.findByIdAndDelete(productId);

  res.status(200).json({
    success: true,
    data: target,
    message: '제품 삭제 완료',
  });
});
