const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "ff07bee4b7f09b03d6df007e1a48400e",
  originalImage: (imagePath) =>
    `https://image.tmdb.org/t/p/original/${imagePath}`,
  w500Image: (imagePath) => `https://image.tmdb.org/t/p/w500/${imagePath}`,
};

export default apiConfig;
