import {useState} from "react";

interface PostProps {
    location: string;
    img: string;
    alt: string;
    description: string;
}

// eslint-disable-next-line
export default function SubmitPost({setGifPosts, gifPosts} : {setGifPosts : Function, gifPosts : PostProps[]}): JSX.Element {
    const [locationString, setLocationString] = useState<string>("");
    const [imgString, setImgString] = useState<string>("");
    const [altString, setAltString] = useState<string>("");
    const [descriptionString, setDescriptionString] = useState<string>("");

    const handleSubmit = () => {
        const newGifPost: PostProps = {
            location: locationString,
            img: imgString,
            alt: altString,
            description: descriptionString
        };
        setGifPosts([...gifPosts, newGifPost])
        setLocationString("");
        setImgString("");
        setAltString("");
        setDescriptionString("");
    }

    return (
        <div id="submit-box">
            <input className="input submit-input" value={locationString} onChange={(event) => setLocationString(event.target.value)} placeholder="Location"/>
            <input className="input submit-input" value={imgString} onChange={(event) => setImgString(event.target.value)} placeholder="Img"/>
            <input className="input submit-input" value={altString} onChange={(event) => setAltString(event.target.value)} placeholder="Alt"/>
            <input className="input submit-input" value={descriptionString} onChange={(event) => setDescriptionString(event.target.value)} placeholder="Description"/>
            <button id="submit-button" type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}