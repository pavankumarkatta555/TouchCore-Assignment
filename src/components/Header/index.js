import {BiHomeAlt, BiIdCard, BiSearch} from 'react-icons/bi'
import {BsCardList} from 'react-icons/bs'
import {IoPersonOutline} from 'react-icons/io5'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {HiOutlineLogout} from 'react-icons/hi'

import './index.css'

const Header = () => (
  <div className="header-main-container">
    <div className="header-icons-container">
      <ul className="header-nav-ul">
        <li className="active">
          <BiHomeAlt />
        </li>
        <li>
          <BiIdCard />
        </li>
        <li>
          <BsCardList />
        </li>
        <li>
          <IoPersonOutline />
        </li>
      </ul>
      <div className="header-search-item-container">
        <li>
          <BiSearch />
        </li>
      </div>
    </div>
    <ul className="header-logout-icon-container">
      <li>
        <IoMdNotificationsOutline />
      </li>
      <li>
        <HiOutlineLogout />
      </li>
    </ul>
  </div>
)

export default Header
