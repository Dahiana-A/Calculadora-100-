const IMPUT = document.getElementById('peso');
const ERROR = document.getElementById('error');
const CALCULAR = document.getElementById('calcular');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');




CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value 
    console.log('dato ingresado:', DATO);


    if (DATO > 0 ){
        ERROR.style.display = 'none';


        let flujo = Hollyday (DATO);
        let mantenimiento = flujo*1.5;
        FLU.innerHTML = flujo + 'cc/hr';
        MAN.innerHTML = ' m+m/2 ' + mantenimiento +' cc/hr';
        FLU.style.display= 'block';
        MAN.style.display = 'block';

    } else {
        ERROR.style.display = 'none';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    }
    
    if (DATO>30){
        let calcularSuperficie = superficie(DATO);
    }

    function Hollyday(peso){
            let resultado
            if (peso >=20){
                resultado=((peso-20)*20)+1500
            } else if (peso<20 && peso >10){
                resultado=((peso-10)*50)*100
            } return resultado
            }
            
            
            function superficie(peso){
                return ((peso*4)+7) / (peso+90)
            }
})
