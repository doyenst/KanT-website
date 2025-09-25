// JS: can fill the hero can based on scroll position of the Flavors section
const fill = document.querySelector('.fill');
const trigger = document.querySelector('#flavors');
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

function updateFill(){
  if(!fill || !trigger) return;
  const rect = trigger.getBoundingClientRect();
  const vh = window.innerHeight;
  // progress: 0 when section is far below, to 1 when section top hits 10% of viewport
  const progress = 1 - Math.min(Math.max((rect.top - vh*0.1)/(vh*0.9), 0), 1);
  fill.style.setProperty('--level', Math.round(progress*100)+'%');
}
window.addEventListener('scroll', updateFill, { passive:true });
updateFill();

// Order form logic: friendlier, disables after submit, shows message
const form = document.getElementById('kantyForm');
const msg = document.getElementById('form-msg');
if(form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // basic validation
    const name = form.elements['name'].value.trim();
    const contact = form.elements['contact'].value.trim();
    if(!name || !contact){
      showMsg('Please fill in your name and contact info.', false);
      return;
    }
    showMsg('Thank you! Your order was received. We’ll reach out to confirm ASAP.', true);
    form.reset();
    setTimeout(() => {
      msg.style.display = 'none';
    }, 6000);
  });
}
function showMsg(text, ok){
  msg.textContent = text;
  msg.style.display = 'block';
  msg.style.color = ok ? '#00ff88' : '#ff3ea5';
}