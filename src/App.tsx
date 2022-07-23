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
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      <Header
        setGifPosts={setGifPosts}
        gifPosts={gifPosts}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <MainContent gifPosts={gifPosts} searchTerm={searchTerm} />
    </>
  );
}

export default App;
