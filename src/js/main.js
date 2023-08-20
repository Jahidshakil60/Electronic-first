import viteLogo from "../../public/vite.svg";
import "../css/style.css";
import { handleNavClick } from "./helper.js";

document.querySelector("#app").innerHTML = `
  <div class="main-container">
  <div class="hero_container">
  <div class="nav_container">
  <div class="nav-item">
    <a href="#">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <div class="nav-item_middle">
      <p>Trending</p>
      <p>Pre-orders</p>
      <p>Upcoming</p>
      <p>Support 24/7</p>
    </div>
    <div class="nav-item_last">
      <span class="material-symbols-outlined"> shopping_cart </span>
      <span class="material-symbols-outlined"> person </span>
    </div>
  </div>
  <div class="nav-element_single">
    <div  id="pc" class="single-item pc-link">
      <span class="material-symbols-outlined"> desktop_windows </span>
      <p class="">PC</p>
      <span class="material-symbols-outlined"> expand_more </span>
    </div>
    <div class="single-item playstation-link">
      <span class="material-symbols-outlined">stadia_controller</span>
      <p class="">PlayStation</p>
      <span class="material-symbols-outlined"> expand_more </span>
    </div>
    <div class="single-item xbox-link">
      <span class="material-symbols-outlined"> desktop_windows </span>
      <p class="">Xbox</p>
      <span class="material-symbols-outlined"> expand_more </span>
    </div>
    <div class="single-item nintendo-link">
      <span class="material-symbols-outlined"> desktop_windows </span>
      <p class="">Nintendo</p>
      <span class="material-symbols-outlined"> expand_more </span>
    </div>
    <div id="search" class="search">
      <span class="material-symbols-outlined"> search </span>
   
       <p  class="cross_input active">+</p>
    </div>
    <div id="input_container" class="input-container active">
    <input
      type="text"
      placeholder="Mincraft,RPG,multiplayer..."
      class="search_input "
    />
    <p class="search_text">Advanced search</p>
    </div>
    <div id="nav-popup" class="nav_popup">
    <div class="popup-heading_first">
      <p>Platforms</p>
      <p>View all</p>
    </div>
    <div class="popup_item">
      <div class="item">
        <img src="${viteLogo}" class="item-logo" alt="Vite logo" />
        <p>Steam</p>
      </div>
      <div class="item">
        <img src="${viteLogo}" class="item-logo" alt="Vite logo" />
        <p>EA app</p>
      </div>
      <div class="item">
        <img src="${viteLogo}" class="item-logo" alt="Vite logo" />
        <p>Battle.net</p>
      </div>
      <div class="item">
        <img src="${viteLogo}" class="item-logo" alt="Vite logo" />
        <p>Rockstar</p>
      </div>
      <div class="item">
        <img src="${viteLogo}" class="item-logo" alt="Vite logo" />
        <p>Gog.com</p>
      </div>
      <div class="item">
        <img src="${viteLogo}" class="item-logo" alt="Vite logo" />
        <p>Microsoft Store</p>
      </div>
      <div class="item">
        <img src="${viteLogo}" class="item-logo" alt="Vite logo" />
        <p>Epic</p>
      </div>
      <div class="item">
        <img src="${viteLogo}" class="item-logo" alt="Vite logo" />
        <p>Steam</p>
      </div>
    </div>
  </div>
  </div>
  </div>
  </div>
  <p class="tranding">Tranding</p>
  </div>
`;

handleNavClick(document.querySelector("#pc"),document.querySelector("#nav-popup"),document.querySelector("#search"),document.querySelector("#input_container"),document.querySelector(".cross_input"));
