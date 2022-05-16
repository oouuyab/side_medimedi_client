import NotFound from './pages/404/NotFound.svelte';
import Home from './pages/home/Home.svelte';
import My from './pages/my/My.svelte';

export default {
  '/': Home,
  '/my': My,
  '*': NotFound,
};
