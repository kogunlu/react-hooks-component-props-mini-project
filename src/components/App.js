import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'

console.log(blogData);

function App() {

  const articleElements = blogData.posts.map(item => {
    return (
      <ArticleList title={item.title} date={item.date} preview={item.preview} key={item.id}/>
    )
  })

  return (
    <div className="App">
      <Header header = {blogData.name} />
      <About text={blogData.about} image= {blogData.image}/>
      {articleElements}

    </div>
  );
}

export default App;
