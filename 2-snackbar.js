import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{i as o}from"./assets/vendor-BbbuE1sJ.js";const m=document.querySelector('input[name="delay"]'),a=document.querySelectorAll('input[name="state"]'),s=document.querySelector(".form");s.addEventListener("submit",i=>{i.preventDefault();const t=parseInt(m.value,10),r=Array.from(a).find(e=>e.checked);new Promise((e,n)=>{setTimeout(()=>{r.value==="fulfilled"?e(t):n(t)},t),s.reset()}).then(e=>{o.show({message:`✅ Fulfilled promise in ${e}ms`,messageColor:"white",backgroundColor:"#59A10D",position:"topRight"})}).catch(e=>{o.show({message:`❌ Rejected promise in ${e}ms`,messageColor:"white",backgroundColor:"#FF6161",position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map
