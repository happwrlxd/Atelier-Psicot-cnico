// Tema independente do histórico de estudos.
(()=>{
 const key='atelier-psico-theme',root=document.documentElement;
 let theme='light';try{theme=localStorage.getItem(key)==='dark'?'dark':'light';}catch{}
 root.dataset.theme=theme;
 function sync(){const b=document.getElementById('themeToggle');if(b){const dark=root.dataset.theme==='dark';b.setAttribute('aria-checked',String(dark));b.title=dark?'Ativar modo claro':'Ativar modo escuro';}}
 document.addEventListener('DOMContentLoaded',()=>{sync();document.getElementById('themeToggle').addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';sync();try{localStorage.setItem(key,root.dataset.theme);}catch{}});});
 window.addEventListener('storage',e=>{if(e.key===key){root.dataset.theme=e.newValue==='dark'?'dark':'light';sync();}});
})();
