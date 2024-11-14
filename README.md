# Photo Gallery

A simple photo gallery app that uses the [Unsplash API](https://unsplash.com/developers) to fetch and display a paginated list of images. Built with HTML, CSS (Tailwind), and JavaScript.

## Features

- Fetches images from the Unsplash API
- Displays image details: name, location, creation date, and likes
- Pagination to view more images
- Responsive and visually appealing layout using Tailwind CSS

## Demo

Check out the live version on [Photo Gallery](https://md-mohin-uddin.github.io/photo-gallery-app/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- Unsplash API key. Sign up at [Unsplash](https://unsplash.com/developers) to get an access key.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/md-mohin-uddin/photo-gallery-app

2. Navigate to the project directory:

    `cd photo-gallery-app`
  
3. Open the index.html file in your browser to view the app locally.

4. Optional: If deploying to GitHub Pages, add your API key directly to the main.js file in place of the placeholder.

## Setup
1. Open `main.js`.

2. Replace the placeholder in the ACCESS_KEY variable with your Unsplash API key:

      `const ACCESS_KEY = "your_unsplash_access_key_here";`
  
- Note: For security, be cautious about exposing your API key in public repositories. For production applications, consider using serverless functions or a backend server to keep your API key secure.

## Usage
- View the live app on GitHub Pages or open `index.html` locally.
- Browse the photo gallery with pagination.
- View image details such as the photographer’s name, location, creation date, and the number of likes.

## Code Structure
- index.html - The main HTML file for the app
- style.css - Tailwind CSS styling
- main.js - JavaScript logic for fetching and displaying images
