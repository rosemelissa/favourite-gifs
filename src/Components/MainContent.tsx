import Post from './Post';
import defaultGifs from '../defaultPosts.json';
import { useState } from "react";

// const favGifs: PostProps[] = [
//     {
//         location: 'Somewhere sunny',
//         img: 'images/seokjin-wink.gif',
//         alt: 'Seokjin points and winks at the camera',
//         description: 'Him......',
//     },
//     {
//         location: 'School photo day',
//         img: 'images/taehyung-smile.gif',
//         alt: 'Taehyung turns and smiles at the camera whilst wearing a school uniform',
//         description: 'Me when someone wants to take a candid',
//     },
//     {
//         location: 'The floor',
//         img: 'images/jimin-fall.gif',
//         alt: 'Jimin laughs so hard at himself he falls down',
//         description: "No don't fall on the floor you're too sexy ahah",
//     },
//     {
//         location: 'Meeting my fans',
//         img: 'images/namjoon-stage.gif',
//         alt: 'Namjoon walks on stage wearing sunglasses, smoke pours out behind him and the crowd cheers',
//         description: 'Me emerging from my room at 3pm ready to start my day',
//     },
//     {
//         location: 'The inside of my brain',
//         img: 'images/jimin-office.gif',
//         alt: 'Jimin looks into the camera like he is on the office',
//         description: 'When a family member tries to explain biochemistry to me',
//     },
// ];

interface PostProps {
    location: string;
    img: string;
    alt: string;
    description: string;
}

function MainContent(submittedGif : PostProps): JSX.Element {
    const [favGifs, setFavGifs] = useState<PostProps[]>(defaultGifs);

    return (
        <>
            <SubmitPost setFavGifs={setFavGifs}/>
            {favGifs.map(Post)}

        </>
    );
}

interface SubmitPostProps {
    // eslint-disable-next-line
    setFavGifs: any;
}

function SubmitPost({setFavGifs}: SubmitPostProps): JSX.Element {
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

    const handleSubmit = () => {
        const updatedGifPost: PostProps = {
            location: locationString,
            img: imgString,
            alt: altString,
            description: descriptionString
        }
        setGifPost(gifPost => updatedGifPost)
        setFavGifs((prevGifs: PostProps[]) => [...prevGifs, gifPost]);
    }

    return (
        <>
        <input value={locationString} onChange={(event) => {setLocationString(event.target.value);}} placeholder="Location"/>
        <input value={imgString} onChange={(event) => {setImgString(event.target.value)}} placeholder="GIF URL"/>
        <input value={altString} onChange={(event) => {setAltString(event.target.value)}} placeholder="GIF alt"/>
        <input type={descriptionString} onChange={(event) => {setDescriptionString(event.target.value)}} placeholder="Description"/>
        <button type="button" onClick={handleSubmit}>Submit</button>;
        </>
    );
}

export default MainContent;