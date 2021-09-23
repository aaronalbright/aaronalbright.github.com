<script>
  import { skills } from '../../data/skills.json';
  let expanded = true;
</script>

<div class="skills-wrapper max-w-3xl mx-auto mt-4 mb-8 relative">
  <button
    on:click={() => (expanded = !expanded)}
    class="py-1 px-4 rounded transition text-white absolute z-10 shadow-xl"
    class:expanded
    >{expanded ? 'Collapse' : 'Expand'}<i
      class="uil {expanded ? 'uil-compress-alt-left' : 'uil-maximize-left'}"
    /></button
  >
  <div
    class="skills bg-gray-800 p-4 opacity-0 rounded h-0 overflow-hidden transition-all flex list-inside justify-between text-gray-50 flex-wrap"
    class:expanded
  >
    {#each skills as s}
        <li class="opacity-0 transition delay-200">{s}</li>
    {/each}
  </div>
</div>

<style>
  button {
    background-color: #f33544;
    font-family: var(--tf);
    font-weight: 400;
    min-width: 123px;
  }

  button.expanded {
    background-color: var(--purple);
  }

  .skills.expanded {
    @apply pt-12 w-full h-auto opacity-100;
  }

  .skills.expanded li {
    @apply opacity-100;
  }

  .skills-wrapper {
    min-height: 32px;
    max-height: 112px;
  }
</style>
