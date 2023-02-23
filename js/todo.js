document.getElementById('json-loader').addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(date => dataLoade(date))

  function dataLoade(dates) {
    const listContainer = document.getElementById('list-container');

    for (const data of dates) {
      const listItems = document.createElement('tr');
      listItems.innerHTML = `
      <td>${data.id}</td>
      <td>${data.title}</td>
      <td>${(data.completed === true) ? 'Completed' : 'Not Completed'}</td>
      `;
      listContainer.appendChild(listItems)

    }
  }
})
