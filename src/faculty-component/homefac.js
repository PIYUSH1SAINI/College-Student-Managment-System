import React from "react";
import { NavLink } from "react-router-dom";

const myComponentStyle = {
  border: "solid 2px grey",
  borderRadius: "50%"
};

const Home = () => {
  return (
    <div className="Stud-mainfac">
      <div className="infofac">
        <div className="studinfofac">
          <div>
            <img
              className="studimg"
              src={require(".././faculty-image/faculty-img.png")}
              alt="userimage"
              height="150rem"
            />
          </div>
          <div className="txtfac">
            <h2 className="studname">
              Dave Dixit<span className="rollno"> (2110993000)</span>
            </h2>
            <p className="session">2015</p>
            <p className="course">BE - Computer Science & Engineering</p>
          </div>
        </div>
        <div className="passesfac">
          <NavLink to="/dl" className="dl">
            <h3>MARKS</h3>
            <p>
              Courewise marks in Practicals/Theories/<br></br>
              Sessional/Assignments in accordance with the semester can be
              viewed
            </p>
          </NavLink>
          <NavLink to="/dl" className="dl">
            <h3>APPROVE DUTY/MEDICAL LEAVE</h3>
            <p>Approve students Duty/Medical Leave online</p>
          </NavLink>
          <NavLink to="/dl" className="gatepass">
            <h3>APPROVE GATE PASS</h3>
            <p>
              Student require this Gate Pass whenever he/she enters/leaves the
              university
            </p>
          </NavLink>
        </div>
      </div>
      <div className="downfac">
        <div className="activityfac">
          <h2>Recent Activity</h2>
          <ul>
            <li className="list">
              <div className="activitydatefac">
                <h4>1-Oct-2023</h4>
                <hr></hr>
              </div>
              <ul className="inner-ul">
                <li>
                  Regarding university will remain closed on 2 Oct 2023...
                </li>
              </ul>
              <hr></hr>
            </li>

            <li className="list">
              <div className="activitydatefac">
                <h4>29-Sep-2023</h4>
                <hr></hr>
              </div>
              <ul className="inner-ul">
                <li>Notice for LOP evaluation components...</li>
                <li>Help Desk for goverment scholarship Schemes...</li>
                <li>North East Zone Fencing, Judo and Karate...</li>
              </ul>
              <hr></hr>
            </li>

            <li className="list">
              <div className="activitydatefac">
                <h4>23-Sep-2023</h4>
                <hr></hr>
              </div>
              <ul className="inner-ul">
                <li>Notice of Internal Assesment -1 for CSE...</li>
              </ul>
              <hr></hr>
            </li>

            <li className="list">
              <div className="activitydatefac">
                <h4>22-Sep-2023</h4>
                <hr></hr>
              </div>
              <ul className="inner-ul">
                <li>NZIU Lawn Tennis Trials For Men and...</li>
                <li>VollyBall Trials For Men and Women...</li>
                <li>Chess Team Trials For Men and Women...</li>
              </ul>
              <hr></hr>
            </li>

            <li className="list">
              <div className="activitydatefac">
                <h4>29-Sep-2023</h4>
                <hr></hr>
              </div>
              <ul className="inner-ul">
                <li>Open Election Courses and Student...</li>
              </ul>
              <hr></hr>
            </li>
          </ul>
        </div>

        <div className="activityfac calanderfac">
          <h2>Academic Calender</h2>

          <table align="center" cellspacing="3" cellpadding="5">
            <thead>
              <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>1</td>
                <td style={myComponentStyle}>2</td>
              </tr>
              <tr></tr>
              <tr>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                <td>8</td>
                <td>9</td>
              </tr>
              <tr>
                <td style={{ color: "red" }}>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>
                <td>15</td>
                <td>16</td>
              </tr>
              <tr>
                <td>17</td>
                <td>18</td>
                <td>19</td>
                <td style={{ color: "red" }}>20</td>
                <td>21</td>
                <td>22</td>
                <td>23</td>
              </tr>
              <tr>
                <td>24</td>
                <td>25</td>
                <td>26</td>
                <td>27</td>
                <td>28</td>
                <td>29</td>
                <td>30</td>
              </tr>
              <tr>
                <td>31</td>
                {/* <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td> */}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bdayfac">
          <h2>Birthday Wishes To</h2>
          <div className="bdaypost">
            <img
              src={require(".././images/bday.webp")}
              alt="birthday"
              height="70rem"
            />
            <p>Piyush saini</p>
          </div>
          <hr></hr>

          <div className="bdaypost">
            <img
              src={require(".././images/bday.webp")}
              alt="birthday"
              height="70rem"
            />
            <p>Rohit Kaushik</p>
          </div>
          <hr></hr>

          <div className="bdaypost">
            <img
              src={require(".././images/bday.webp")}
              alt="birthday"
              height="70rem"
            />
            <p>Prince Vasoya</p>
          </div>
          <hr></hr>

          <div className="bdaypost">
            <img
              src={require(".././images/bday.webp")}
              alt="birthday"
              height="70rem"
            />
            <p>Rajit Chaudary</p>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default Home;
