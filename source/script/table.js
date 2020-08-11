function getTable(){
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-striped');
    table.classList.add('table-dark');
    table.classList.add('table-hover');

    table.innerHTML = '<thead><tr class="table-active"><th>Имя</th><th>Должность</th><th>Email</th></tr></thead>';

    const tbody = document.createElement('tbody');
    tbody.id = 'tbody';
    table.appendChild(tbody); 

     output.appendChild(table);
}
