import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachUser} = props
  const {id, author, avatarUrl, imageUrl, topic, title} = eachUser
  return (
    <Link to={`/blogs/${id}`} className="link">
      <li className="user-card-container">
        <img src={imageUrl} alt={topic} className="topic-image" />
        <div className="blog-list-text-container">
          <p className="topic-text">{topic}</p>
          <h1 className="title">{title}</h1>
          <div>
            <img src={avatarUrl} alt={author} className="author-image" />
            <p className="author-text">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
