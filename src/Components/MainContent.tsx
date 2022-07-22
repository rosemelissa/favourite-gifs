import Post from "./Post";
import defaultGifs from "../defaultPosts.json";

interface PostProps {
  location: string;
  img: string;
  alt: string;
  description: string;
}

function MainContent({ gifPosts }: { gifPosts: PostProps[] }): JSX.Element {
  return (
    <div className="main">
      {defaultGifs.map(Post)}
      {gifPosts.map(Post)}
    </div>
  );
}

export default MainContent;
