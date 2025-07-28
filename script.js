const checklist=document.querySelectorAll('#checklist input[type="checkbox"]');
const resetButton=document.getElementById('reset');
checklist.forEach((box,i)=>{
  box.checked=localStorage.getItem(`check${i}`)==='true';
  box.addEventListener('change',()=>localStorage.setItem(`check${i}`,box.checked));
});
resetButton.addEventListener('click',()=>{
  checklist.forEach((box,i)=>{box.checked=false;localStorage.setItem(`check${i}`,false)});
});
