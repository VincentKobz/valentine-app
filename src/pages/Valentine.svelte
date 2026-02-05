<script>
  import { t } from "../lib/i18n";
  export let partnerName = "Love";

  let answered = false;
  let noCount = 0;
  let noButtonStyle = "";

  $: decodedName = decodeURIComponent(partnerName);

  // Dynamic phrases for the No button
  $: phrases = $t("noPhrases");

  function handleNo() {
    noCount++;
  }

  function handleYes() {
    answered = true;
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function moveNoButton() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 60;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noButtonStyle = `position: fixed; left: ${randomX}px; top: ${randomY}px; z-index: 50;`;
    noCount++;
  }
</script>

<div
  class="min-h-screen flex flex-col items-center justify-center -mt-16 px-4 text-center"
>
  {#if !answered}
    <!-- Question Phase -->
    <div class="space-y-8 relative">
      <div>
        <img
          src="https://media.tenor.com/ogsClPgCYcAAAAAi/mochi-mochi-mochi.gif"
          alt="Cute Cat"
          class="h-[200px] mx-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
        />
        <h1
          class="text-4xl md:text-6xl text-rose-500 font-heading mt-6 leading-tight drop-shadow-sm"
        >
          {decodedName}, {$t("valentine.question")}
        </h1>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-4 mt-8">
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-black rounded-xl shadow-[0_4px_0_0_#15803d] active:shadow-none active:translate-y-1 transition-all"
          style="font-size: {noCount * 20 + 16}px; padding: {noCount * 10 +
            16}px {noCount * 20 + 32}px;"
          on:click={handleYes}
        >
          {$t("valentine.yes")}
        </button>

        <button
          class="bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl px-8 py-4 shadow-[0_4px_0_0_#be123c] active:shadow-none active:translate-y-1 transition-all"
          style={noButtonStyle}
          on:mouseenter={moveNoButton}
          on:click={handleNo}
        >
          {getNoButtonText()}
        </button>
      </div>
    </div>
  {:else}
    <!-- Success Phase -->
    <div class="space-y-6 animate-zoom-in">
      <img
        src="https://media.tenor.com/Vya70Sb84voAAAAi/mochi-mochi-peach-cat-gif-hug.gif"
        alt="Cats Hugging"
        class="h-[300px] mx-auto object-contain drop-shadow-2xl"
      />
      <h1 class="text-5xl md:text-7xl text-rose-600 font-heading leading-tight">
        {$t("valentine.successTitle")}
      </h1>
      <p class="text-2xl text-rose-400 font-bold">
        {$t("valentine.successMessage")}
      </p>
    </div>
  {/if}
</div>

<style>
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .animate-zoom-in {
    animation: zoomIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }
</style>
