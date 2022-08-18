(function () {

    fetch('/get-all-bitts')
        .then(function(response) {
            return response.text();
        })
        .then(function(text) {
            let container = document.getElementById("bittsContainer");
            let bitts = JSON.parse(text);

            for (let bitt of bitts) {
                let bittElement = document.createElement("p");
                bittElement.innerHTML = 
                `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <h6 class="card-title">${bitt.text}</h6>
                    <p class="card-text text-muted"> ${bitt.username}</p>
                    </div>
                </div>`;
                container.appendChild(bittElement);
            }
        })
        .catch(function(error) {
            console.log('Request failed', error);
        });

}());
