function toggleTheme() {
   const body = document.body;
   const svgIcon = document.getElementById("theme-icon");

   body.classList.toggle("dark-theme");

   if (body.classList.contains("dark-theme")) {
      svgIcon.innerHTML = '<path d="M32 8V10.6667M32 53.3333V56M10.6667 32H8M16.8377 16.8377L14.6667 14.6667M47.1624 16.8377L49.3333 14.6667M16.8377 47.1733L14.6667 49.3336M47.1624 47.1733L49.3333 49.3336M56 32H53.3333M42.6667 32C42.6667 37.8909 37.8909 42.6667 32 42.6667C26.109 42.6667 21.3333 37.8909 21.3333 32C21.3333 26.109 26.109 21.3333 32 21.3333C37.8909 21.3333 42.6667 26.109 42.6667 32Z" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
   } else {
      svgIcon.innerHTML = '<path d="M8.85425 31.156C8.85425 44.4109 19.5994 55.156 32.8542 55.156C42.9534 55.156 51.5955 48.9181 55.1382 40.0853C52.3739 41.1963 49.3491 41.8224 46.1875 41.8224C32.9326 41.8224 22.1876 31.0773 22.1876 17.8224C22.1876 14.6757 22.8045 11.6336 23.9055 8.87988C15.0829 12.4274 8.85425 21.0643 8.85425 31.156Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />'
   }
}
