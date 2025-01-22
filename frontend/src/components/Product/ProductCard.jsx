import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  decCartCounter,
  incCartCounter,
} from "./../../redux/slices/cartCounter";
import { decProductCount, incProductCount } from "./../../redux/slices/product";

const ProductCard = ({ id, count, title, description, price, image }) => {
  const IMG_URL = process.env.REACT_APP_IMAGES_API;
  // console.log(image)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerAdd = (id) => {
    dispatch(incCartCounter());
    dispatch(incProductCount(id));
    console.log(id)
  };

  const handlerRemove = (id) => {
    dispatch(decCartCounter());
    dispatch(decProductCount(id));
    console.log(id)
  };

  const gotoDetails = (id) => {
    navigate(id);
    // console.log(id)
  };

  return (
    <>
      <div className="card h-100">
        <img
          src={`${IMG_URL}${image}`}
          className="card-img-top"
          alt="..."
          style={{ height: "300px", cursor: "pointer" }}
          onClick={() => gotoDetails(id)}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
          <div className="d-flex justify-content-evenly">
            {/* <button onClick={handlerAdd} className={`btn btn-primary ${count ? '' :`w-100`}`}> */}
            <button
              onClick={() => handlerAdd(id)}
              className="btn btn-purple"
              style={{ width: count ? "" : "100%" }}
            >
              Add
            </button>
            {count ? (
              <>
                <span>{count}</span>

                {/* <DynamicCounter /> */}

                <button
                  onClick={() => handlerRemove(id)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
