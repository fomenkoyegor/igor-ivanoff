let h1 = document.querySelector('h1');
let text = 'hello world';
setInterval(()=>{
 h1.innerHTML = text + ' ' + Date.now();
}, 1000);
