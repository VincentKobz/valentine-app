<script>
  import Home from "./pages/Home.svelte";
  import Valentine from "./pages/Valentine.svelte";
  import { locale } from "./lib/i18n";

  let currentPage = "home";
  let partnerName = "";

  function toggleLanguage() {
    $locale = $locale === "en" ? "fr" : "en";
  }

  $: {
    const hash = window.location.hash.slice(1);
    if (hash) {
      currentPage = "valentine";
      partnerName = hash;
    } else {
      currentPage = "home";
      partnerName = "";
    }
  }

  function onHashChange() {
    const hash = window.location.hash.slice(1);
    if (hash) {
      currentPage = "valentine";
      partnerName = hash;
    } else {
      currentPage = "home";
      partnerName = "";
    }
  }
</script>

<svelte:window on:hashchange={onHashChange} />

<button
  class="fixed top-4 right-4 z-50 text-2xl bg-white/80 p-2 rounded-full shadow-md hover:scale-110 transition-transform cursor-pointer backdrop-blur-sm"
  on:click={toggleLanguage}
  title="Switch Language"
>
  {#if $locale === "en"}🇫🇷{:else}🇬🇧{/if}
</button>

<main class="min-h-screen flex items-center justify-center p-4">
  {#if currentPage === "home"}
    <Home />
  {:else if currentPage === "valentine"}
    <Valentine {partnerName} />
  {/if}
</main>
