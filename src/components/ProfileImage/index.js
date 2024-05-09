import ProfilePic from './avatar.jpg';
const ProfileImage = () => {
  return (
    <img
      src={ProfilePic}
      className="img-fluid rounded-4"
      alt="Ravi Kanculakunta"
    />
  );
};

export default ProfileImage;
