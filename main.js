
    let get = '';
function getting( list ) {

    for (let i=0; i < list.length; i++) {
        get += list[i] + '</br>';
        console.log(list[i]);
        
    }

      }
console.log(get);

getting(diskas);

// getting(diskas);





document.querySelector('body').innerHTML = get;

