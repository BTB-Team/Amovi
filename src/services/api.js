import axios from 'axios';

const api = axios.create({
baseURL: 'http://localhost:3000',
headers: {
'Content-Type': 'application/json',
},
});

// Destinations
export const getDestinations = () => {
return api.get('/destinations');
};

// Tours
export const getTours = () => {
return api.get('/tours');
};

// Services
export const getServices = () => {
return api.get('/services');
};

// Blog
export const getBlogPosts = () => {
return api.get('/blogPosts');
};

// Testimonials
export const getTestimonials = () => {
return api.get('/testimonials');
};

// Master Requests
export const createMasterRequest = (data) => {
return api.post('/masterRequests', data);
};

// Contact Messages
export const createContactMessage = (data) => {
return api.post('/contactMessages', data);
};

export default api;
