import moment from 'moment';
import {internet} from 'faker';

const el = document.body.appendChild(document.createElement('pre'));

el.textContent += `${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
el.textContent += '\n';
el.textContent += `${internet.email()}`;

const el2 = document.body.appendChild(document.createElement('h4'));
el2.setAttribute('id', 'author');
el2.setAttribute('title', 'GossJS');
el2.textContent = 'Yaroslav Slepukhin';
