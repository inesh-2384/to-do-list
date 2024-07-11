class TO_DO_LIST{
  constructor(para,textboxx){
    this.para = para;
    this.textboxx = textboxx;
  }
  
  addbuttonn(){
    
  }
  updat_in_para(val){
   this.gen = val;
   this.display();
  }
  display(){
   this.para.innerText = this.gen;
  }
}




const para = document.querySelector('output');
const textboxx =document.querySelector('inputboxx');
const addbutton = document.querySelector('add');
const click = document.querySelectorAll('click');

const todo = new TO_DO_LIST(para,textboxx);


  addbutton.addEventListener("click", () => {
    
    updat_in_para(textboxx.value);
    textboxx.value ="";
    todo.display();
  })
