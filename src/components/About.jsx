import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container bg-gray-950">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title lg:ml-[5%]">À propos</h2>
          <p className="section-subtitle lg:ml-[15%]">
            Développeur web freelance spécialisé dans la création de sites modernes et performants
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">FreeWeb Studio</strong> est une entreprise de développement web freelance 
                spécialisée dans la création de sites vitrines et applications web sur mesure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                En tant que développeur indépendant, je mets mon expertise technique au service de votre projet pour créer 
                des solutions qui répondent à vos besoins et à ceux de vos utilisateurs.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4 pt-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Code de qualité</h3>
                  <p className="text-gray-400 text-sm">Code propre, maintenable et optimisé</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Performance</h3>
                  <p className="text-gray-400 text-sm">Sites rapides et optimisés</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Approche personnalisée</h3>
                  <p className="text-gray-400 text-sm">Solutions adaptées à vos besoins</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-4xl font-semibold text-white mb-2">50+</div>
                <div className="text-gray-400">Projets livrés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-semibold text-white mb-2">5 ans</div>
                <div className="text-gray-400">D'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-semibold text-white mb-2">100%</div>
                <div className="text-gray-400">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
