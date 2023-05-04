import scss from "./Card.module.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className={scss.Card}>
      <div className={scss.wrapper}>
        <div className={scss.wrapperData}>
          <div>
            <Link
              to={
                "https://www.scopus.com/home.uri?zone=header&origin=AuthorNamesList"
              }
              target="_blank"
            >
              <img
                src="https://camo.githubusercontent.com/ec1c790ef8fcb75b37bccd96b0f51869dc2be534/68747470733a2f2f7777772e6665722e756e697a672e68722f5f7075622f7468656d65735f7374617469632f666572323031362f64656661756c742f696d672f73636f7075732d69636f6e2e706e67"
                alt="scopus"
              />
            </Link>
            <h2>
              <span>Creator: </span>
              {props.creator}
            </h2>
          </div>
          <p>
            <span>Activity: </span>
            {props.title}
          </p>
          <p>
            <span>University: </span>
            {props.university}
          </p>
          <p>
            <span>City: </span>
            {props.city}
          </p>
          <p>
            <span>Country: </span>
            {props.country}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
