(()=>{var i={fallback:"https://bigkev.wiki/",homes:{en:"https://bigkev.wiki/","zh-hans":"https://bigkev.wiki/zh-hans/"}};(()=>{let a=navigator.language||navigator.userLanguage;if(a in i.homes){window.location.href=i.homes[a];return}let o=a.split("-");for(let n in i.homes)if(n.indexOf(o[0])===0){window.location.href=i.homes[n];return}window.location.href=i.fallback})();})();
