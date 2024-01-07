import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import jsonData from "../datas/Chart.json";

import "./Price.css";
const Price = () => {
  return (
    <div className="Price">
      <div className="Tables">
        <div className="filtering">
          <div className="filterHeader">دسترسی سریع</div>
          <ul className="filterContent">
            <li className="content head">دسته بندی</li>
            <li className="content top">همه دسته بندی‌ها</li>
            <li className="content ">قیمت میلگرد</li>
            <li className="content top secondary">قیمت ورق فولادی</li>
            <li className="content ">قیمت تیراهن</li>
            <li className="content ">قیمت لوله</li>
            <li className="content last">قیمت میلگرد</li>
          </ul>
        </div>
        <div className="tableContent">
          <div className="tableHeader">قیمت میلگرد</div>
          <div className="tableView table-responsive">
            <table className="table table-striped table-borderless ">
              <thead>
                <tr>
                  <th scope="col">سایز</th>
                  <th scope="col">محل بارگیری</th>
                  <th scope="col">حالت</th>
                  <th scope="col">کارخانه</th>
                  <th scope="col">قیمت تومان (بدون ارزش افزوده)</th>
                  <th scope="col">ارزش افزوده (۹٪) تومان</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">۲۵</th>
                  <td>کارخانه</td>
                  <td>شاخه ۱۲ متری</td>
                  <td>میلگرد ذوب اهن</td>
                  <td>۱۵،۱۴۰</td>
                  <td>
                    ۱.۳۶۳
                    <img src="./chart.svg" alt="" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">۲۵</th>
                  <td>کارخانه</td>
                  <td>شاخه ۱۲ متری</td>
                  <td>میلگرد ذوب اهن</td>
                  <td>۱۵،۱۴۰</td>
                  <td>
                    ۱.۳۶۳
                    <img src="./chart.svg" alt="" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">۲۵</th>
                  <td>کارخانه</td>
                  <td>شاخه ۱۲ متری</td>
                  <td>میلگرد ذوب اهن</td>
                  <td>۱۵،۱۴۰</td>
                  <td>
                    ۱.۳۶۳
                    <img src="./chart.svg" alt="" />
                  </td>
                </tr>
                <tr>
                  <th scope="row">۲۵</th>
                  <td>کارخانه</td>
                  <td>شاخه ۱۲ متری</td>
                  <td>میلگرد ذوب اهن</td>
                  <td>۱۵،۱۴۰</td>
                  <td>
                    ۱.۳۶۳
                    <img src="./chart.svg" alt="" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="charts">
          <div className="chartTitle">
            آخرین تغییرلت میلگرد ۲۵ ذوب اهن اصفهان
          </div>
          <div className="chartsView">
            <div className="chart">
              {jsonData.map((data) => (
                <div className="chart-line" key={data.id}>
                  <Line
                    data={{
                      labels: jsonData.map((data) => data.id),
                      datasets: [
                        {
                          label: "A",
                          data: jsonData.map((data) => data.valuex),
                          backgroundColor: "#790000",
                          borderColor: "#790000",
                        },
                        {
                          label: "B",
                          data: jsonData.map((data) => data.valuey),
                          backgroundColor: "#D7B3B3",
                          borderColor: "#D7B3B3",
                        },
                      ],
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar"></div>
    </div>
  );
};

export default Price;
