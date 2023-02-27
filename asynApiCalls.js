let div1 = document.querySelector('.asynApiCalls');

let details = {
    apiUrl: 'https://reqres.in/api/users',
    fetchDetails : async function getapi(url) {
        let response = await fetch(url);
        let d = await response.json();
        console.log(d);
        if (response) {
            hideloader();
        }
        show(d);
    },
    displayFirstName : function getFirstName(d){
        div1.innerHTML = d.data[0].first_name;
    },

    displayImage: function getImage() {
        for (let i of d) {
            if (i < 3) {
                console.log(data.data[0].avatar);
            }
        }
    },
}

details.fetchDetails();