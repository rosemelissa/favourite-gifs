import {PostProps} from './PostProps';

function Post(props: PostProps): JSX.Element {
    return (
        <div id='post'>
            <p id='post-location'>{props.location}</p>
            <img id='post-img' src={props.img} alt={props.alt} width="450"/>
            <p id='post-description'>{props.description}</p>
        </div>
    );
}

export default Post;