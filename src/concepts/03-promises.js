import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    };


    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1?.name}</h3>
            <h3>${hero2?.name}</h3>
        `;
    };


    const renderError = (error) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
        `;
    };

    const id1 = '5d86371fd55e2e2a30fe1ccb1';

    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    let hero1, hero2;

    // Promesas que no dependen una de otra
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then(([ hero1, hero2]) => renderTwoHeroes(hero1, hero2) )
    .catch(renderError);


    //! Forma 2

    // findHero(id1).then((hero) => {
    //         hero1 = hero;
            
    //         return findHero(id2);
    // }).then( hero => {
    //     hero2 = hero;

    //     renderTwoHeroes(hero1, hero2);
    // }).catch(renderError);


    //! Forma 1

    // findHero(id1).then((hero) => {
    //     hero1 = hero;

    //     findHero(id2).then((hero) => {
    //         hero2 = hero;

    //         renderTwoHeroes(hero1, hero2);

    //     }).catch(error => renderError(error));
    // }).catch(error => renderError(error));

}


/**
 * 
 * @param {String} id 
 * @returns { Promise<Object></Object>}
 */
const findHero = (id) => {

    // const promise = new Promise(( resolve, reject ) => {

    //     const hero = heroes.find( hero => hero.id === id );

    //     if (hero) {
    //         resolve( hero );
    //         return;
    //     }


    //     reject(`Hero with id ${ id } not found`);

    // });


    // return promise;

    return new Promise((resolve, reject) => {

        const hero = heroes.find(hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }


        reject(`Hero with id ${id} not found`);

    });

}