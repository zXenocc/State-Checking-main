// fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users => {
//         const userList = document.getElementById("userList");
//         users.forEach(user => {
//           const li = document.createElement("li");
//           li.textContent = `${user.name} - ${user.email}`;
//           userList.appendChild(li);
//         });
//       })
//       .catch(error => console.error("Error fetching data:", error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const userList = document.getElementById("userList");
    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} - ${user.email}`;
      li.style.color = "red"; // Set the text color to red
      userList.appendChild(li);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
