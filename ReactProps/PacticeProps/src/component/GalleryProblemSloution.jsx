// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <section className="profile">
//         <h2>Maria Skłodowska-Curie</h2>
//         <img
//           className="avatar"
//           src={getImageUrl("szV5sdG")}
//           alt="Maria Skłodowska-Curie"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             physicist and chemist
//           </li>
//           <li>
//             <b>Awards: 4 </b>
//             (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
//             Matteucci Medal)
//           </li>
//           <li>
//             <b>Discovered: </b>
//             polonium (chemical element)
//           </li>
//         </ul>
//       </section>
//       <section className="profile">
//         <h2>Katsuko Saruhashi</h2>
//         <img
//           className="avatar"
//           src={getImageUrl("YfeOqp2")}
//           alt="Katsuko Saruhashi"
//           width={70}
//           height={70}
//         />
//         <ul>
//           <li>
//             <b>Profession: </b>
//             geochemist
//           </li>
//           <li>
//             <b>Awards: 2 </b>
//             (Miyake Prize for geochemistry, Tanaka Prize)
//           </li>
//           <li>
//             <b>Discovered: </b>a method for measuring carbon dioxide in seawater
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// repitated code bad diye react reuseble code kore componet fun kora .
// import "../index.css";
import { getImageUrl } from "../utils";
function Profile({ person, imageSize = 70 }) {
  return (
    <section className="profile">
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src={getImageUrl(person.imageId)}
        alt={person.name}
        width={imageSize}
        height={imageSize}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.awards.length}</b>({person.awards.join(",")})
        </li>
        <li>
          <b>Discovered: </b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}
export default function GalleryProblemSloution() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          name: "nasim",
          imageId: "szV5sdG",
          profession: "deveporer",
          discovered: "vgsavgxacsf",
          awards: [
            "Nobel Prize in Physics",
            "Nobel Prize in Chemistry",
            "Davy Medal",
            "Matteucci Medal",
          ],
        }}
      />
    </div>
  );
}
