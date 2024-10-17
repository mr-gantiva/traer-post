const getPosts = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    // console.log(data);

    const posteos = data.map(
      (post) =>
        `<div data-aos="fade-up">
      <ul>
        <li>
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        </li>
      </ul>
    </div>`
    );
    document.getElementById("post-data").innerHTML = posteos.join("");
    console.log(posteos);
  } catch (error) {
    console.error("Error al obtener los posts:", error);
  }
};
