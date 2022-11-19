import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch(`https://apis.ccbp.in/blogs`)
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      topic: eachItem.topic,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {isLoading, blogList} = this.state
    return (
      <div>
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          <ul className="users-all-cards-container">
            {blogList.map(eachUser => (
              <BlogItem eachUser={eachUser} key={eachUser.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
