import CartPage from "../components/CartPage/CartPage";

function CartWrapper(props) {
  let { allData, cartData } = props;
  let cartList = cartData.map((e) => {
    let result = allData.find((e1) => e.productID2 === e1.id);
    return result;
  });
  function mergeArrayObjects(arr1, arr2) {
    let start = 0;
    let merge = [];
    while (start < arr1.length) {
      if (arr1[start].id === arr2[start].productID2) {
        //pushing the merged objects into array
        merge.push({ ...arr1[start], ...arr2[start] });
      }
      //incrementing start value
      start = start + 1;
    }
    return merge;
  }
  let cartMergeData = mergeArrayObjects(cartData, cartList);
  return (
    <>
      <CartPage cartList={cartMergeData} />
    </>
  );
}
export default CartWrapper;
