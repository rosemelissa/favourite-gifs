import SubmitPost from "./SubmitGif";
import SearchBox from "./SearchBox";

interface PostProps {
  location: string;
  img: string;
  alt: string;
  description: string;
}

interface HeaderProps {
  // eslint-disable-next-line
  setGifPosts: Function;
  gifPosts: PostProps[];
  // eslint-disable-next-line
  setSearchTerm: Function;
  searchTerm: string;
}

function Header({
  setGifPosts,
  gifPosts,
  setSearchTerm,
  searchTerm,
}: HeaderProps): JSX.Element {
  return (
    <div id="header">
      <h1 id="header-h1">Melistagram</h1>
      <div id="header-buttons">
        <SubmitPost setGifPosts={setGifPosts} gifPosts={gifPosts} />
      </div>
      <SearchBox setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
    </div>
  );
}

export default Header;
