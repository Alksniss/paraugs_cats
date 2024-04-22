//Console.log(1)
    let zina = document.querySelector('.zina');
    let zinas = document.querySelector('.catazina');

function sutitZinu()
{
    console.log('sutitZinu()darbojas');
    zinas.innerHTML = zinas.innerHTML+'<br>'+ zina.value;
}
async function ieladetChataZinas()
{
    let datiNOServera=await fetch('chataZinas.txt');
    let dati =await datiNOServera.text;
    console.log(dati);
}