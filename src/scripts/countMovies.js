// const countMovies = (tvArrayCount) => tvArrayCount.length;

export default function countMovies(className) {
  const elements = document.querySelectorAll(className);
  return elements.length;
}

// export default countMovies;
