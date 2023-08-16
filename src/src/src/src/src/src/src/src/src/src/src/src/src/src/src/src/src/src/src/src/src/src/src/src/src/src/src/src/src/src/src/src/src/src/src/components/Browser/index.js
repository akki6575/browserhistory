// Write your code here
import {Component} from 'react'
import Item from '../BrowserItem'
import './index.css'

class Browser extends Component {
  state = {
    searchInput: '',
  }

  SearchDestination = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const searchResults = initialHistoryList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="history"
            alt="app logo"
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search"
              alt="search"
            />

            <input
              placeholder="Search history"
              type="search"
              className="input"
              value={this.searchInput}
            />
          </div>
        </div>
        <ul className="item-container">
          {searchResults.map(each => (
            <Item HistoryList={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Browser
