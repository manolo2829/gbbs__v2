
/* -------------------------------------------------------------------------- */
/*                                   HEADER                                   */
/* -------------------------------------------------------------------------- */

const header = document.querySelector('#header')
const header__links = header.querySelectorAll('.nav-link')

header__links.forEach( link => {
    link.addEventListener('click', (e) => {

        header__links.forEach( item => {
            if(item !== link){
                item.classList.remove('active')
            }
        })

        link.classList.add('active')


    })
})