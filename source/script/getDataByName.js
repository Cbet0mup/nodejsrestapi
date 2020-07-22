async function getDataByName(url, data){
let name = data;
    const res = await fetch(`${url}`, {
        headers: {
            name: `${name}`
        }
    });

    if(!res.ok){
        throw new Error(`Could notfetch ${url}, status: ${res.status}`);
    } else {
        return await res.json(); 
    }
}