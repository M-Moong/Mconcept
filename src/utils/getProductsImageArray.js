const getProductsImageArray = (item, index, fileName = 'details') => `https://little-manchester.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName][index]}`;
export default getProductsImageArray;
