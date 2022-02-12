Yes, I'm redoing a test. I visualized this scenario with express. please do npm to get modules.
You can use scripts in package json to run it. 
When you run npm run dev, stedger api is running on localhost:3000. 
There are two pages product list and product detail. 
There is also a service that gives the products in the products link. 
Also, the gesture package has been added to test the function.

stdgr needs products api, They take customer or inline products data and merged two form for list and product details. use express hbs engine and json data api
```
const productLayers = [
  {
    title: '------------',
    description: '--------------------',
  },
  {
    title: '------------------------',
    tags: ['--------', '-------', '---------'],
    images: [{ src: '----------' }, { src: '--------------' }]
  }
]

const output = {
  title: '---------------',
  description: '------------------------!',
  tags: ['----------', '---------', '----------'],
  images: [{ src: '------------' }, { src: '---------' }]
}
```

