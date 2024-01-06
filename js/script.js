const overview = document.querySelector(".overview");
const username = "Melissa-Maria";

//create an async function to fetch information from your GitHub Profile
const gitHubData = async function () {
    const getInfo = await fetch (`https://api.github.com/users/${username}`);
    const data = await getInfo.json();
    //console.log(data);
    displayUserInfo(data);
};

gitHubData();

const displayUserInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
     <figure>
          <img alt="user avatar" src=${data.avatar_url} />
        </figure>
        <div>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Bio:</strong> ${data.bio}</p>
          <p><strong>Location:</strong> ${data.location}</p>
          <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
        </div> `;
        overview.append(div);
};