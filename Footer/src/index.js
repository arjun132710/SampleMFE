import faker from 'faker';

const footerString = `<div> you have ${faker.datatype.number(20)}</div>`;

document.querySelector('#footercomp').innerHTML = footerString;