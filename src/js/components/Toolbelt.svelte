<script>
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  export let tech;
  let hoverTech = false;

  function handleClick() {
      console.log("tapped/clicked?");
  }
</script>

<div class="pills-wrapper flex flex-wrap mt-1 max-w-max">
  <span
    class="tech-pill tech-pill-hider"
    class:hoverTech
    on:mouseleave|self={() => (hoverTech = false)}
    on:mouseenter|self={() => (hoverTech = true)}
    on:click={() => hoverTech = !hoverTech}
    ><i class="uil uil-arrow leading-none text-xl" /></span
  >
  {#if hoverTech}
    {#each tech as item, i}
      <span
        class="tech-pill pointer-events-none"
        transition:fly={{
          x: i < 1 ? -75 : i * -75,
          delay: i * 50,
          duration: 250,
          easing: quintOut
        }}>{item}</span
      >
    {/each}
  {/if}
</div>

<style>
  .tech-pill {
    @apply bg-gray-900 rounded-2xl text-gray-50 px-3 py-1 mr-3 mb-3 shadow-md text-center;
    font-family: var(--tf);
    font-weight: 600;
    min-width: 50px;
    min-height: 32px;
  }

  .tech-pill-hider {
    @apply hover:bg-white focus:bg-white hover:text-gray-600 transition hover:cursor-pointer flex items-center;
    font-family: var(--tf);
    font-weight: 600;
  }

  .tech-pill-hider.hoverTech {
    @apply bg-white text-gray-600
  }
</style>
