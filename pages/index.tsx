import GradientLayout from '../components/gradientLayout';

const Home = () => {
  return (
    <GradientLayout
      roundImage
      color="blue"
      subtitle="profile"
      title="Daniel Lee"
      description="15 public playlists"
      image="https://frontendmasters.github.io/fullstack-app-next-website/images/profile.png"
    >
      <div>Home Page</div>
    </GradientLayout>
  );
};

export default Home;
