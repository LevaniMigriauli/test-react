import "./BurgerItem.css";

const BurgerItem = (props) => {
  return (
    <div>
      <img className="products__img" src={props.img} />
      <h3 className="products__title">{props.title}</h3>
      <p className="products__calorage">{props.calorage}</p>
    </div>
  );
};

export default BurgerItem;
