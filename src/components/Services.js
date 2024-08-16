// components/Services.js
export default function Services() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Services</h2>
        <div className="flex flex-wrap justify-around">
          <div className="bg-gray-800 text-left p-8 rounded-lg shadow-lg mb-8 w-full sm:w-1/3">
            <img src="service1.png" alt="Web Design" className="mb-4 w-16 h-16 mx-auto"/>
            <h3 className="text-2xl font-semibold mb-4 text-white">Web Design</h3>
            <p className="text-gray-300">Creating visually appealing designs...</p>
          </div>
          <div className="bg-gray-800 text-left p-8 rounded-lg shadow-lg mb-8 w-full sm:w-1/3">
            <img src="service2.png" alt="Mobile Design" className="mb-4 w-16 h-16 mx-auto"/>
            <h3 className="text-2xl font-semibold mb-4 text-white">Mobile Design</h3>
            <p className="text-gray-300">Designing mobile-first responsive interfaces...</p>
          </div>
          <div className="bg-gray-800 text-left p-8 rounded-lg shadow-lg mb-8 w-full sm:w-1/3">
            <img src="service3.png" alt="Branding" className="mb-4 w-16 h-16 mx-auto"/>
            <h3 className="text-2xl font-semibold mb-4 text-white">Branding</h3>
            <p className="text-gray-300">Building strong brand identities...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
