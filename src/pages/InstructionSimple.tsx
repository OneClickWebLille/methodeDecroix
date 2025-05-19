export default function InstructionSimple() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header avec bouton de retour */}
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                Mode d’emploi du mode Simple :
              </h1>
              <p className="text-xl text-gray-600">
                Objectif : Comprendre et construire des phrases simples au present simple et au past simple,  en anglais.
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
                <li>Plaques : Elles représentent la structure de la phrase (sujet, verbe, complément…).</li>
                <li>Jetons : Ils portent les mots (sujets, verbes, temps, marqueurs de conjugaison…).</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 1 : Choisir le temps de la phrase</h3>
              <p className="text-gray-700"> Prends la plaque "simple".</p>
              <p className="text-gray-700 mb-6"> Chaque plaque est un gabarit de phrase avec des emplacements pour les jetons.</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Présent simple : <em>I eat an apple.</em></li>
                <li>Past simple : <em>I ate an apple.</em></li>
              </ul>
              <p className="text-gray-700 mb-6">Juste en tournant le verbe pour le conjuguer, tu viens d’apprendre 2 temps !</p>
  
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 2 : Poser les jetons dans l’ordre</h3>
              <p className="text-gray-700 mb-6">Lis chaque emplacement sur la plaque et pose le jeton correspondant.</p>
              <p className="text-gray-700 mb-2">Pour le présent simple :</p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Sujet : Choisis un jeton sujet (jaune).</li>
                <li>Verbe : Choisis le verbe à l’infinitif sans "to" (frites bleues).</li>
                <li>Terminaison "s"/“es” : Si le sujet est he / she / it, ajoute le jeton “s” à côté du verbe. Si ton verbe se termine par une voyelle, ce sera “es” !</li>
                <li>Complément/adjectif : Pose un jeton approprié aux instructions.</li>
                </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                <p className="text-blue-800 font-medium">Exemple :</p>
                <p className="text-gray-700">
                  <strong>Sujet :</strong> He<br />
                  <strong>Verbe :</strong> eat<br />
                  <strong>Jeton :</strong>"+s"<br />
                  <strong>Complément :</strong> an apple<br />
                  <strong>Résultat :</strong> <em>He eats an apple.</em>
                </p>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pour le past simple :</h3>
              <p className="text-gray-700 mb-2">Sujet : Même principe.</p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>
                  <strong>Verbe :</strong> Choisis la forme au prétérit (ate / played / went…).
                  <br />
                  → Les verbes irréguliers sont sur des jetons spéciaux.
                </li>
                <li>
                  <strong>Complément :</strong> Idem.
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
                <p className="text-blue-800 font-medium">Exemple :</p>
                <p className="text-gray-700">
                  <strong>Sujet :</strong> They<br />
                  <strong>Verbe au passé :</strong> played<br />
                  <strong>Complément :</strong> football<br />
                  <strong>Résultat :</strong> <em>They played football.</em>
                </p>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 3 : Lire et prononcer la phrase</h3>
              <p className="text-gray-700 mb-6">Une fois les jetons posés, lis la phrase complète à voix haute. Tu peux la comparer avec une version correcte au dos de la plaque, si elle y figure.</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Étape 4 : Refaire avec d’autres sujets et verbes</h3>
              <p className="text-gray-700 mb-6">Change un seul jeton à la fois pour voir comment la phrase change. Par exemple, change "He" par "I" et observe que le “+s” disparaît au présent simple.</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ce que tu apprends :</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Identifier la forme correcte du verbe selon le sujet et le temps.</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Distinguer un verbe régulier d’un verbe irrégulier.</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Former des phrases simples, correctes et lisibles.</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">Il suffit de conjuguer un verbe pour passer du présent au passé !</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">L'anglais, c'est simple.</h4>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }