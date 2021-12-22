const ltemRef = document.querySelectorAll('li.item');

console.log(`Number of categories: ${ltemRef.length}`);


ltemRef.forEach(element => {

    const getHeadingName = element.querySelector('h2');
    console.log(`Category: ${getHeadingName.textContent}`);

    const getLiLength = element.querySelectorAll('li');
    console.log(`Elements: ${getLiLength.length}`);
});