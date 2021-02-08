import axios from 'axios';

const apiKey = 'AIzaSyB6yZoZonvt9XeuvSuXAMn3OWp6qweC2TM';
axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/';
axios.interceptors.request.use(config => {
    // add google api key here
    const key = `&key=${apiKey}`;
    config.url = `${config.url}${key}`;
    return config;
}, (error) => {
    return Promise.reject(error);
});
const appService = {
    getBooks() {
        const query = `volumes?q=books+inauthor:stephen+inauthor:king&maxResults=40`;
        return new Promise((resolve) => {
            axios.get(query).then(response => {
                resolve(response)
            });
        });
    }
}
export default appService;
