import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {

    const id = '5d86371f2343e37870b91ef1';

    console.log('Inicio de componente');

    findHero(id)
        .then(name => element.innerHTML = name)
        .catch(error => element.innerHTML = error);
    

    console.log('Fin del componente');
};

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id == id);


    if (!hero)
        throw `Hero with id ${ id } not found!`;

    return hero.name;
};