import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import { useState } from "react";

interface PostProps {
  location: string;
  img: string;
  alt: string;
  description: string;
}

function App(): JSX.Element {
  const [gifPosts, setGifPosts] = useState<PostProps[]>([]);
  return (
    <>
      <Header setGifPosts={setGifPosts} gifPosts={gifPosts} />
      <MainContent gifPosts={gifPosts} />
    </>
  );
}

export default App;
