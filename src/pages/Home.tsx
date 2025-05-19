import VideoSection from '../components/VideoSection';
import Features from '../components/Features';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <VideoSection
          videoId="XsNyU21Ra2A"
          title="Apprenez l'anglais avec les mains"
          description="Découvrez une méthode unique et efficace pour maîtriser l'anglais en utilisant des gestes intuitifs"
        />
        <Features />
      </div>
    </div>
  );
}