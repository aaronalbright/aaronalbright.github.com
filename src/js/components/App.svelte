<script>
  import Header from './Header.svelte';
  import Intro from './Intro.svelte';
  import Links from './Links.svelte'
  import Projects from './Projects.svelte';
  import Skills from './Skills.svelte';
</script>

<Header/>

<main>
  <Links/> 
  <Intro/>
  <h2 class="text-3xl max-w-3xl mx-auto text-gray-900 dark:text-red-50">Tool Belt</h2>
  <p class="comment-desc max-w-3xl mx-auto">Some of the languages, frameworks and tools I use in no particular order</p>

  <Skills/>


  <h2 class="text-3xl max-w-3xl mx-auto text-gray-900 dark:text-red-50">Projects</h2>
  <p class="comment-desc max-w-3xl mx-auto">A collection of published work and the tools I used to make them</p>
  <Projects/>

  <div>
    <h2 class="text-xl max-w-3xl mx-auto text-gray-900 dark:text-red-50">More coming soon!</h2>
    <p class="comment-desc max-w-3xl mx-auto">The consequences of code decay circa 2018</p>
  </div>
</main>

<style>

  h2 {
    font-family: var(--tf);
    font-weight: bold;
  }

  .comment-desc {
    font-family: var(--mono);
    color: var(--blue);
    line-height: 1;
  }

  .comment-desc::before {
    font-family: var(--mono);
    content: '// ';
  }
</style>