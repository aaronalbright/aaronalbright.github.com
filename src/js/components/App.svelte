<script>
  import Header from './Header.svelte';
  import Intro from './Intro.svelte';
  import Links from './Links.svelte'
</script>

<Header/>

<main>
  <Links/> 
  <Intro/>

  <div class="skills">
    <h3 class="subhead">Design + development skills</h3>
    <p>(in no particular order)</p>
    <ul class="skills__box">
      <li>Node</li>
      <li>React</li>
      <li>ES6+</li>
      <li>Webpack</li>
      <li>D3.js</li>
      <li>Sass</li>
      <li>Python</li>
      <li>Golang</li>
      <li>Sketch app</li>
      <li>Adobe Iillustrator</li>
      <li>QGIS</li>
      <li>SQL</li>
    </ul>
  </div>
  <div class="projects">
    <h2 class="subhead">Projects</h2>
  </div>
</main>
