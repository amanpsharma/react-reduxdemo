import React from 'react';
import Createpost from './container/CreatePost'
import PostList from './container/PostList'
function App() {
  return (
    <div className="container">
      <h1 className="text-danger">React Redux Example</h1>
      <div className="row">
        <div className="col-md-6">
          <Createpost />
        </div>
        <div className="col-md-6">
          Aman sharma
          <PostList/>
        </div>
      </div>
    </div>
  );
}

export default App;
