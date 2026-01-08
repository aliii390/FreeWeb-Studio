import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce',
      description: 'Plateforme e-commerce avec gestion de panier et paiement sécurisé.',
      technologies: ['React', 'Node.js', 'Stripe'],
      category: 'E-commerce'
    },
    {
      title: 'Site Restaurant',
      description: 'Site web pour restaurant avec réservation en ligne et galerie photos.',
      technologies: ['Next.js', 'Tailwind CSS'],
      category: 'Vitrine'
    },
    {
      title: 'Application SaaS',
      description: 'Application web de gestion avec tableau de bord analytique.',
      technologies: ['Vue.js', 'TypeScript', 'Firebase'],
      category: 'SaaS'
    },
    {
      title: 'Portfolio',
      description: 'Portfolio interactif avec galerie dynamique et animations.',
      technologies: ['React', 'GSAP'],
      category: 'Portfolio'
    },
    {
      title: 'Landing Page',
      description: 'Page d\'atterrissage avec formulaire de contact et intégration email.',
      technologies: ['Gatsby', 'Contentful'],
      category: 'Landing'
    },
    {
      title: 'Plateforme Éducation',
      description: 'Plateforme d\'apprentissage en ligne avec cours vidéo et quiz.',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      category: 'Éducation'
    }
  ];

  return (
    <section id="portfolio" className="section-container bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            Quelques réalisations récentes
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card"
            >
              {/* Project image placeholder */}
              <div className="h-40 bg-gray-800 border border-gray-700 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-gray-600 text-sm">{project.category}</div>
              </div>

              {/* Project content */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Vous avez un projet similaire ?</p>
          <a href="#contact" className="btn-primary">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
