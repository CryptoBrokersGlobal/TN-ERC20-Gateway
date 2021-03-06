function checkETHAddress(event) {
    event.preventDefault();
    ethAddress = document.getElementById("ethAddress").value;

    fetch('/ethAddress/' + ethAddress).then(function(response) {
        response.json().then(function(result) {
            if (result.targetAddress == null) {
                alert('No tunnel defined for source address: ' + result.sourceAddress);
            } else {
                alert('Tunnel already established from ' + result.sourceAddress + ' to ' + result.targetAddress + '');
            }
        });
    });
}

function establishTunnel(event) {
    event.preventDefault();
    ethAddress = document.getElementById("ethAddress").value;
    tnAddress = document.getElementById("tnAddress").value;

    fetch('/tunnel/' + ethAddress + '/' + tnAddress).then(function(response) {
        response.json().then(function(result) {
            if (result.successful) {
                alert('Tunnel successfully established!');
            } else {
                alert('Something went wrong! Check if you already created a tunnel for this address!');
            }
        });
    });
}