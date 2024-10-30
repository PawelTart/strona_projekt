
let key;
try {
    key = Config.MY_KEY;
} catch (e) {
    if (e instanceof ReferenceError) {
        key = null
    }
}

const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
    }
};

console.log(options);
