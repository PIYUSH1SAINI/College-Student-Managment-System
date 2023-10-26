import React from "react";
import BarChart from "./bargraph";

const Dashboard = () => {
  return (
    <div className="dash-main">
      <div className="dash">
        <h1 className="wlcm-message">Welcome Admin !</h1>
        <div className="infodash">
          <div className="studdash">
            <img
              src={require(".././admin-image/Student.png")}
              alt="home"
              height="70rem"
            />
            <div className="num">
              <h2>10,000</h2>
              <h3>Students</h3>
            </div>
          </div>

          <div className="studdash">
            <img
              src={require(".././admin-image/faculty.png")}
              alt="home"
              height="70rem"
            />
            <div className="num">
              <h2>346</h2>
              <h3>Faculties</h3>
            </div>
          </div>

          <div className="studdash">
            <img
              src={require(".././admin-image/department.png")}
              alt="home"
              height="70rem"
            />
            <div className="num">
              <h2>10</h2>
              <h3>Departments</h3>
            </div>
          </div>

          <div className="studdash">
            <img
              src={require(".././admin-image/course.png")}
              alt="home"
              height="70rem"
              width="60rem"
            />
            <div className="num">
              <h2>27</h2>
              <h3>Courses</h3>
            </div>
          </div>
        </div>

        <div className="secondblockdash">
          <div className="left">
            <table>
              <tr>
                <th>ID NO.</th>
                <th>Expense type</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>

              <tr>
                <td>#3261</td>
                <td>Faculty Salary</td>
                <td>Rs.30,00,000</td>
                <td className="paid">Paid</td>
                <td>1/Oct/2023</td>
              </tr>

              <tr>
                <td>#3262</td>
                <td>Exams Fee</td>
                <td>$.50,000</td>
                <td className="due">Due</td>
                <td>7/Oct/2023</td>
              </tr>

              <tr>
                <td>#3263</td>
                <td>Ground Maintenance</td>
                <td>Rs.1,76,000</td>
                <td className="paid">Paid</td>
                <td>1/Oct/2023</td>
              </tr>

              <tr>
                <td>#3264</td>
                <td>Electricity Bill</td>
                <td>Rs.7,21,657</td>
                <td className="paid">Paid</td>
                <td>3/Oct/2023</td>
              </tr>

              <tr>
                <td>#3265</td>
                <td>Water Bill</td>
                <td>Rs.3,21,500</td>
                <td className="due">Due</td>
                <td>7/Oct/2023</td>
              </tr>

              <tr>
                <td>#3266</td>
                <td>Miscellaneous Charges</td>
                <td>Rs.2,78,892</td>
                <td className="paid">Paid</td>
                <td>2/Oct/2023</td>
              </tr>
            </table>
          </div>

          <div className="right">
            <div className="activitydash">
              <h2>Notice Board</h2>
              <ul>
                <li className="listdash">
                  <div className="activitydatedash">
                    <h4>1-Oct-2023</h4>
                    <hr></hr>
                  </div>
                  <ul className="inner-uldash">
                    <li>
                      Regarding university will remain closed on 2 Oct 2023...
                    </li>
                  </ul>
                  <hr></hr>
                </li>

                <li className="listdash">
                  <div className="activitydatedash">
                    <h4>29-Sep-2023</h4>
                    <hr></hr>
                  </div>
                  <ul className="inner-uldash">
                    <li>Notice for LOP evaluation components...</li>
                    <li>Help Desk for goverment scholarship Schemes...</li>
                    <li>North East Zone Fencing, Judo and Karate...</li>
                  </ul>
                  <hr></hr>
                </li>

                <li className="listdash">
                  <div className="activitydatedash">
                    <h4>23-Sep-2023</h4>
                    <hr></hr>
                  </div>
                  <ul className="inner-uldash">
                    <li>Notice of Internal Assesment -1 for CSE...</li>
                  </ul>
                  <hr></hr>
                </li>

                <li className="listdash">
                  <div className="activitydatedash">
                    <h4>22-Sep-2023</h4>
                    <hr></hr>
                  </div>
                  <ul className="inner-uldash">
                    <li>NZIU Lawn Tennis Trials For Men and...</li>
                    <li>VollyBall Trials For Men and Women...</li>
                    <li>Chess Team Trials For Men and Women...</li>
                  </ul>
                  <hr></hr>
                </li>

                <li className="listdash">
                  <div className="activitydatedash">
                    <h4>29-Sep-2023</h4>
                    <hr></hr>
                  </div>
                  <ul className="inner-uldash">
                    <li>Open Election Courses and Student...</li>
                  </ul>
                  <hr></hr>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
