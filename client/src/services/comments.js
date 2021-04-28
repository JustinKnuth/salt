import api from "./api-helper"


export const getAllComments = async () => {
  const res = await api.get('/comments')
  return res.data
}

// export const getOnePost = async () => {
//   const res = await api.get(`/posts/${id}`)
//   return res.data
// }

export const createComment = async (commentData) => {
  const res = await api.post('/comments', { comment: commentData })
  return res.data
}

export const putComment = async (id, commentData) => {
  const res = await api.get(`/posts/${id}/comments/${id}`, { comment: commentData })
  return res.data
}

export const deleteComment = async (id) => {
  const res = await api.delete(`/posts/${id}/comments/${id}`)
  return res
}