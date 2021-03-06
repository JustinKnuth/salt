import api from './api-helper'


export const getAllPosts = async (page) => {
  const res = await api.get(`/posts/?page=${page}`)
  return res.data
}
// export const getAllPosts = async (page) => {
//   const res = await api.get('/posts/?page=5')
//   return res.data
// }

export const getOnePost = async (id) => {
  const res = await api.get(`/posts/${id}`)
  return res.data
}

export const createPost = async (postData) => {
  const res = await api.post('/posts', { post: postData })
  return res.data
}

export const putPost = async (id, postData) => {
  const res = await api.put(`/posts/${id}`, { post: postData })
  return res.data
}

export const deletePost = async (id) => {
  await api.delete(`/posts/${id}`)
}