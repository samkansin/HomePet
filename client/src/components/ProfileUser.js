const ProfileUser = ({ profile, online }) => {
  return (
    <div
      className='profile-user'
      style={{
        backgroundImage: profile
          ? `url(${profile})`
          : "url('https://knightsmsk.github.io/HomePetResource/default%20img/profile_default.png')",
      }}
    >
      <div className={`dot-status ${online ? 'online' : ''}`}></div>
    </div>
  );
};

export default ProfileUser;
