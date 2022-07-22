import {useState} from "react";


interface PostProps {
    location: string;
    img: string;
    alt: string;
    description: string;
}

// const gifPostToExport: PostProps = {
//     location: "",
//     img: "",
//     alt: "",
//     description: ""
// }
// eslint-disable-next-line
export default function SubmitPost({setGifPosts, gifPosts} : {setGifPosts : Function, gifPosts : PostProps[]}): JSX.Element {
    //const [gifPosts, setGifPosts] = useState<PostProps[]>([])

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
        //gifPostsToExport = {...newGifPost};
        setGifPosts([...gifPosts, newGifPost])
        setLocationString("");
        setImgString("");
        setAltString("");
        setDescriptionString("");

    }

    return (
        <>
            <input value={locationString} onChange={(event) => setLocationString(event.target.value)} placeholder="Location"/>
            <input value={imgString} onChange={(event) => setImgString(event.target.value)} placeholder="Img"/>
            <input value={altString} onChange={(event) => setAltString(event.target.value)} placeholder="Alt"/>
            <input value={descriptionString} onChange={(event) => setDescriptionString(event.target.value)} placeholder="Description"/>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </>
    )
}




// export default function SubmitPost({setFavGifs}: SubmitPostProps): JSX.Element {
//     const [gifPost, setGifPost] = useState<PostProps>({
//         location: "",
//         img: "",
//         alt: "",
//         description: ""
//     })

//     const [locationString, setLocationString] = useState<string>("");
//     const [imgString, setImgString] = useState<string>("");
//     const [altString, setAltString] = useState<string>("");
//     const [descriptionString, setDescriptionString] = useState<string>("");

//     const handleChange = () => {
//         const updatedGifPost: PostProps = {
//             location: locationString,
//             img: imgString,
//             alt: altString,
//             description: descriptionString
//         }
//         setGifPost(gifPost => updatedGifPost)
//     }

//     const handleSubmit = () => {
//         handleChange();
//         setFavGifs((prevGifs: PostProps[]) => [...prevGifs, gifPost]);
//     }

//     return (
//         <>
//         <input value={locationString} onChange={(event) => {setLocationString(event.target.value); handleChange()}} placeholder="Location"/>
//         <input value={imgString} onChange={(event) => {setImgString(event.target.value); handleChange()}} placeholder="GIF URL"/>
//         <input value={altString} onChange={(event) => {setAltString(event.target.value); handleChange()}} placeholder="GIF alt"/>
//         <input type={descriptionString} onChange={(event) => {setDescriptionString(event.target.value); handleChange()}} placeholder="Description"/>
//         <button type="button" onClick={handleSubmit}>Submit</button>
//         </>
//     );
// }