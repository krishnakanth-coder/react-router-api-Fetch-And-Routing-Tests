import {Component} from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, topic, content} = blogData
    console.log(blogData)
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          <div className="blogItem-details-container">
            <h1 className="card-title">{title}</h1>
            <div className="author-card-container">
              <img src={avatarUrl} alt={author} className="avatar-image" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} alt="image_url" className="topic-images" />
            <p className="para-text">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
