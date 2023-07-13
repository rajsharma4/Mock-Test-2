const loader = document.getElementById("loader");
const dataList = document.getElementById("list");
loader.style.display = "block";

// Fetch data from the JSONPlaceholder API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {

    loader.style.display = "none";

    data.forEach(item => {
      const listItem = document.createElement("li");
      listItem.textContent = item.title;
      dataList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error(error);

    loader.style.display = "none";
    dataList.innerHTML = "<li>Error occurred while fetching data</li>";
  });