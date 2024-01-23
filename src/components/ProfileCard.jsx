
const ProfileCard = () => {
  const profile = {
    name: "John",
    age: 30,
    picture: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
    locattion: "USA",
    career: "Software Engineer",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non laborum hic illo aliquid aliquam quaerat dele",
  };
//   destructuring profile object
  const{name,age,picture,locattion,career,about}=profile
  return <div>
    <img src={picture} alt={name} />
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Location: {locattion}</p>
    <p>Career: {career}</p>
    <p>About: {about}</p>
  </div>;
};

export default ProfileCard;
