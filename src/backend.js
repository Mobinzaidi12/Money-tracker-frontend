export const postData = async (itemName, price, datetime, description) => {
    let result = await fetch('http://localhost:5000/api/moneyTracker', {
        method: 'POST',
        body: JSON.stringify({ itemName: itemName.substring(price.length + 1), price, datetime, description }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    result = await result.json();
    return result.status
}

export const getData = async () => {
    const result = await fetch('http://localhost:5000/api/moneyTracker', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    const data = await result.json();
    console.log(data)
    return data;
};


export const deleteData = async (req, res) => {
    const data = await fetch('http://localhost:5000/api/moneyTracker', {
        method: 'DELETE',
        headers: {
            "Content-type": "application/json"
        }
    })
}
