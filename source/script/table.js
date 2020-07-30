function getTable(){
    const table = document.createElement('table');
    table.classList.add('table');
    table.classList.add('table-striped');
    table.classList.add('table-dark');
    table.classList.add('table-hover');

    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    tr.classList.add('table-active');

    const th = document.createElement('th');
    th.innerHTML = 'Имя';
    tr.appendChild(th);
    const th2 = document.createElement('th');
    th2.innerHTML = 'Должность';
    tr.appendChild(th2);
    const th3 = document.createElement('th');
    th3.innerHTML = 'Email';
    tr.appendChild(th3);
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    tbody.id = 'tbody';
    table.appendChild(tbody);

    output.appendChild(table);
}