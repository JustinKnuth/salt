import { useEffect, useState } from "react"
import { createPost, getAllPosts, putPost, deletePost } from "../services/posts"
import { getAllComments } from "../services/comments"
import { Switch, Route, useHistory } from "react-router-dom"
import AllBlogs from "./AllBlogs"
import EditPost from "./EditPost"
import CreateBlog from "./CreateBlog"
import BlogDetails from "./BlogDetails"

export default function MainContainer(props) {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const history = useHistory()
  const { currentUser } = props


  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await getAllPosts()
      setPosts(postData)
    }
    fetchPosts()
  }, [])

  useEffect(() => {
    const fetchComments = async () => {
      const commentData = await getAllComments()
      setComments(commentData)
    }
    fetchComments()
  }, [])

  const handleCreate = async (formData) => {
    const postData = await createPost(formData);
    setPosts(prevState => [...prevState, postData])
    history.push('/posts')
  }

  const handleEdit = async (id, formData) => {
    const postData = await putPost(id, formData)
    setPosts(prevState => prevState.map((post) => {
      return post.id === Number(id) ? postData : post
    }))
    history.push('/posts')
  }

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(prevState => prevState.filter(post => post.id !== id))
  }



  return (
    <Switch>
      <Route path='/posts/:id/edit'>
        <EditPost
          posts={posts}
          handleEdit={handleEdit} />
      </Route>
      <Route exact path="/posts/new">
        <CreateBlog
          handleCreate={handleCreate}

        />
      </Route>
      <Route path='/posts/:id'>
        <BlogDetails
          comments={comments}/>
      </Route>
      <Route path="/posts">
        <AllBlogs
          posts={posts}
          handleDelete={handleDelete}
          currentUser={currentUser} />
      </Route>


    </Switch>


  )
}