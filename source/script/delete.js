async function delUser(data) {

    const res = await fetch(data, {
        method: 'DELETE'
      });

    if(!res.ok){
        throw new Error(`Could notfetch ${url}, status: ${res.status}`);
    } else {
        return await res.json(); 
    }
}