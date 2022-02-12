
import { RequestHandler  } from 'express';
import prepareProductsList from '../src/modules/products';
const path = require('path');
/**
 * GET /
 * @param req
 * @param res
 * @param next
 */
const reqGet: RequestHandler = async function get(req, res, next) {


    const productLayers = [
        {
            title: 'Red pants',
            description: 'Red pants are highly addictive, and made out of awesome stuff only!',
        },
        {
            title: 'Red pants from manufacturor title',
            tags: ['red', 'pants', 'awesome'],
            images: [{ src: 'https://picsum.photos/200' }, { src: 'https://picsum.photos/350' }]
        },
        {
            title: 'Blue pants2',
            description: 'Test Blue Pants',
        },
        {
            title: 'Blue pants2 from manufacturor2',
            tags: ['Blue', 'pants2', 'awesome2'],
            images: [{ src: 'https://picsum.photos/201' }, { src: 'https://picsum.photos/351' }]
        }

    ];





     function prepareProductsDetails(productLayers,productsIndex) {
         let productCount = 0;
          for(let key in productLayers){
              let product = productLayers[+key];
              let product2 = productLayers[+key+1];
             if(product.description){
                 if(productCount == productsIndex ){
                     productCount++;
                     return  product =  {...product2,...product};
                 }else{
                     productCount++;
                 }
             }
         }
     }


    try {

            if(req.path == '/products') {
                res.json(productLayers);
            }
            else if(req.path.includes('/productDetails')){
                const productsIndex = req.path.split('/').pop();
               const product =  prepareProductsDetails(productLayers,productsIndex);

                res.render('product',{product});
            }
            else{
                const  products =  prepareProductsList(productLayers);
                res.render('index',{products});
            }


    } catch (err) {
        console.log('err', err);
        next(err);
    }
}

export default reqGet;