import RESTAURANT_API_ENDPOINT from "../../globals/api-endpoint";

const createCategoryTemplate = (categories) =>
  categories.map((category) => `<span>${category.name}</span>`);

const createRestaurantDetailTemplate = (restaurant) => `
    <img class="restaurant-detail-poster" src="${RESTAURANT_API_ENDPOINT.RESTAURANT_IMAGE(
      "small",
      restaurant.pictureId
    )}" alt="${restaurant.name}">
    <div class="restaurant-detail-content">

        <h2 class="restaurant-detail-title">${restaurant.name}</h2>

        <table class="restaurant-detail-table">
            <tbody>
                <tr>
                    <th>
                        <i class="fa fa-solid fa-star"></i>
                        <span>Rating</span>
                    </th>
                    <td>${restaurant.rating}</td>
                </tr>

                <tr>
                    <th>
                        <i class="fa fa-building"></i>
                        <span>City</span>
                    </th>
                    <td>${restaurant.city}</td>
                </tr>

                <tr>
                    <th>
                        <i class="fa fa-map-marker"></i>
                        <span>Address</span>
                    </th>
                    <td>${restaurant.address}s</td>
                </tr>

                <tr>
                    <th>
                        <i class="fa fa-solid fa-tag"></i>
                        <span>Categories</span>
                    </th>
                    <td>${createCategoryTemplate(restaurant.categories)}</td>
                </tr>
            </tbody>
        </table>
         <div class="restaurant-detail-description">
            <h3>Description</h3>
            <p>${restaurant.description}</p>
        </div>
    </div>
       
`;

const createMenuTemplate = (menu) => `
    <article class="menu-item">
        <span class="menu-item-title">${menu.name}</span>
    </article>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item-header">
             <img src="${RESTAURANT_API_ENDPOINT.RESTAURANT_IMAGE(
               "small",
               restaurant.pictureId
             )}" alt="${restaurant.name}" class="restaurant-item-header-poster">
            

            <div class="restaurant-item-header-rating">
                <p><i class="fa fa-solid fa-star" style="color: #ffd43b;"></i><span class="restaurant-item-header-rating-score">${
                  restaurant.rating
                }</span></p>
            </div>
        </div>
    
        <div class="restaurant-item-content">
            <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
            <div class="location">
                <i class="fa fa-map-marker"></i><span class="location">${
                  restaurant.city
                }</span>
            </div>
            
            <p>${restaurant.description}</p>
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createCustomerReviewTemplate = (customerReview) => `
  <article class="review-item">
    <div class="review-item-header">
      <strong class="review-item-name">${customerReview.name}</strong>
      <span class="review-item-date">${customerReview.date}</span>
    </div>
    <p class="review-item-content">${customerReview.review}</p>
  </article>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createMenuTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createCustomerReviewTemplate,
};
