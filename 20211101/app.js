const loadDoc = () => {
    const xhttp = new XMLHttpRequest();

    // xhttp.addEventListener('readystatechange', function() {
    // //   if(this.readyState === 4 && this.status === 200){
    //       console.log(this);
    //       console.log(this.responseText);
    // //   }
    // });
    xhttp.addEventListener('load', function(){
        console.log('LOAD: ', this.responseText);
        console.log(this.readyState, this.status);
    });

    xhttp.open('GET', 'db.db', true);
    xhttp.send();
}

console.log(1);
loadDoc();
console.log(2);