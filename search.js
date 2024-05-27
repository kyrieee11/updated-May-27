
function buildTable(data) {
    const table = document.querySelector('#myTable tbody');
    table.innerHTML = '';
    data.forEach(item => {
        const row = `<tr>
                        <td>${item.name}</td>
                        <td>${item.birthdate}</td>
                        <td>${item.died}</td>
                        <td>${item.location}</td>
                    </tr>`;
        table.innerHTML += row;
    });
}
