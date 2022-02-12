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

