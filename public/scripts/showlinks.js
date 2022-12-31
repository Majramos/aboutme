
function showlink( link ) {
    var linkshower = document.getElementById('linkshower');
    linkshower.getElementsByTagName('p')[0].textContent = link;    
    linkshower.style.display = "inline-block";
}

