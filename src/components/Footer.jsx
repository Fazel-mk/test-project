import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footerLinks">
        <div className="footer-cols">
          <div className="col1">
            <div className="footerTitrs">تاجران فولاد افلاک</div>
            <a className="footerLink" href="#">
              درباره تاجران فولاد
            </a>
            <a className="footerLink" href="#">
              اخبار تاجران فولاد
            </a>
            <a className="footerLink" href="#">
              ویدیو و پادکست ها
            </a>
          </div>
          <div className="col2">
            <div className="footerTitrs">دسترسی سریع</div>
            <a className="footerLink" href="#">
              قیمت اهن
            </a>
            <a className="footerLink" href="#">
              قیمت میلگرد
            </a>
            <a className="footerLink" href="#">
              قیمت میلگرد
            </a>
            <a className="footerLink" href="#">
              قیمت میلگرد
            </a>
            <a className="footerLink" href="#">
              قیمت میلگرد
            </a>
          </div>
          <div className="col3">
            <div className="footerTitrs">داستان ما</div>
            <p className="ourStory">
              ما خیلی خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی
              خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی
              خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی
              خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی خوبیمما خیلی
              خوبیم
            </p>
          </div>
          <div className="col4">
            <div className="footerTitrs">
              ما را در شبکه های اجتماعی دنبال کنید
            </div>
            <div className="Social-i"></div>
          </div>
        </div>
      </div>
      <div className="footerCustomerClub"></div>
    </div>
  );
};
export default Footer;
