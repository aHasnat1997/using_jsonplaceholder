fetch('https://jsonplaceholder.typicode.com/photos')
  .then(res => res.json())
  .then(data => dataLoade(data))

function dataLoade(datas) {
  console.log(datas);
  const cardContainer = document.getElementById('card-container');
  for (const data of datas) {
    const cardItem = document.createElement('div');
    cardItem.innerHTML = `
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="${data.url}" /></figure>
        <img class="absolute border-4 rounded-full top-[16.5rem] right-4" src="${data.thumbnailUrl}" />
        <div class="card-body">
          <p>${data.id}, ${data.title}</p>
        </div>
      </div>
    `;
    cardContainer.appendChild(cardItem);
  }
}
