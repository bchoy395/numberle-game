// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "@popperjs/core"
import "bootstrap"
import "controllers"

document.addEventListener("turbo:frame-load", (event) => {
  const scrollContainer = document.getElementById("scroll-container");
  if (scrollContainer) {
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }
});
