import React from "react";

class Api extends React.Component {
    render() {
        return "";
    }

    static get_pages() {
        fetch("http://localhost:5000/")
            .then(response => response.text())
            .then(result => {
                document.getElementById("root").innerHTML = result;
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export default Api;