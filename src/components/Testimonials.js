import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

export default function Testimonials() {
  return (
    <section className="bg-gray-900 py-24">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Testimonials</h2>
        <Carousel interval={3000} pause="hover" className="bg-gray-800 p-8 rounded-lg shadow-lg">
          
          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <img 
                src="me7.jpg" 
                alt="John Doe" 
                className="rounded-circle mr-4"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
              />
              <div className="text-left">
                <p className="text-xl mb-6 text-white">"Great designer! Really helped us bring our project to life..."</p>
                <h4 className="text-2xl font-semibold text-white">John Doe</h4>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <img 
                src="me4.png" 
                alt="Jane Smith" 
                className="rounded-circle mr-4"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
              />
              <div className="text-left">
                <p className="text-xl mb-6 text-white">"Amazing experience, truly exceeded our expectations."</p>
                <h4 className="text-2xl font-semibold text-white">Jane Smith</h4>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex align-items-center justify-content-center">
              <img 
                src="me5.jpg" 
                alt="Alex Brown" 
                className="rounded-circle mr-4"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
              />
              <div className="text-left">
                <p className="text-xl mb-6 text-white">"Creative and professional work delivered on time."</p>
                <h4 className="text-2xl font-semibold text-white">Alex Brown</h4>
              </div>
            </div>
          </Carousel.Item>
          
        </Carousel>
      </div>
    </section>
  );
}
