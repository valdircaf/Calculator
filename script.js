function Calculadora(){
  this.display = document.querySelector('.display');

  this.start = ()=> {
    this.clickCapture();
    this.captureEnter();
  }

  this.captureEnter = () => {
    document.addEventListener('keypress', e => {
      if(e.keyCode !== 13) return;
      this.equals();
    })
  }

  this.clickCapture = () => {
    document.addEventListener('click', e => {
      const el = e.target;
      if(el.classList.contains('btn-num')) this.addNumDisplay(el);
      if(el.classList.contains('btn-clear')) this.clear();
      if(el.classList.contains('btn-del')) this.del();
      if(el.classList.contains('btn-eq')) this.equals();
      if(e.target.innerText === 'x') this.replaceX();
    });
  }

  this.replaceX = () => this.display.value = this.display.value.replace('x', '*');

  this.addNumDisplay = el => this.display.value += el.innerText;

  this.clear = () => this.display.value = '';

  this.del = () => this.display.value = this.display.value.slice(0, -1);

  this.equals = () => {
    try{
      const equals = eval(this.display.value);

      if(!equals){
        return;
      }

      this.display.value = equals;

    } catch(e){
      console.log('Conta inválida');
      return;
    }
  }


}

const calculadora = new Calculadora();
calculadora.start();

const icon = document.querySelector('.calculatorIcon');

document.addEventListener('click', e => {
  const classMain = document.querySelector('.main');
  const minimize = document.querySelector('.minimize');
  const close = document.querySelector('.close');
  const el = e.target.classList.value;
  if(el === 'close' || el === 'minimize'){
    classMain.classList.remove('main');
    classMain.classList.add('hide');
  }
  if(el === 'calculatorIcon'){
    const classHide = document.querySelector('.hide');
    classHide.classList.remove('hide');
    classHide.classList.add('main');
  }
})
