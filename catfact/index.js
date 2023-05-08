var apiUrl = "https://catfact.ninja/fact?max_length=140"; // replace with your API URL

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var value = getProperty(data, "fact"); // replace with json param
        //document.body.innerHTML = value;
        return document.write(value);
    })
    .catch(error => console.error(error));

function getProperty(data, property) {
if (data.hasOwnProperty(property)) {
    return data[property];
} else {
    return "Property not found";
}
}