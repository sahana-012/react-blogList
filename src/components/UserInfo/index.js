// Write your JS code here
import './index.css'

const UserInfo = () => (
  <ul className="user-info-list">
    <li>
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile-image"
      />
    </li>
    <li>
      <h1 className="user-name">Wade Warren</h1>
    </li>
    <li>
      <p className="designation">Software developer at UK</p>
    </li>
  </ul>
)

export default UserInfo
