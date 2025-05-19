import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Méthode Intuitive',
    description: 'Apprenez naturellement en associant les mots à des gestes simples et mémorables.'
  },
  {
    title: 'Résultats Rapides',
    description: 'Progressez rapidement grâce à une approche kinesthésique unique.'
  },
  {
    title: 'Pour Tous Niveaux',
    description: 'Adapté aux débutants comme aux apprenants avancés.'
  }
];

export default function Features() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}