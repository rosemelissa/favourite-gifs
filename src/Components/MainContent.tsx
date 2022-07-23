import Post from "./Post";
import defaultGifs from "../defaultPosts.json";

interface PostProps {
  location: string;
  img: string;
  alt: string;
  description: string;
}

interface MainContentProps {
  gifPosts: PostProps[];
  searchTerm: string;
}

function MainContent({ gifPosts, searchTerm }: MainContentProps): JSX.Element {
  let totalGifs = [...gifPosts, ...defaultGifs];
  totalGifs = totalGifs.flat();
  const currentGifs: PostProps[] = [];
  for (const gifObject of totalGifs) {
    const arrayOfGifValues = Object.values(gifObject);
    for (const value of arrayOfGifValues) {
      if (value.toLowerCase().includes(searchTerm.toLowerCase())) {
        currentGifs.push(gifObject);
        break;
      }
    }
  }

  return <div className="main">{currentGifs.map(Post)}</div>;
}

export default MainContent;
