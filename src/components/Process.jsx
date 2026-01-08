import React from 'react';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Analyse',
      description: 'Échange pour comprendre vos objectifs, votre cible et vos contraintes. Définition du cahier des charges.',
    },
    {
      number: '02',
      title: 'Conception',
      description: 'Création de maquettes et prototypes. Validation du design avant le développement.',
    },
    {
      number: '03',
      title: 'Développement',
      description: 'Implémentation avec les meilleures pratiques. Code propre, tests et optimisations.',
    },
    {
      number: '04',
      title: 'Livraison',
      description: 'Mise en ligne et formation si nécessaire. Accompagnement post-lancement.',
    }
  ];

  return (
    <section id="process" className="section-container bg-gray-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title lg:ml-[5%]">Processus</h2>
          <p className="section-subtitle lg:ml-[20%]">
            Méthodologie pour garantir la réussite de votre projet
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step card */}
              <div className="card text-center">
                {/* Step number */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-gray-900 border border-gray-800 text-blue-500 text-xl font-semibold mb-6">
                  {step.number}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
