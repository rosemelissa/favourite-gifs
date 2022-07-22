import SubmitPost from "./SubmitGif";

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
}

function Header({ setGifPosts, gifPosts }: HeaderProps): JSX.Element {
  return (
    <div id="header">
      <h1 id="header-h1">Instagram</h1>
      <div id="header-buttons">
        <SubmitPost setGifPosts={setGifPosts} gifPosts={gifPosts} />
      </div>
      <input
        id="header-input"
        className="input"
        type="text"
        placeholder="Search"
      ></input>
    </div>
  );
}

export default Header;
