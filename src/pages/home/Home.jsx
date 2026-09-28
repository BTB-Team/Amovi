import { useState } from 'react';
import { useLangStore } from '../../store/useLangStore';
import {
getDestinations,
getTours,
getTestimonials,
} from '../../services/api';

export default function Home() {
const { currentLang, translations } = useLangStore();

const [destinations, setDestinations] = useState([]);
const [tours, setTours] = useState([]);
const [testimonials, setTestimonials] = useState([]);

const loadData = () => {
getDestinations()
.then((response) => {
setDestinations(response.data);
})
.catch((error) => {
console.error('Destinations API Error:', error);
});

```
getTours()
  .then((response) => {
    setTours(response.data);
  })
  .catch((error) => {
    console.error('Tours API Error:', error);
  });

getTestimonials()
  .then((response) => {
    setTestimonials(response.data);
  })
  .catch((error) => {
    console.error('Testimonials API Error:', error);
  });
```

};

return ( <div className="p-8 space-y-10">


  <section className="text-center">
    <h1 className="text-4xl font-extrabold text-amovi-primary mb-4">
      {currentLang === 'fa'
        ? 'به اموی تراول خوش آمدید'
        : 'Welcome to Amovi Travel'}
    </h1>

    <p className="text-lg text-slate-600">
      {currentLang === 'fa'
        ? 'سفر خود را با ما تجربه کنید.'
        : 'Experience your journey with us.'}
    </p>

    <button
      onClick={loadData}
      className="mt-6 bg-amovi-secondary text-white font-bold py-3 px-6 rounded-lg"
    >
      {currentLang === 'fa'
        ? 'دریافت اطلاعات'
        : 'Load Data'}
    </button>
  </section>

  <section>
    <h2 className="text-2xl font-bold mb-6">
      {translations.destinations}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {destinations.map((destination) => {
        const content = destination[currentLang];

        return (
          <div
            key={destination.id}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <h3 className="text-xl font-bold mb-2">
              {content.name}
            </h3>

            <p className="text-sm text-gray-500 mb-3">
              {content.country}
            </p>

            <p className="text-gray-600">
              {content.description}
            </p>
          </div>
        );
      })}
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-bold mb-6">
      {translations.tours}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tours.map((tour) => {
        const content = tour[currentLang];

        return (
          <div
            key={tour.id}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <h3 className="text-xl font-bold mb-2">
              {content.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {content.description}
            </p>

            <p className="font-semibold">
              {tour.durationDays}{' '}
              {currentLang === 'fa' ? 'روز' : 'Days'}
            </p>
          </div>
        );
      })}
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-bold mb-6">
      {currentLang === 'fa' ? 'نظرات مشتریان' : 'Testimonials'}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => {
        const content = testimonial[currentLang];

        return (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <div className="text-yellow-500 mb-3">
              {'★'.repeat(testimonial.rating)}
            </div>

            <p className="text-gray-600 mb-4">
              "{content.message}"
            </p>

            <h3 className="font-bold">
              {content.name}
            </h3>

            <p className="text-sm text-gray-500">
              {content.country}
            </p>
          </div>
        );
      })}
    </div>
  </section>

</div>


);
}
