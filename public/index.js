function fetchData() {
  fetch('/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.getElementById("title").textContent = data.title;
    })
    .catch((err) => {
      console.log(err);
    });
}
