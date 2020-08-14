// Get DATA

async function getDataByDB(url){
    //console.log(url);

    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could notfetch ${url}, status: ${res.status}`);
    } else {
    //console.log(res.json());

        return await res.json(); 
    }
}
