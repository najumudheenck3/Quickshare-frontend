import toast from 'react-hot-toast'
import {  userApi } from '../../utils/apiCall';

export const followUser=async(followingId)=>{
try {
    const {data}=await userApi.put('/follow-user',followingId)
      return data
} catch (error) {
    
}
}

export const getAllRequest=async()=>{
  try {
    const {data}=await userApi.get('/get-all-request')
    return data.requests
  } catch (error) {
    
  }
}

export const acceptRequest=async(formData)=>{
  try {
    const {data}=await userApi.put('/accept-request',formData)
    return data.success
  } catch (error) {
    
  }
}

export const deleteRequest=async(deleteId )=>{
  try {
    const {data}=await userApi.delete(`/delete-request/${deleteId}`)
    return data.success
  } catch (error) {
    
  }
}

export const getAllFollowers=async(userId)=>{
  try {
    const {data}=await userApi.get(`/get-all-followers/${userId}`)
    if(data.success){
      return data.data
  }
  } catch (error) {
    
  }
}

export const getAllFollowing=async(userId)=>{
  try {
    const {data}=await userApi.get(`/get-all-following/${userId}`)
    if(data.success){
      return data.data
  }
  } catch (error) {
    
  }
}