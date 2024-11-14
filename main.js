const ACCESS_KEY = "qqf0-i8vDtNZCR7oetxeHk9RyTI6x3kUJJnP-4CouXU";
const BASE_URL = "https://api.unsplash.com/photos";
const SEARCH_URL = "https://api.unsplash.com/search/photos";
const IMAGES_PER_PAGE = 12;

let currentPage = 1;
let currentQuery = "";

// Fetch and display images
async function fetchImages(page, query = "") {
  const gallery = document.getElementById("gallery");
  const pageInfo = document.getElementById("pageInfo");
  const loadingIndicator = document.getElementById("loadingIndicator");

  // Show loading indicator and clear the gallery
  loadingIndicator.classList.remove("hidden");
  gallery.innerHTML = "";

  const url = query
    ? `${SEARCH_URL}?query=${query}&page=${page}&per_page=${IMAGES_PER_PAGE}`
    : `${BASE_URL}?page=${page}&per_page=${IMAGES_PER_PAGE}`;

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    });

    if (!response.ok) throw new Error("Error fetching images");

    const data = await response.json();
    const images = query ? data.results : data;
    gallery.innerHTML = images
      .map(
        (img) => `
          <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div class="relative">
              <img src="${img.urls.small}" alt="${
          img.alt_description || "Image"
        }" class="w-full h-60 object-cover opacity-90">
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-75 hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div class="p-4">
              <p class="text-lg font-semibold text-yellow-500 truncate">${
                img.alt_description || "No description"
              }</p>
              
              <!-- Photographer Details -->
              <div class="mt-3 text-sm text-gray-300 space-y-2">
                <p><i class="fas fa-user mr-2 text-yellow-400"></i> ${
                  img.user.name || "Unknown"
                }</p>
                <p><i class="fas fa-map-marker-alt mr-2 text-yellow-400"></i> ${
                  img.user.location || "Unknown location"
                }</p>
                <p><i class="fas fa-calendar-alt mr-2 text-yellow-400"></i> ${new Date(
                  img.created_at
                ).toLocaleDateString()}</p>
                <p><i class="fas fa-heart mr-2 text-yellow-400"></i> ${
                  img.likes
                } Likes</p>
              </div>
            </div>
          </div>
        `
      )
      .join("");

    // Update pagination info
    pageInfo.textContent = `Page ${page}`;
    document.getElementById("prevPage").disabled = page === 1;
  } catch (error) {
    gallery.innerHTML =
      '<p class="text-center col-span-full text-red-500">Failed to load images.</p>';
    console.error(error);
  } finally {
    loadingIndicator.classList.add("hidden");
  }
}

// Pagination control handlers
document.getElementById("nextPage").addEventListener("click", () => {
  currentPage++;
  fetchImages(currentPage, currentQuery);
});

document.getElementById("prevPage").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchImages(currentPage, currentQuery);
  }
});

// Search functionality
document.getElementById("searchButton").addEventListener("click", () => {
  const searchInput = document.getElementById("searchInput").value.trim();
  if (searchInput) {
    currentQuery = searchInput;
    currentPage = 1;
    fetchImages(currentPage, currentQuery);
  }
});

// Initial load
fetchImages(currentPage);
