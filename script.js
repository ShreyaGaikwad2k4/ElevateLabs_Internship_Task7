const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
    userContainer.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Network response was not OK");
        }

        const users = await response.json();

        userContainer.innerHTML = ""; // clear content

        users.forEach(user => {
            const div = document.createElement("div");
            div.className = "user-card";

            div.innerHTML = `
                <h3>${user.name}</h3>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            `;

            userContainer.appendChild(div);
        });

    } catch (error) {
        userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
}

// Initial fetch
fetchUsers();

// Reload button
reloadBtn.addEventListener("click", fetchUsers);
