<script>
  // @ts-nocheck

  import { dataViz } from '../../data/projects.json';

  function getImageUrl(name) {
    return new URL(`../../assets/${name}.png`, import.meta.url).href;
  }

  function handleImage(e) {
    e.target.src = '';
    e.target.alt = '';
    e.target.style.display = 'none';
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-5 my-8">
  {#each dataViz as proj, i}
    {#if i == 0}
      <article
        id={proj.id || 'proj-' + i}
        class="bg-white shadow-lg rounded-md dark:bg-gray-900 transition hover:shadow-2xl hover:scale-105 overflow-hidden lead"
      >
        <a href={proj.url} class="flex flex-col h-full">
          <div class="img-wrapper h-4/6">
            <img src={getImageUrl(proj.id)} alt={proj.headline} class="object-cover h-full w-full object-center" />
          </div>
          <div class="head-wrapper grad-purple flex-auto">
            <span class="block text-lg leading-none">{proj.year}</span>
            <h3>{proj.headline}</h3>
          </div>
        </a>
      </article>
    {:else}
      <article
        id={proj.id || 'proj-' + i}
        class="bg-white shadow-lg rounded-md dark:bg-gray-900 transition hover:shadow-2xl hover:scale-105 overflow-hidden"
      >
        <a href={proj.url} class="relative block h-full">
          <img
            src={getImageUrl(proj.id)}
            alt={proj.headline}
            class="object-cover h-full w-full"
            on:error={e => handleImage(e)}
          />
          <div class="head-wrapper absolute h-full w-full inset-0">
            <span class="block text-lg leading-none">{proj.year}</span>
            <h3>{proj.headline}</h3>
          </div>
        </a>
      </article>
    {/if}
  {/each}
</div>

<style>
  .grid {
    grid-auto-rows: 190px;
  }

  @media (min-width: 768px) {
    .grid {
      grid-auto-rows: 200px;
      max-width: 940px;
    }
  }

  h3 {
    @apply font-medium text-xl;
    font-family: var(--tf);
  }

  .lead h3 {
    @apply text-2xl;
  }

  .lead {
    @apply md:col-span-2 row-span-2;
  }

  .head-wrapper {
    @apply text-white p-2.5;
  }

  .head-wrapper > span {
    font-family: var(--mono);
    text-decoration: underline;
  }

  article:nth-of-type(4n) .head-wrapper {
    background: rgba(23,88,121,0.7);
  }

  .grad-purple {
    background-image: linear-gradient(
      134deg,
      rgba(49, 35, 174, 0.7) 0%,
      rgba(201, 109, 215, 0.7) 100%
    );
  }

  article:not(.lead):nth-of-type(4n+1) .head-wrapper {
    background: rgba(243,53,68,0.66);
  }

  article:not(.lead):nth-of-type(4n+2) .head-wrapper {
    background: rgba(117,18,143,0.71);
  }

  article:not(.lead):nth-of-type(4n+3) .head-wrapper {
    background: rgba(193, 97, 23, 0.65);
  }

  article:nth-of-type(3) .head-wrapper {
    background: none !important;
    background-image: linear-gradient(
      151deg,
      rgba(60, 175, 210, 0.7) 7%,
      rgba(28, 120, 166, 0.7) 93%
    ) !important;
  }


  article:nth-of-type(2) .head-wrapper {
    background: none !important;
    background-image: linear-gradient(
      180deg,
      rgba(245, 81, 95, 0.7) 0%,
      rgba(159, 4, 27, 0.7) 100%
    ) !important;
  }
</style>
