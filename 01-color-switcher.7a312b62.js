!function(){var t,e=document.querySelector("body"),a=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");n.disabled=!0,a.addEventListener("click",(function(){a.disabled=!0,n.disabled=!1,t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.7a312b62.js.map