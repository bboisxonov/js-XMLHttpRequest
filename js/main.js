// const reques = new XMLHttpRequest()

// reques.open('GET', 'https://jsonplaceholder.typicode.com/users')

// reques.responseType = "json"

// reques.onload = () => {
//     console.log(reques.response);
// }

// reques.onerror = (error) => {
//     console.log(error, "hato bizdan");
// }



// reques.send()

const axios = {
    get: (link) => new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.open('GET', link)

        request.responseType = 'json'

        request.onload = () => {
            resolve(request.response)
        }

        request.onerror = (error) => {
            reject(error + 'Hato Bizdan!')
        }

        request.onabort = (error) => {
            reject(error + "Hato Serverdan!")
        }

        request.send()
    })
}

async function fetchUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        console.log(response);
    } catch (error) {
        console.log(error);

    }


};

fetchUsers()

    // axios
    //     .get('https://jsonplaceholder.typicode.com/users')
    //     .then((data) => console.log(data))
    //     .catch((error) => console.log(error))



