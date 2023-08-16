// Write your code here
import './index.css'

const Item = props => {
  const {HistoryList} = props
  const {timeAccessed, logoUrl, title, domainUrl} = HistoryList

  return (
    <li className="container">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="" className="logo" />
      <p className="name">{title}</p>
      <p className="url">{domainUrl}</p>
      <button className="button" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Item
