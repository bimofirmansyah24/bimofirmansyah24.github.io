fetch('employee_data.json')
    .then(function (data) {
        return data.json();
    })
    .then(function (json) {
        let elem = document.getElementById('data');

        for(i in json) {
            elem.innerHTML += '<th>'+ json[i].name + '</th><th>'+ json[i].gender + '</th><th>'+ json[i].designation + '</th>';
        }
    });