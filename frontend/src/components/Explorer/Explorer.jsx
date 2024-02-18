import "../../styles/Explorer.css";

export default function Explorer(props) {
  return (
    <div className="container">
      <div className="text">Explore the {props.shoe.name} Men's Shoes</div>
      <img src={props.shoe.explorationimg[0]} />
      <div className="text">
        <div>{props.shoe.benefits[0]}</div>
      </div>
      <img src={props.shoe.explorationimg[1]} />
      <div className="text">
        <div>{props.shoe.benefits[1]}</div>
      </div>
      <img src={props.shoe.explorationimg[2]} />
      <div className="text bottom">
        <div>{props.shoe.benefits[2]}</div>
      </div>
    </div>
  );
}
