

export default function getUserLiveSearch(data) {

    resBlockInit();
    getTable();
    let tbody = document.getElementById('tbody');
    //console.log(data)
    data.forEach(element => {
        const tr = document.createElement('tr');
        tr.id = element._id;
        tr.setAttribute('data-name', `${element.name}`);
        tr.setAttribute('data-post', `${element.post}`);
        tr.setAttribute('data-email', `${element.email}`);

        tr.innerHTML = `
        <td>${element.name}</td>
        <td>${element.post}</td>
        <td>${element.email}</td>`;
        tr.addEventListener("click", () => { redactorOneClickTr(element._id); });

        tbody.appendChild(tr);
    });


}
