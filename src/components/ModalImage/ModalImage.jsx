import React from "react";
import "./ModalImage.css";

const ModalImage = ({ imageSource, setIsShowModal }) => {
  return (
    <div className="modal-container" onBlur={() => setIsShowModal(false)}>
      <span onClick={() => setIsShowModal(false)}>[X]</span>
      <img src={imageSource} alt="" />
    </div>
  );
};

export default ModalImage;
