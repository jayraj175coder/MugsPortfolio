export default function HeroSection() {
  return (
      <section className="bg-gray-700 text-center py-24">
          <div className="container flex flex-col md:flex-row justify-center items-center">
              <div className="md:w-1/2">
               <h5>HI I am</h5>
                 <h4 className="text-orange">Muhammad Umair</h4>
                  <h1 className="text-5xl font-bold mb-4">UI & UX Designer</h1>
                  <p className="text-xl mb-6">Creative Designer based in XYZ.</p>
                  <button className="bg-orange-500 text-white px-8 py-3 rounded hover:bg-orange-600 transition">Hire Me</button>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                  <img src="me1.png" alt="Designer Image" className="rounded-full shadow-lg"/>
              </div>
          </div>
      </section>
  );
}
