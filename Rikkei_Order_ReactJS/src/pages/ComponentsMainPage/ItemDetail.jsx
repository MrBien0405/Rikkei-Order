import { useEffect, useState } from "react";
import ItemInformation from "../../components/ItemInformation/ItemInformation";
function ItemDetail(props) {
  let { itemSearchData,handleClickComment } = props;
  // let [itemData, setItemData] = useState();
  // useEffect(() => {
  //   let id = window.location.href.replace("http://localhost:8000/item/", "");
  //   const fetchDataSearch = async () => {
  //     const res = await fetch(`http://localhost:3000/product/${id}`);
  //     const data = await res.json();
  //     setItemData(data.data);
  //   };
  //   fetchDataSearch().catch(console.error);
  // }, []);
  if (!itemSearchData) {
    return <>loading...</>;
  }
  return (
    <>
      <ItemInformation data={itemSearchData[0]} handleClickComment={handleClickComment} />
    </>
  );
}

export default ItemDetail;
