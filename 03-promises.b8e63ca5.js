document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();var t=e.target.elements,n=t.amount,o=t.delay,a=t.step;n=Number.parseInt(n.value),o=Number.parseInt(o.value),a=Number.parseInt(a.value);for(var r=1;r<=n;r+=1)(function(e,t){return new Promise(function(n,o){setTimeout(function(){Math.random()>.3?n({position:e,delay:t}):o({position:e,delay:t})},t)})})(r,o+a*r).then(function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))}).catch(function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))});e.currentTarget.reset()});
//# sourceMappingURL=03-promises.b8e63ca5.js.map
