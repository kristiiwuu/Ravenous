require('dotenv').config();

const apiKey = process.env.API_KEY; // environment variable

const Yelp = {
    search(term, location, sortBy) {
        // query string: ?key=value
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                },
            }
        ).then( (response) => {
            return response.json();
        }).then( (jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => ({
                    id: business.id,
                    name: business.name,
                    img: business.image_url,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipcode: business.location.zip_code,
                    category: business.categories[0].title,
                    stars: business.rating,
                    reviews: business.review_count
                }))
            }
        })
    },
};

export default Yelp;