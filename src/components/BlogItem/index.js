// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listItem} = props
  const {title, description, publishedDate} = listItem
  return (
    <li className="list-item-container">
      <div className="post-name-and-date-container">
        <h1 className="post-name">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="content">{description}</p>
      <hr className="line-break" />
    </li>
  )
}

export default BlogItem
