//Se accede a todos los elementos que tengan la clase panel
const panels = document.querySelectorAll('.panel');

//Recorremos el objeto que contiene todos los paneles
//luego a cada panel le agregamos el evento click
//Para que cuando se haga click, se le agrege la clase active
panels.forEach( panel =>{
    panel.addEventListener('click', () =>{
        removeActiveClasses();
        panel.classList.add('active')
    })
})

const removeActiveClasses = () =>{
    panels.forEach( panel =>{
        panel.classList.remove('active');
    })
}