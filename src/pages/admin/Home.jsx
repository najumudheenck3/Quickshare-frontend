import React, { useEffect, useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { fetDashboardDetails } from "../../api/admin/UserRequest";
import UserDetailsChart from "../../components/admin/userDeatailsChart/UserDetailsChart";
import PostDetailChart from "../../components/admin/postDetailsChart/PostDetailChart";

const Home = () => {
  const [totalUsers,setTotalUsers]=useState('')
  const [activeUsers,setActiveUsers]=useState('')
  const [userGraphCategories,setUserGraphCategories]=useState([])
  const [userGraphData,setUserGraphData]=useState([])
  const [postGraphCategories,setPostGraphCategories]=useState([])
  const [postGraphData,setPostGraphData]=useState([])
  useEffect(()=>{
const getDeatil=async()=>{
  const response=await fetDashboardDetails()
  console.log(response,'resssssss')
  setTotalUsers(response?.userCount)
  setActiveUsers(response?.activeCount)
  // user detail graph data and category setting
  const usergpcatgry=response?.userGraph.map(item => {
    return item._id
  })
  setUserGraphCategories(usergpcatgry)
  const usergpdata=response?.userGraph.map(items=>{
    return items.count
  })
  setUserGraphData(usergpdata)
  // post detail graph data and category setting
  const postgpcatgry=response?.postGraph.map(item => {
    return item._id
  })
  setPostGraphCategories(postgpcatgry)
  const postgpdata=response?.postGraph.map(items=>{
    return items.count
  })
  setPostGraphData(postgpdata)
}
getDeatil()
  },[])
  return (
    <>
     <div className="flex flex-col w-full ">
     <div className="flex mt-5 p-5 w-full text-center gap-x-10 justify-center ">
        <div className="h-48 w-48 bg-white flex items-center flex-col gap-y-5 rounded-xl p-5">
          <h1 className="font-bold text-2xl"> Total Users</h1>
          <GroupIcon className="text-specclr" fontSize="large" />
          <h1 className="font-bold text-6xl">{totalUsers}</h1>

        </div>
        <div className="h-48 w-48 bg-white flex items-center flex-col gap-y-5 rounded-xl p-5">
          <h1 className="font-bold text-2xl">Active Users</h1>
          <GroupAddIcon className="text-specclr" fontSize="large" />
          <h1 className="font-bold text-6xl">{activeUsers}</h1>
        </div>
      </div>
      {userGraphCategories?.length>0&&<UserDetailsChart userGraphCategories={userGraphCategories} userGraphData={userGraphData}/>}
      {postGraphCategories?.length>0&&<PostDetailChart postGraphCategories={postGraphCategories} postGraphData={postGraphData}/>}
     </div>
    </>
  );
};

export default Home;
