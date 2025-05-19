export default function InstructionPerfect() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header avec bouton de retour */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
              Mode d’emploi du mode Perfect :
            </h1>
            <p className="text-xl text-gray-600">
              Objectif : Comprendre et construire des phrases en utilisant le present perfect et le past perfect, en anglais.
            </p>
          </div>
          <button
            onClick={() => window.location.href = '/instructions'}
            className="flex items-center px-5 py-3 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 border border-gray-200 hover:border-blue-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Retour
          </button>
        </div>

        {/* Contenu des instructions */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Matériel utilisé :</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Plaques : Elles représentent la structure de la phrase : sujet + auxiliaire + participe passé + complément.</li>
              <li>Jetons : Ils portent les mots et éléments grammaticaux (pronoms, auxiliaires, verbes, terminaisons…).</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 1 : Choisir le temps de la phrase</h3>
            <p className="text-gray-700">Prends la plaque "perfect".</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Present perfect : <em>I have eaten an apple.</em></li>
              <li>Past perfect : <em>I had eaten an apple.</em></li>
            </ul>
            <p className="text-gray-700 mb-6">En changeant seulement l’auxiliaire, tu passes du présent au passé.</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 2 : Poser les jetons dans l’ordre</h3>
            <p className="text-gray-700 mb-2">Lis chaque emplacement sur la plaque et place le jeton adapté.</p>
            
            <p className="text-gray-700 mb-2">Pour le present perfect :</p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Sujet : Prends un jeton jaune.</li>
              <li>Auxiliaire "HAVE" au présent : <br /> have pour I / you / we / they, <br /> has pour he / she / it.</li>
              <li>Verbe au participe passé :
                <br />– régulier : forme en "–ed" (jetons plats),
                <br />– irrégulier : forme spéciale (frites bleues).
              </li>
              <li>Complément : Selon l’indication.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
              <p className="text-blue-800 font-medium">Exemple :</p>
              <p className="text-gray-700">
                <strong>Sujet :</strong> She<br />
                <strong>Auxiliaire :</strong> has<br />
                <strong>Verbe :</strong> gone<br />
                <strong>Complément :</strong> to school<br />
                <strong>Résultat :</strong> <em>She has gone to school.</em>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Pour le past perfect :</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Sujet : Même principe.</li>
              <li>Auxiliaire HAD : Utilisé pour tous les sujets.</li>
              <li>Participe passé : Même principe.</li>
              <li>Complément : Idem.</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
              <p className="text-blue-800 font-medium">Exemple :</p>
              <p className="text-gray-700">
                <strong>Sujet :</strong> They<br />
                <strong>Auxiliaire :</strong> had<br />
                <strong>Verbe :</strong> played<br />
                <strong>Complément :</strong> football<br />
                <strong>Résultat :</strong> <em>They had played football.</em>
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 3 : Lire la phrase à voix haute</h3>
            <p className="text-gray-700 mb-6">Lis ta phrase lentement, mot par mot. Observe bien comment le temps se forme avec un auxiliaire + participe passé.</p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 4 : Tester des variantes</h3>
            <p className="text-gray-700 mb-6">
              Change : le sujet (I ➝ he, they…), l’auxiliaire (have ➝ had), ou le verbe (regular ou irregular).
              <br />Observe les changements grammaticaux.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Ce que tu apprends :</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Le mode perfect fonctionne toujours avec l’auxiliaire HAVE.</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Utiliser le present perfect pour un lien passé-présent.</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Utiliser le past perfect pour une action avant une autre dans le passé.</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Différencier "have / has" (présent) et "had" (passé).</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Distinguer verbes réguliers et irréguliers au participe passé.</h4>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Exprimer des actions passées liées à un effet présent ou passé antérieur.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
