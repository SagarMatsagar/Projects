setInterval(() => {
    console.log(new Date().toLocaleDateString('hi-IN', {weekday : 'long', year : 'numeric', month : 'long', day:'numeric', hour: "2-digit", minute: '2-digit', second: '2-digit'}))
}, 1000); 