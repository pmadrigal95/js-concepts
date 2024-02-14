
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = (element) => {

    // Node version
    // console.log(process.env);

    // vite version
    console.log(import.meta.env);

    const html = `
        Dev: ${ import.meta.env.DEV } <br/>
        Prod: ${ import.meta.env.Prod } <br/>
        Key: ${ import.meta.env.VITE_API_KEY } <br/>
        URL: ${ import.meta.env.VITE_BASE_URL } <br/>
    `
    element.innerHTML = html;
}