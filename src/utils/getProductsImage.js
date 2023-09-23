export const getProductsImage = (item, fileName = 'photo') => `https://little-manchester.pockethost.io/api/files/${item.collectionId}/${item.id}/${item[fileName]}`;
