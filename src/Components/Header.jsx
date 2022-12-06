import React from "react";

export const Header = () => {
  const options = [
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/bank-icon-o.svg",
      data: "ACCOUNTS",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/card-icon-o.svg",
      data: "CARDS",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/loan-icon-o.svg",
      data: "LOANS",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/invest-icon-o.svg",
      data: "INVEST",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/insure-icon-o.svg",
      data: "INSURE",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/pay-icon-o.svg",
      data: "PAY",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/offers_maroon.svg",
      data: "OFFERS",
    },
    {
      img: "https://www.icicibank.com/content/dam/icicibank/campus-icon.png",
      data: "CAMPUS POWER",
    },
  ];

  return (
    <>
      <div className="navbar-container">
        <div>
          <a
            class="logo "
            href="https://www.icicibank.com/?ITM=nli_cms_HP_logo_personal_topnavigation"
            target="_self"
          >
            <img
              src="https://internal.talash.net/inthub/public/images/int25yearslogo.jpg"
              alt="ICICI LOGO"
            />
          </a>
        </div>
        <div className="inner-container">
          <img
            src="https://www.icicibank.com/content/dam/icicibank/icici-assets/india.svg"
            alt="INDIA FLAG"
          />
          <div className="flex navbar-login">
            <div>PERSONAL</div>
            <div>LOGIN</div>
          </div>
          <img
            src="https://www.icicibank.com/etc.clientlibs/icicibank/clientlibs/clientlib-base/resources/images/icons/notification-animation.png"
            alt="notification"
          />
        </div>
      </div>
      <div className="navbar-container">
        <div className="input-box">
          <img src="https://icicibanksmartsearch.senseforth.com/ICICI/Images/search-input-blue.svg" />
          <input
            type=" "
            id="search-chatInput"
            class="sf-searchbox"
            autocomplete="off"
            placeholder="Search for Products, Services"
          />
          <img src="https://icicibanksmartsearch.senseforth.com/ICICI/Images/mic.svg" />
        </div>
        <div className="logo-box">
          <img src="https://www.icicibank.com/content/dam/icicibank/india/managed-assets/revamp/imobile.svg" />
          <img src="	https://www.icicibank.com/content/dam/icicibank/india/managed-assets/revamp/digital-banking.svg" />
          <div>HELP & CONTACT</div>
        </div>
      </div>
      <div className="navbar-container options">
        {options.map((ele, index) => {
          return (
            <div key={index}>
              <img src={ele.img} alt={ele.data} />
              <p>{ele.data}</p>
            </div>
          );
        })}
        <div className="apply-link">
          <img src="https://www.icicibank.com/content/dam/icicibank/india/assets/images/header/apply-icon.png" />
          <p>Apply Online</p>
        </div>
      </div>
    </>
  );
};
