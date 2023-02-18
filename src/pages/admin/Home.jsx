import React, { useEffect, useState } from "react";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { fetDashboardDetails } from "../../api/admin/UserRequest";
import UserDetailsChart from "../../components/admin/userDeatailsChart/UserDetailsChart";
import PostDetailChart from "../../components/admin/postDetailsChart/PostDetailChart";

const Home = () => {
  const [totalUsers,setTotalUsers]=useState('')
  const [activeUsers,setActiveUsers]=useState('')
  const [totalPost,setToatlPosts]=useState('')
  const [totalShort,setTotalShort]=useState('')
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
  setToatlPosts(response?.totalPosts)
  setTotalShort(response?.totalShorts)
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
     <div className="flex flex-col w-full p-5">
     <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">{totalUsers}</span>
            <span className="block text-gray-500">Total Users</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">{activeUsers}</span>
            <span className="block text-gray-500">Active Users</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4.828 21l-.02.02-.021-.02H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H4.828zM20 15V5H4v14L14 9l6 6zm0 2.828l-6-6L6.828 19H20v-1.172zM8 11a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
          </div>
          <div>
            <span className="inline-block text-2xl font-bold">{totalPost}</span>
            <span className="block text-gray-500">Total Posts</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM4 5v14h16V5H4zm6.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z"/></svg>
          </div>
          <div>
            <span className="block text-2xl font-bold">{totalShort}</span>
            <span className="block text-gray-500">Total Shorts</span>
          </div>
        </div>
      </section>
      {userGraphCategories?.length>0&&<UserDetailsChart userGraphCategories={userGraphCategories} userGraphData={userGraphData}/>}
      {postGraphCategories?.length>0&&<PostDetailChart postGraphCategories={postGraphCategories} postGraphData={postGraphData}/>}
     </div>
    </>
  );
};

export default Home;
