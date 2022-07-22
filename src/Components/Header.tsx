import SubmitPost from "./SubmitGif";

interface PostProps {
    location: string;
    img: string;
    alt: string;
    description: string;
}
// eslint-disable-next-line
function Header({setGifPosts, gifPosts} : {setGifPosts : Function, gifPosts : PostProps[]}): JSX.Element {
    return (
        <div id='header'>
          <h1 id='header-h1'>Instagram</h1>
            <input id='header-input' type='text' placeholder='Search'></input>
            <div id='header-buttons'>
                <SubmitPost setGifPosts={setGifPosts} gifPosts={gifPosts}/>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    );
  
}

export default Header;