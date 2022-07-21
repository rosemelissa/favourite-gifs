import { useState } from "react";

interface PostProps {
    location: string;
    img: string;
    alt: string;
    description: string;
}

function SubmitPost(): JSX.Element {
    const [gifPost, setGifPost] = useState<PostProps>({
        location: "",
        img: "",
        alt: "",
        description: ""
    })

    const [locationString, setLocationString] = useState<string>("");
    const [imgString, setImgString] = useState<string>("");
    const [altString, setAltString] = useState<string>("");
    const [descriptionString, setDescriptionString] = useState<string>("");

    const handleUpdate = () => {
        const updatedGifPost: PostProps = {
            location: locationString,
            img: imgString,
            alt: altString,
            description: descriptionString
        }
        setGifPost(gifPost => updatedGifPost)
    }

    return (
        <>
        <input value={locationString} onChange={(event) => {setLocationString(event.target.value); {handleUpdate}}} placeholder="Location"/>
        <input value={imgString} onChange={(event) => {setImgString(event.target.value); {handleUpdate}}} placeholder="GIF URL"/>
        <input value={altString} onChange={(event) => {setAltString(event.target.value); {handleUpdate}}} placeholder="GIF alt"/>
        <input type={descriptionString} onChange={(event) => {setDescriptionString(event.target.value); {handleUpdate}}} placeholder="Description"/>
        <button type="button" onClick={handleSubmit}>Submit</button>;
        </>
    );
}


export default SubmitPost;