import { useState } from 'react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('web');

  const projects = {
    web: [
      { id: 1, title: 'Web Project 1', image: '/web1.jpg' },
      { id: 2, title: 'Web Project 2', image: '/web2.jpg' },
      { id: 3, title: 'Web Project 3', image: '/web4.jpg' },
    ],
    mobile: [
      { id: 1, title: 'Mobile Project 1', image: '/web3.jpg' },
      { id: 2, title: 'Mobile Project 2', image: '/web1.jpg' },
      { id: 3, title: 'Mobile Project 3', image: '/web2.jpg' },
    ],
    design: [
      { id: 1, title: 'Design Project 1', image: '/web4.jpg' },
      { id: 2, title: 'Design Project 2', image: '/web3.jpg' },
      { id: 3, title: 'Design Project 3', image: '/web1.jpg' },
    ],
    uiux:[
      { id: 1, title: 'ui Project 1', image: '/web1.jpg' },
      { id: 2, title: 'ux Project 2', image: '/web3.jpg' },
      { id: 3, title: 'ui/ux Project 3', image: '/web4.jpg' },
    ],

    
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section className="bg-gray-800 py-24">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">My Projects</h2>

        <div className="flex justify-center mb-8 space-x-4">
          <button
            className={`px-4 py-2 rounded ${selectedCategory === 'web' ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => handleCategoryChange('web')}
          >
            Web Development
          </button>
          <button
            className={`px-4 py-2 rounded ${selectedCategory === 'mobile' ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => handleCategoryChange('mobile')}
          >
            Mobile Development
          </button>
          <button
            className={`px-4 py-2 rounded ${selectedCategory === 'uiux' ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => handleCategoryChange('uiux')}
          >
            UIUx
          </button>
          <button
            className={`px-4 py-2 rounded ${selectedCategory === 'design' ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'}`}
            onClick={() => handleCategoryChange('design')}
          >
            Design
          </button>
        </div>

        <div className="flex flex-wrap justify-center">
          {projects[selectedCategory].map((project) => (
            <div key={project.id} className="w-full sm:w-1/3 md:w-1/4 p-4">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-gray-800 bg-opacity-50 transition-opacity duration-300 rounded-lg">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
