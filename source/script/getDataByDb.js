// Get DATA

async function getData(url){
    //console.log(url);

    const res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could notfetch ${url}, status: ${res.status}`);
    } else {
    //console.log(res.body);

        return await res.json(); 
    }
}
