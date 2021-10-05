<script>
  import { skills } from '../../data/skills.json';
  let expanded = true;
</script>

<div class="skills-wrapper max-w-3xl mx-auto mt-4 mb-8 relative">
  <!-- <button
    on:click={() => (expanded = !expanded)}
    class="py-1 px-4 rounded-md transition text-white absolute z-10 shadow-md"
    class:expanded
    >{expanded ? 'Collapse' : 'Expand'}<i
      class="uil {expanded ? 'uil-compress-alt-left' : 'uil-maximize-left'}"
    /></button
  > -->
  <div
    class="skills p-5 shadow-md rounded-md flex list-inside justify-between text-gray-50 flex-wrap"
    class:expanded
  >
    {#each skills as s}
      <li class="leading-9">{s}</li>
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
    background-image: linear-gradient(135deg, #425368 0%, #1f2937 100%);
  }

</style>
