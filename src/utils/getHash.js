const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; //evento del navegador

export default getHash;