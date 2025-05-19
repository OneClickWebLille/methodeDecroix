export default function InstructionHome() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Guide d'Utilisation
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez comment tirer le meilleur parti de notre application grâce à nos guides complets.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            <InstructionCard 
              title="Simple" 
              description="Instruction pour les temps au 'simple'" 
              href="/instructions/simple"
              color="from-blue-500 to-blue-600"
            />
            <InstructionCard 
              title="Continuous" 
              description="Instruction pour les temps au 'continuous'" 
              href="/instructions/continuous"
              color="from-yellow-500 to-yellow-600"
            />
            <InstructionCard 
              title="Perfect" 
              description="Instruction pour les temps au 'perfect'" 
              href="/instructions/perfect"
              color="from-red-500 to-red-600"
            />
          </div>
        </div>
      </div>
    );
  }
  
  function InstructionCard({ title, description, href, color }) {
    return (
      <a
        href={href}
        className={`group block bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
      >
        <div className={`h-2 bg-gradient-to-r ${color}`}></div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
            {title}
          </h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition">
            Voir le guide
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </a>
    );
  }