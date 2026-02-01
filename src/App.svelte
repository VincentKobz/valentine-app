<script>
  import Home from "./pages/Home.svelte";
  import Valentine from "./pages/Valentine.svelte";

  let currentPage = "home";
  let partnerName = "";

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

<main class="min-h-screen flex items-center justify-center p-4">
  {#if currentPage === "home"}
    <Home />
  {:else if currentPage === "valentine"}
    <Valentine {partnerName} />
  {/if}
</main>
