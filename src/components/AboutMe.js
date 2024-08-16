export default function AboutMe() {
  return (
    <section className="bg-gray-800 py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Image Container */}
        <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <img 
            src="/me2.png" 
            alt="Designer Image" 
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg" 
          />
        </div>

        {/* Text Container */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto md:mx-0">Passionate UI & UX Designer with over 5 years of experience...</p>

          {/* Skills Section */}
          <div className="max-w-3xl mx-auto md:mx-0 mt-12">
            {['UX', 'Website Design', 'App Design', 'Graphic Design'].map((skill, index) => (
              <div key={index} className="flex justify-between items-center mb-4">
                <span className="text-gray-300">{skill}</span>
                <div className="w-full bg-gray-600 rounded-full h-2 ml-4">
                  <div 
                    className="bg-orange-500 h-2 rounded-full" 
                    style={{ width: `${90 - index * 5}%` }} // Adjust width dynamically based on skill index
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
