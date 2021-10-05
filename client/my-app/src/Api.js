import React from "react";

class Api extends React.Component {
    render() {
        return "";
    }

    static get_layouts(route) {
        fetch(`http://localhost:5000/${route}`)
            .then(response => response.text())
            .then(result => {
                document.getElementById(`${route}`).innerHTML = result;
            })
            .catch(error => {
                console.log(error);
            })
    }

    static get_pages(route) {
        fetch(`http://localhost:5000/${route}`)
            .then(response => response.text())
            .then(result => {
                document.getElementById("body").innerHTML = result;
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export default Api;