const cardContainer = document.querySelector('.card-container');

fetch('https://randomuser.me/api/')
.then(response => response.json())
.then(data => {
    let userCardHtml = '';

    data.results.forEach(user => {
        userCardHtml += `
                <div class="card" style="width: 18rem;">
                    <img src="${user.picture.large}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.name.title + ' ' + user.name.first + ' ' + user.name.last}</h5>
                        <p class="card-text">${user.email}</p>
                    </div>
                </div>
            `;
    })

    cardContainer.innerHTML = userCardHtml
})