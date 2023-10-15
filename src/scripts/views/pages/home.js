/* eslint-disable operator-linebreak */
import RestaurantSource from "../../data/restaurant-resource";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-content">
          <div class="hero-title">Selamat Datang di Foodie Apps.</div>
          <div class="hero-tagline">Jelajahi Restoran Terbaik di Sekitar Anda</div>
          <a href="#mainContent" class="hero-button">Explore Restaurant</a>
        </div>
      </div>

      <div class="content">
        <h2 class="content-heading">Explore Restaurant</h2>
        <div id="restaurants" class="restaurants">
      
        </div>
      </div>
    `;
  },

  async afterRender() {
    //
    const restaurants = await RestaurantSource.getRestaurants();

    // console.log(restaurants);

    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
