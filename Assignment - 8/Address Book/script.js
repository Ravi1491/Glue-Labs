let filterInput = document.getElementById("filterInput");
filterInput.addEventListener("keyup", function(){
    let filterValue = filterInput.value.toUpperCase();
    let names = document.getElementById("names");
    let namelist = names.querySelectorAll("li.collection-item");
    let headerlist = document.querySelectorAll('li.collection-header');
    // console.log(headerlist);
    namelist.forEach(item =>{
        let a = item.getElementsByTagName('a')[0];
        // console.log(a);
        item.style.display = a.innerText.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    });
    headerlist.forEach(item => {
        let tag = item.getElementsByTagName('h5')[0];
        // console.log(tag);
        // console.log(tag.innerText);
        item.style.display = tag.innerText.toUpperCase().startsWith(filterValue) ? 'block' : 'none';
    });
});
