interface VideoSectionProps {
  videoId: string;
  title: string;
  description: string;
}

export default function VideoSection({ videoId, title, description }: VideoSectionProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        {description}
      </p>
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 relative">
          <iframe
            src={`https://www.youtube.com/embed/lZgXKfXCpFM`}
            title="Présentation de la méthode"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
      <br />
      <h3 className="text-2xl font-semibold text-gray-800 max-w-2xl mx-auto mb-8">La Méthode Decroix : Apprendre l’anglais autrement</h3>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 text-justify">
        La <span className="font-bold">méthode Decroix</span> est une approche innovante et interactive pour apprendre la grammaire et la conjugaison anglaises. Conçue pour être simple, efficace et accessible à tous, <span className="font-bold">elle repose sur un système physique de plaques et de jetons,</span> permettant d’ancrer visuellement et tactilement les règles fondamentales de la langue.
        <br /><br />
        <span className="font-bold">Une méthode ludique et universelle</span><br /><br />
        <ul className="list-disc list-inside ml-6">
          <li><span className="font-bold">Sans écran, 100% manipulatif :</span> L’apprenant interagit avec le matériel, ce qui facilite la mémorisation et l’apprentissage actif.</li>
          <li><span className="font-bold">Adaptée à tous les niveaux :</span> Que vous soyez élève, adulte débutant ou en difficulté avec l’anglais, la méthode vous guide pas à pas.</li>
          <li><span className="font-bold">Idéale pour les publics spécifiques :</span> Convient particulièrement aux enfants 'dys', aux jeunes autistes et aux apprenants nécessitant une approche concrète et visuelle.</li>
        </ul>
        <br /><br />
        <span className="font-bold">Comment ça marche ?</span><br /><br />
        La méthode repose sur des <span className="font-bold">plaques structurées</span> et des <span className="font-bold">jetons mobiles</span> permettant de :<br />
        ✅ Construire des phrases en manipulant les éléments grammaticaux.<br />
        ✅ Comprendre intuitivement les règles de conjugaison.<br />
        ✅ Acquérir des automatismes rapidement et sans effort.
        <br /><br />
        <span className="font-bold">Pourquoi choisir la méthode Decroix ?</span><br /><br />
        ✔️ <span className="font-bold">Apprentissage accéléré :</span> Les concepts sont assimilés de manière visuelle et sensorielle, garantissant une meilleure rétention, tout en s'amusant.<br />
        ✔️ <span className="font-bold">Utilisation en autonomie ou avec un professeur :</span> Adaptée à l’enseignement scolaire, aux formations adultes et au travail en famille.<br />
        ✔️ <span className="font-bold">Prix accessible :</span> Un kit de départ pour <span className="font-bold">50€ seulement !*</span>
        <br /><br />
        Développée pour répondre aux besoins des écoles, des orthophonistes, des enseignants et des familles, la méthode Decroix est <span className="font-bold">déjà adoptée par de nombreux professionnels.</span> Elle constitue une alternative aux méthodes traditionnelles, en mettant l’accent sur la <span className="font-bold">pratique kinesthésique et la compréhension intuitive.</span>
        <br /><br />
        🎯 <span className="font-bold">Prêts à améliorer votre anglais ?</span> Pré-commandez votre kit et transformez votre apprentissage dès aujourd’hui !
      </p>
      <p>*Tarif dégressif disponible sur les achats groupés pour établissements éducatifs</p><br />
      <a className="text-xl text-blue-600 max-w-2xl mx-auto mb-8 text-justify underline" href="https://fr.ulule.com/methodedecroix/" target="_blank" rel="noopener noreferrer">Découvrez la page Ulule</a><br /><br />
      <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto">
        <div className="aspect-w-16 aspect-h-9 relative">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Présentation de la méthode"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}