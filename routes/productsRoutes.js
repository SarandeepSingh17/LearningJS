const router = require('express').Router();
const crypto = require('crypto')
const products = [
    {
        id: "54054186-1b44-4b3e-a77f-f16eaa77cad4",
        name:"Laptop",
        price:"50000"
    },
    {
        id: "54054186-1b44-4b3e-a77f-f16eaa77cad2",
        name:"keyboard",
        price:"5000"
    }
]
router.post('/products',(request,response)=>{
    const{ name, price} = request.body
    if(!name)
    {
        return response.status(422).json({message:'Name is required'});
    }
    const id = crypto.randomUUID();
    products.push({id, name, price});

    response.status(201).json({message:'Successfully Created',id})
})
router.get('/products',(request,response)=>{
response.json(products);})
router.get('/products/:id',(request,response)=>{
    const product = products.find(product => product.id==request.params.id)
    if(!product)
    {
        return response.status(404).json({message:"Not found"});
    }
    response.status(200).json(product);
})
router.put('/products/:id',(request, response)=>{
    const product = products.find(product => product.id==request.params.id)
    if(!product)
    {
        return response.status(404).json({message:"Not found"});
    }

    const{ name, price} = request.body

    if(name)
    {
        product.name = name;
    }
    if(price)
    {
        product.price = price;
    }

    response.status(200).json({message:'Product Updated Successfully'});
})

router.delete('/products/:id',(request, response)=>{
    const productIndex = products.findIndex(product => product.id==request.params.id)
    if(productIndex==-1)
    {
        return response.sendStatus(404).json({message:'Product not found'})
    }
    products.splice(productIndex,1);
    response.status(200).json({message:'Product Deleted Successfully'})

})

module.exports = router;