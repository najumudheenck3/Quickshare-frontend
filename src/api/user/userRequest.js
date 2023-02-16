import toast from 'react-hot-toast'
import { cloudApi, userApi } from '../../utils/apiCall';



export const getUserProfile = async (id) => {
  try {
    console.log(id, 'prodilegeting id');
    const { data } = await userApi.get(`/get-user-profile/${id}`)
    if (data.success) {
      return data
    }
  } catch (error) {

  }
}

export const uploadImage = async (image) => {
  try {
    const formData = new FormData();
    formData.append("file", image[0]);
    formData.append("upload_preset", "bozm6nib");
    const { data } = await cloudApi.post(`/upload`, formData);
    return data?.secure_url;
  } catch (error) {
    console.log(error);
  }
};

export const updateUserProfile = async (userInfo) => {
  try {
    const { data } = await userApi.put('/update-user-profile', userInfo)
    if (data.success) {
      toast.success(data.message);
      return data.data
    }else{
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
  }
} 

export const searchUserList = async (searchData) => {
try {
  console.log(searchData);
  const { data } = await userApi.post('/search-users', { searchData })
  console.log(data, "searchData");
  return data
} catch (error) {
  
}
}

export const setPrivateAccount=async()=>{
  try {
    const { data } = await userApi.put('/set-private-account',{})
  } catch (error) {
    
  }
}

export const getAllNotifications = async () => {
  const { data } = await userApi.get("/get-all-notifications");
  if(data.success){
      console.log(data.data,'notiffications');
      return data.data

  }

}

export const suggestionUsers = async () => {
  try {
    const { data } = await userApi.get(
      "/suggestion-users");
    return data.data

  }catch (error) {

  }
}