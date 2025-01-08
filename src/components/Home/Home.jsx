import React from "react";
import infoImg from "../../assets/images/header.svg";


import "./Home.css";

const Home = ({homeRef}) => {
  return (
    <div ref={homeRef} className="container-H">
      <div className="info">
        <h1 className="h1">
          <strong className="span">Սովորի՛ր </strong>
          ծրագրավորում
          <br />
          <strong className="span">Դարձի՛ր </strong>
          պահանջված մասնագետ
        </h1>
        <p className="pp">
          Որակյալ ուսուցում, անվճար պրակտիկա, երաշխավորված աշխատանք։
        </p>
        <div className="header-action">
          <button  className="but-main">
            Սկսե՛լ ուսումը
          </button>
          <a href="#video" className="but-play">
            <i className="far fa-play-circle"></i> Տեսանյութ
          </a>
        </div>
      </div>

      <div>
        <img className="info-img" src={infoImg} alt="infoImg" />
      </div>
    </div>
  );
};

export default Home;
