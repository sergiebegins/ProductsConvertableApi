function prepareProductsList(productLayers) {
    return productLayers.filter((product)=>(product.description))
}
module.exports = prepareProductsList;