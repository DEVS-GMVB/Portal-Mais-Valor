const URL = `http://localhost:3000/user`;
const status = document.getElementById("campo-status");

window.onload = () => {
    fetch(`${URL}/logs/status`, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(data => {
            const notNull = data.filter(item => item.status !== null && item.status !== undefined);

            for (let i in notNull) {
                status.innerHTML += `<option value=${notNull[i].status}> ${notNull[i].status} </option>`
            }
        })
        .catch(error => console.error(error))
}

