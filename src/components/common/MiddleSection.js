import "./MiddleSection.css";
import BurgerItem from "../BurgerItem";

const MiddleSection = (props) => {
  return (
    <section className="section-products">
      <BurgerItem
        img={props.items[0].img}
        title={props.items[0].burgerName}
        calorage={props.items[0].calorage}
      />
      <BurgerItem
        img={props.items[1].img}
        title={props.items[1].burgerName}
        calorage={props.items[1].calorage}
      />
      <BurgerItem
        img={props.items[2].img}
        title={props.items[2].burgerName}
        calorage={props.items[2].calorage}
      />
    </section>
  );
};

export default MiddleSection;
