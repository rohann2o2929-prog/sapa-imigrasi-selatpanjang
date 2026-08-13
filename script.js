function showPage(id){document.querySelectorAll('.page-section').forEach(el=>el.classList.add('hidden'));const target=document.getElementById(id);if(target)target.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});}
function toggleMenu(){document.getElementById('mobileNav').scrollIntoView({behavior:'smooth'});}
document.querySelectorAll('.accordion').forEach(btn=>{btn.addEventListener('click',()=>{const panel=btn.nextElementSibling;const open=panel.style.display==='block';panel.style.display=open?'none':'block';btn.querySelector('span').textContent=open?'＋':'−';});});
document.getElementById('feedbackForm').addEventListener('submit',function(e){e.preventDefault();document.getElementById('feedbackResult').classList.remove('hidden');this.reset();});
showPage('home');