const countMovies = (className) => {
  const elements = document.querySelectorAll(className);
  return elements.length;
};

export default countMovies;
