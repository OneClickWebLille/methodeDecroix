export default function InstructionContinuous() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header avec bouton de retour */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                Mode d’emploi du mode Continuous :
              </h1>
              <p className="text-xl text-gray-600">
               Objectif : Comprendre et construire des phrases en utilisant le present continuous et past continuous, en anglais.
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
              <p className="text-gray-700">
               Plaques : Elles montrent la structure de la phrase (sujet, auxiliaire, verbe en -ing, complément…).
              </p>
              <p className="text-gray-700 mb-6">
              Jetons : Ils portent les mots et éléments grammaticaux (pronoms, auxiliaires, verbes, terminaisons…).
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 1 : Choisir le temps de la phrase</h3>
              <p className="text-gray-700">Prends la plaque "continuous".</p>
              <p className="text-gray-700 mb-6">Chaque plaque t’indique l’ordre des jetons à placer.</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Present continuous : <em>I am eating an apple.</em></li>
                <li>Past continuous : <em>I was eating an apple.</em></li>
              </ul>
              <p className="text-gray-700 mb-6">En changeant juste l’auxiliaire, tu passes du présent au passé.</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 2 : Poser les jetons dans l’ordre</h3>
              <p className="text-gray-700 mb-6">Lis chaque emplacement sur la plaque et place le jeton adapté.</p>
              <p className="text-gray-700 mb-2">Pour le présent continu :</p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Sujet : Choisis un jeton sujet (jaune).</li>
                  <li>Auxiliaire “BE” au présent :</li>
                  <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                    <li>Pour I : "am".</li>
                    <li>Pour he, she, it : "is".</li>
                    <li>Pour you, we, they : "are".</li>
                  </ul>
                  <li>Verbe : Prends la base verbale (jeton bleu).</li>
                  <li>Jeton “-ing” : Ajoute le jeton “-ing” à côté du verbe. “-ing” signifie “en train de”. </li>
                  
                </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                <p className="text-blue-800 font-medium">Exemple :</p>
                <p className="text-blue-700">I am eating : je suis en train de manger.</p>
              </div>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Complément/adjectif : Pose un jeton approprié aux instructions.</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                <p className="text-blue-800 font-medium">Exemple :</p>
                <p className="text-blue-700">Sujet : She</p>
                <p className="text-blue-700">Auxiliaire : is</p>
                <p className="text-blue-700">Verbe : play</p>
                <p className="text-blue-700">Jeton : -ing</p>
                <p className="text-blue-700">Complément : football</p>
                <p className="text-blue-700">Résultat : She is playing football.</p>
              </div>
              <p className="text-gray-700 mb-2">Pour le past continuous :</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Sujet : Comme au présent (jeton jaune).</li>
                <li>Auxiliaire “BE” au passé :</li>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Pour I, he, she, it : "was".</li>
                  <li>Pour you, we, they : "were".</li>
                </ul>
                <li>Verbe + -ing : Même principe.</li>
                <li>Complément : Idem.</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                <p className="text-blue-800 font-medium">Exemple :</p>
                <p className="text-blue-700">Sujet : We</p>
                <p className="text-blue-700">Auxiliaire : were</p>
                <p className="text-blue-700">Verbe : eat</p>
                <p className="text-blue-700">Jeton : -ing</p>
                <p className="text-blue-700">Complément : dinner</p>
                <p className="text-blue-700">Résultat : We were eating dinner. (nous étions en train de manger)</p>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 3 : Lire et prononcer la phrase</h3>
              <p className="text-gray-700 mb-6">Relis la phrase à voix haute.</p>
              <p className="text-gray-700 mb-6">N’hésite pas à faire des pauses pour bien articuler chaque partie.</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 4 : Rejouer avec d'autres combinaisons</h3>
              <p className="text-gray-700 mb-6">Change les jetons pour créer de nouvelles phrases.</p>
              <p className="text-gray-700 mb-6">Change le sujet ou le temps (am ➝ was / are ➝ were…) pour voir comment ça modifie la phrase.</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ce que tu apprends :</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Le mode continuous fonctionne toujours avec l’auxiliaire BE, au présent comme au passé.</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">On utilise le PRESENT continuous pour parler d’une action en cours, qui se passe maintenant.</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">On utilise le PAST continuous pour une action qui était en cours à un moment précis dans le passé.</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Le sens de “–ing” et pourquoi il modifie le verbe.</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Former des phrases fluides et naturelles, comme en anglais parlé.</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-2">Le temps change si on change un seul mot - Chaque mot est important !</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }