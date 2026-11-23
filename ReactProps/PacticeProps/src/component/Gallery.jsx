import { getImageUrl } from "../utils.js";
function Profile({
  name,
  imageId,
  profession,
  awards,
  discoverd,
  imgaeSize = 70,
}) {
  return (
    <section className="profile">
      <h2>Maria Skłodowska-Curie</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={imgaeSize}
        height={imgaeSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {profession}
        </li>
        <li>
          <b>Awards: {awards.length}</b>({awards.join(",")})
        </li>
        <li>
          <b>Discovered: </b>
          {discoverd}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageId="szV5sdG"
        profession=" physicist and chemist"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
        discoverd="polonium (chemical element)"
      />
      <Profile
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession=" geochemist"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
        discoverd="a method for measuring carbon dioxide in seawater"
      />
    </div>
  );
}
