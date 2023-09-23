const getProductsImageArray = (item, index, fileName = 'details') => `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item[fileName][index]}`;
export default getProductsImageArray;
