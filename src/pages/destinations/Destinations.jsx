import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Destinations() {
const [destinations, setDestinations] = useState([]);

useEffect(() => {
axios
.get('http://localhost:3000/destinations')
.then((response) => {
setDestinations(response.data);
})
.catch((error) => {
console.error('API Error:', error);
});
}, []);

return ( <div className="p-8"> <h1 className="text-3xl font-bold mb-6">
Destinations </h1>


  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {destinations.map((destination) => (
      <div
        key={destination.id}
        className="bg-white rounded-2xl shadow-md p-6"
      >
        <h2 className="text-xl font-bold mb-2">
          {destination.name}
        </h2>

        <p className="text-sm text-gray-500 mb-3">
          {destination.country}
        </p>

        <p className="text-gray-600">
          {destination.description}
        </p>
      </div>
    ))}
  </div>
</div>


);
}
