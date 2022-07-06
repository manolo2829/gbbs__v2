
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


/* -------------------------------------------------------------------------- */
/*                                    HOME                                    */
/* -------------------------------------------------------------------------- */

const about__us__btn__open__team = document.querySelector('#about__us__btn__open__team')
const about__us__team__container = document.querySelector('#about__us__team__container')

about__us__btn__open__team.addEventListener('click', () => {
    about__us__team__container.classList.toggle('active')
    about__us__btn__open__team.classList.toggle('active')
})