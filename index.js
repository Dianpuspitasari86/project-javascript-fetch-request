// function getUserFollower() {
//   let div = document.createElement("div");
//   fetch("https://api.github.com/users/Dianpuspitasari86/followers")
//     .then(res => res.json())
//     .then(follower => {
//       follower.map(data => {
//         const img = document.createElement("img");
//         img.setAttribute("src", data.avatar_url);
//         document.body.append(img);
//       });
//     });
// }

function getUserFollower() {
  let div = document.createElement("div");
  fetch("https://api.github.com/users/Dianpuspitasari86/followers")
    .then(response => response.json())
    .then(follower => {
      follower.map(data => {
        let image = document.createElement("figure");
        image.className = "figure m-3";

        let link = document.createElement("a");
        link.classname = "text-center";
        link.href = data.html_url;

        let img = document.createElement("img");
        img.setAttribute("src", data.avatar_url);
        img.className = "figure-img img-fluid rounded-circle";
        img.style = "height: 250px";

        let text = document.createElement("figcaption");
        text.className = "figure-caption";
        text.innerText = data.login;


        link.append(text);
        image.append(img);
        // image.append(text);
        image.append(link);
        document.getElementById("div").append(image);
      });
    });
}
