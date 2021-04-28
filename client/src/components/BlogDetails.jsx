import { useState, useEffect } from "react"
import {useParams} from "react-router-dom"
import { getOnePost } from "../services/posts"



export default function BlogDetails(props) {
  const [postItem, setPostItem] = useState(null)
  const { id } = useParams()
  const { comments } = props

  useEffect(() => {
    const fetchPost = async () => {
      const postData = await getOnePost(id)
      setPostItem(postData)
    }
    fetchPost()
}, [])

  return (
    <div>
      <h1>{postItem?.title}</h1>
      {
        postItem?.comments.map((comment) => (
          <p key={comment.id}>{comment.content}</p>
          ))
      }
    </div>
  )
}