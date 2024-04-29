alert("연결완료");

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDBkYTQwZTU5MmYwNGI1ZmFkN2U0OTAxYjI3ZTU0ZSIsInN1YiI6IjY2MmI0NzRmZjkxODNhMDExZTMxMDhiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uyjYDA7moZpOUipqoXcZtkXdU9x2UgHNW5VaKMya3Vk",
  },
};

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    const data = response.results;
    const element = document.querySelector("#contents");
    data.forEach((data) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      div.textContent = data.title;
      img.textContent = data.img;
      element.appendChild(div);
    });
  })
  .catch((err) => console.error(err));
