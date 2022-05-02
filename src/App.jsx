import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Abouts from "./pages/Abouts";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./pages/Layout";
import Post from "./pages/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Layout />}>
          {/* Burada gidecegi yer olarak yeni bir sayfa/componenets de olusturabilir ve bu sayfada eslesn bir veri yok seklinde mesajda verebilirdik kullaniciya */}
          <Route path="" element={<Home />} />
          <Route path="about" element={<Abouts />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postID" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
