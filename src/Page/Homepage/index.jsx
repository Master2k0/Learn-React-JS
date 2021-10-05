import React from 'react';
// import queryString from 'query-string';

// import logo from './logo.svg';
// import './App.css';
// import TodoFeature from './features/Todo';
// import AlbumFeature from './features/Album'
// import ColorBox from './features/ColorBox'
// import PostList from './features/PostList';
// import Pagination from './features/Pagination';
// import PostFilterForm from './features/PostFilterForm';
// import Clock from './features/Clock';
// import BetterClock from './features/Clock Better';
import MagicBox from '../../features/MagicBox';

function Homepage() {
  
  // const [postList,setPostList] = useState([]);
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 1,
  // });

  // const [filter, setFilter] = useState({
  //   _limit: 10,
  //   _page: 1,
  // });
  // const [hideClock, setHideClock] = useState(true)
  // useEffect(()=>{
  //   async function fetchPostList(){
  //     try {
  //       const paramsString = queryString.stringify(filter);
  //       const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestURL);
  //       const reponseJSON = await response.json();
  //       console.log(reponseJSON);
  //       const {data,pagination} = reponseJSON;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
      
  //   }

  //   fetchPostList();
  // },[filter])
  // // console.log("render",postList,pagination,filter);
  // function handlePageChange(newPage) {
  //   // console.log(newPage);
  //   setFilter({...filter,_page : newPage});
  // }

  // function handleFilterChange(newFilter) {
  //   // console.log(newFilter);
  //   setFilter({...filter,_page: 1,title_like: newFilter.searchTerm,});
  // }

  return (
    <div className="Homepage">
      {/* <AlbumFeature /> */}
      {/* <TodoFeature/> */}
      {/* <ColorBox/> */}
      {/* <PostFilterForm onSubmit={handleFilterChange}/> */}
      {/* <PostList posts={postList}/>  */}
      {/* <Pagination pagination={pagination} onPageChange={handlePageChange}/> */}
      {/* {hideClock && <Clock/>} */}
      {/* {hideClock && <BetterClock/>} */}
      {/* <button onClick={() => setHideClock( hideClock => !hideClock)}>Hide/Un hide clock</button> */}
      <MagicBox/>
    </div>
  );
}

export default Homepage;
