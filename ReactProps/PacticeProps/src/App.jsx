import Gallery from "./component/Gallery";
import GalleryProblemSloution from "./component/GalleryProblemSloution";
import Profile from "./component/Profile";

function App() {
  return (
    <>
      {/* <Avater
        person={{ name: "nasim", hobe: "software dev or programmer" }}
        size={100}
      /> */}
      <Profile
        person={{ name: "nahid", hobe: "software------- dev or programmer" }}
        size={100}
      />
      <Gallery />
      <GalleryProblemSloution />
    </>
  );
}

export default App;
