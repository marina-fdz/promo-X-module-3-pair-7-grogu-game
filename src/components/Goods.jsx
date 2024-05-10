

function Goods(props) {
  return (
    <section className="goods-container">
        <div className="goods-item">{props.goodsData[0]}</div>
        <div className="goods-item">{props.goodsData[1]}</div>
        <div className="goods-item">{props.goodsData[2]}</div>
      </section>
  )
}

export default Goods