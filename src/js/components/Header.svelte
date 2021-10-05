<script>
  import hexLogo from '../../assets/icon.svg';
  import blueHex from '../../assets/blue-hex.svg';
  import purpleHex from '../../assets/purple-hex.svg';
  import redHex from '../../assets/red-hex.svg';
</script>

<header class="mb-6 text-gray-900 dark:text-purple-50">
  <span class="a1">A</span><span style="grid-area: first;">aron</span>
  <span class="a2">A</span><span style="grid-area: last;">lbright</span>
  <img class="icon" src={hexLogo} alt="Three hexagons" />
</header>

<div class="subhead mx-auto flex flex-col md:flex-row text-xl mb-8 text-gray-800 dark:text-purple-100">
  <h2><img src="{blueHex}" alt="Blue hexagon with plus sign inside"><span>Web_Development</span></h2>
  <h2><img src="{purpleHex}" alt="Purple hexagon with plus sign inside"><span>Data_Visualization</span></h2>
  <h2><img src="{redHex}" alt="Red hexagon with plus sign inside"><span>Experience_Design</span></h2>
</div>

<style>
  header {
    font-family: 'Ubuntu Mono', monospace;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-areas:
      'a1 first icon'
      'a2 last last';
    align-items: end;
  }
  .a1 {
    grid-area: a1;
  }
  .a2 {
    grid-area: a2;
  }

  header > span {
    font-weight: bold;
    font-size: 4em;
    line-height: 0.65;
  }

  .a1,
  .a2 {
    font-size: 5.5em;
  }

  header img {
    height: 80px;
  }

  h2 {
      @apply flex items-center mx-3 mb-2 md:mb-0;
  }

  h2 img {
      @apply mr-1.5;
      width: 30px;
  }

  .subhead h2 {
    font-family: 'Ubuntu Mono', monospace;
  }

  .blue-hex {
      background-image: url('../../assets/blue-hex.svg');
  }
</style>
