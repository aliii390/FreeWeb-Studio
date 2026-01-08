import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-gray-300 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Développeur Web Freelance
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight">
            Développement web{' '}
            <span className="text-blue-500">
              sur mesure
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Je crée des sites web performants et modernes pour votre entreprise. 
            Solutions personnalisées, code propre, résultats concrets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary">
              Discutons de votre projet
            </a>
            <a href="#portfolio" className="btn-secondary">
              Voir mes réalisations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
