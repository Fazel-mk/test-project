import React from "react";
import jsonData from "../datas/Articles.json";
import "./Outro.css";

const Outro = () => {
  const items = jsonData["items"];
  return (
    <div className="Outro">
      <div className="Outro-cardContent">
        <div className="Outro-cardText">
          <div className="Outrotitle">شرکت فولاد تاجر</div>
          <p className="OutroCardDetails">
            مرکز آهن با نام تجاری آهن سجاد مهر سپاهان فعالیت خود را در زمینه
            خرید فروش آهن آلات با ۳۰ سال سابقه و با تلاش بی وقفه و سرلوحه قرار
            دادن شعار صداقت در عملکرد و خدمت به مشتریان آغاز کرده. تلاش میشود
            همگام با گسترش و توسعه آهن آلات و پروژه های عظیم ملی در سراسر کشور
            سهمی در پیشبرد اهداف صنعهر سپاهان فعالیت خود را در زمینه خرید فروش
            آهن آلات با ۳۰ سال سابقه و با تلاش بی وقفه و سرلوحه قرار دادن شعار
            صداقت در عملکرد و
          </p>
        </div>
      </div>

      <div className="trophies">
        <div className="trophy1">
          <img className="trophy1" src="./trophy.png" alt="" />
        </div>
        <div className="trophy2">
          <img className="trophy2" src="./trophy.png" alt="" />
        </div>
        <div className="trophy3">
          <img className="trophy3" src="./trophy.png" alt="" />
        </div>
        <div className="trophy4">
          <img className="trophy4" src="./trophy.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Outro;
