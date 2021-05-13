// local imports
import { searchMovies, updateResultsList } from './movies';

// plugin imports
import { initSortable } from './plugins/init_sortable';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

// initialise your plugins
initSortable();
initMarkdown();
initSelect2();

// initialise local imports (methods)
searchMovies('Doctor Zhivago');

// event listeners
const form = document.querySelector('.form');
form.addEventListener('submit', updateResultsList);
