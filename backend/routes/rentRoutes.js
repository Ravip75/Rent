import express from 'express';
import Rent from '../models/rentModel';

const router=express.Router();


router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found.' });
    }
  });
router.put('/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await Rent.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.rentPrice = req.body.rentPrice;
      product.manufactureDate = req.body.manufactureDate;
      product.actualPrice = req.body.actualPrice;
      const updatedProduct = await product.save();
      if (updatedProduct) {
        return res
          .status(200)
          .send({ message: 'Product Updated', data: updatedProduct });
      }
    }
    return res.status(500).send({ message: ' Error in Updating Product.' });
  });
router.post("/",async(req,res)=>{
    const rent=new Rent({
        name: req.body.name,
        rentPrice: req.body.rentPrice,
        manufactureDate: req.body.manufactureDate,
        actualPrice: req.body.actualPrice,
    });
    const newRent=await rent.save();
    if(newRent){
        return res.status(201).send({message: "New Product Created", data: newProduct});
    }
    return res.status(500).send({message: "Error in creating product"});
})

router.delete('/:id', async (req, res) => {
    const deletedProduct = await Rent.findById(req.params.id);
    if (deletedProduct) {
      await deletedProduct.remove();
      res.send({ message: 'Product Deleted' });
    } else {
      res.send('Error in Deletion.');
    }
  });

export default router;