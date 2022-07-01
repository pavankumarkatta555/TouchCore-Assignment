import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

import './index.css'

const transactionsList = [
  {id: 1, date: '2020-07-01'},
  {id: 2, date: '2020-07-02'},
  {id: 3, date: '2020-07-03'},
]

const barChartData = [
  {
    name: 20,
    'Employer: K 73,500': 60,
    'Employee: K 52,500': 70,
    'Total Interest: K 244,213': 80,
  },
  {
    name: 25,
    'Employer: K 73,500': 70,
    'Employee: K 52,500': 80,
    'Total Interest: K 244,213': 90,
  },
  {
    name: 30,
    'Employer: K 73,500': 80,
    'Employee: K 52,500': 90,
    'Total Interest: K 244,213': 100,
  },
  {
    name: 35,
    'Employer: K 73,500': 140,
    'Employee: K 52,500': 160,
    'Total Interest: K 244,213': 180,
  },
  {
    name: 40,
    'Employer: K 73,500': 180,
    'Employee: K 52,500': 200,
    'Total Interest: K 244,213': 220,
  },
  {
    name: 45,
    'Employer: K 73,500': 220,
    'Employee: K 52,500': 240,
    'Total Interest: K 244,213': 260,
  },
  {
    name: 50,
    'Employer: K 73,500': 260,
    'Employee: K 52,500': 280,
    'Total Interest: K 244,213': 300,
  },
  {
    name: 55,
    'Employer: K 73,500': 320,
    'Employee: K 52,500': 340,
    'Total Interest: K 244,213': 360,
  },
  {
    name: 60,
    'Employer: K 73,500': 360,
    'Employee: K 52,500': 380,
    'Total Interest: K 244,213': 380,
  },
]

const Home = () => (
  <div className="home-main-container">
    <div className="home1-main-container">
      <div className="home1-profile-name-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="home1-profile-image"
        />
        <div>
          <h1 className="home1-profile-name">Hi Mike,</h1>
          <p className="home1-profile-msg">welcome back..</p>
        </div>
      </div>
      <div className="home1-balances-container">
        <div className="home1-day-balance-container">
          <p className="home1-day">Today</p>
          <h1 className="home1-balance"> $19,892</h1>
          <p className="home1-balance-heading">Account Balance</p>
        </div>
        <div className="home1-invest-date-container">
          <div>
            <h1 className="balance">$4,000</h1>
            <p className="home1-balance-heading">
              Year-to-Date <span>Contributions</span>
            </p>
          </div>
          <div className="a">
            <h1 className="balance">$1,892</h1>
            <p className="home1-balance-heading">Total invest</p>
          </div>
        </div>
        <div className="home1-balance-button-container">
          <button type="button" className="home1-balance-button">
            I want to..
          </button>
        </div>
      </div>
      <div className="home1-transactions-container">
        <h1 className="hom1-transaction-heading">Recent Transactions</h1>
        <ul className="home1-transactions-list">
          {transactionsList.map(each => {
            const {id, date} = each

            return (
              <li key={id} className="home1-transaction-list-item">
                <p className="home1-transaction-list-date">{date}</p>
                <p className="home1-transaction-list-msg">
                  Withdrawal Transfer to Bank-XXX11
                </p>
                <hr className="hr-line" />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    <div className="home2-main-container">
      <div className="home2-headings-container">
        <h1 className="home2-retirement-heading">Retirement Income</h1>
        <h1 className="home2-year-heading">Starting Year 2056</h1>
      </div>
      <div className="home2-goal-percent-income">
        <div className="home2-goal-container">
          <h1 className="home2-goals-headings">$300,000</h1>
          <p className="home2-goals-description">My Goal</p>
          <hr className="hr-line2" />
        </div>
        <div className="home2-goal-achieve-container">
          <h1 className="home2-goals-headings">59%</h1>
          <p className="home2-goals-description">Goal Achieved</p>
          <hr className="hr-line2" />
        </div>
        <div className="home2-goal-achieve-container">
          <h1 className="home2-goals-headings">K 300</h1>
          <p className="home2-goals-description">Est. Monthly Income</p>
          <hr className="hr-line2" />
        </div>
      </div>
      <div className="home2-bargraph-container">
        <h1 className="home2-contributions-heading">Contributions Overtime</h1>
        <div className="barchart-container">
          <BarChart width={500} height={300} data={barChartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Bar dataKey="Employer: K 73,500" stackId="a" fill="#100d75" />
            <Bar dataKey="Employee: K 52,500" stackId="a" fill="#2658a3" />
            <Bar
              dataKey="Total Interest: K 244,213"
              stackId="a"
              fill="#81b6c9"
            />
          </BarChart>
        </div>
      </div>
      <div className="home2-selects-piechart-container">
        <div>
          <h1 className="home2-selects-piechart-heading">
            How do I compare to my peers?
          </h1>
          <p className="home2-selects-piechart-description">
            These numbers represent current goal achievement
          </p>
        </div>
        <div className="home2-selects-and-piecharts-containers">
          <div className="home2-selects-container">
            <div className="home2-select-container">
              <label htmlFor="ageSelect" className="home2-select-label">
                Age:{' '}
              </label>
              <select id="ageSelect" className="home2-select-option">
                <option>Under 30</option>
              </select>
            </div>
            <div className="home2-select-container">
              <label htmlFor="ageSelect" className="home2-select-label">
                Salary:{' '}
              </label>
              <select id="ageSelect" className="home2-select-option">
                <option>K 20 - K 30</option>
              </select>
            </div>
            <div className="home2-select-container">
              <label htmlFor="ageSelect" className="home2-select-label">
                Gender:{' '}
              </label>
              <select id="ageSelect" className="home2-select-option">
                <option>Male</option>
              </select>
            </div>
          </div>
          <div className="home2-pie-charts-container">
            <div className="home2-pie-chart-description">
              <div className="home2-pie-chart-container">
                <h1 className="home2-pie-chart-heading">100%</h1>
              </div>
              <p className="home2-pie-description">Average</p>
            </div>
            <div className="home2-pie-chart-description">
              <div className="home2-pie-chart-container">
                <h1 className="home2-pie-chart-heading">100%</h1>
              </div>
              <p className="home2-pie-description">Top</p>
            </div>
            <div className="home2-pie-chart-description">
              <div className="home2-pie-chart-container">
                <h1 className="home2-pie-chart-heading">100%</h1>
              </div>
              <p className="home2-pie-description">Me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home3-main-container">
      <h1 className="home3-heading">Retirement Strategy</h1>
      <form className="home3-form-container">
        <div className="home3-employer-contribution1">
          <label htmlFor="1" className="home3-label">
            Employee Contribution
          </label>
          <input type="text" id="1" />
        </div>
        <div className="home3-employer-contribution1">
          <label htmlFor="2" className="home3-label">
            Retirement Age
          </label>
          <input type="text" id="2" />
        </div>
        <hr className="hr-line3" />
        <div className="home3-employer-contribution2">
          <p>Employer Contribution</p>
          <p>8.4%</p>
        </div>
        <div className="home3-employer-contribution2">
          <p>Interest Rate</p>
          <p>5%</p>
        </div>
        <button type="button" className="home3-update-button">
          Update
        </button>
      </form>
      <p className="home3-paragraph">View help docs ></p>
      <div className="home4-main-container">
        <p className="home4-p1">
          Are you considering a <br />
          <span className="home4-span">Housing Advance?</span>
        </p>
        <p className="home4-p2">Limited time reduced interest</p>
        <p className="home4-paragraph">Learn More ></p>
      </div>
    </div>
  </div>
)

export default Home
