import Header from './Components/Header';
import MainContent from './Components/MainContent';

interface PostProps {
  location: string;
  img: string;
  alt: string;
  description: string;
}

const thisgif: PostProps = {
        location: 'The inside of my brain',
        img: 'images/jimin-office.gif',
        alt: 'Jimin looks into the camera like he is on the office',
        description: 'When a family member tries to explain biochemistry to me',}


function App(): JSX.Element {
  return (
    <>
      <Header />
      <MainContent {...thisgif} />
    </>


  );
}

export default App;
