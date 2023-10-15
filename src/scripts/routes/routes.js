import Home from "../views/pages/home";
import DetailRestaurant from "../views/pages/detail";
import Favorite from "../views/pages/favorite";

const routes = {
  "/": Home,
  "/detail/:id": DetailRestaurant,
  "/favorite": Favorite,
};

export default routes;
