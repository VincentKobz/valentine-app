<script>
  export let partnerName = "Love";

  let answered = false;
  let noCount = 0;

  $: decodedName = decodeURIComponent(partnerName);

  // Dynamic phrases for the No button
  const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;(",
  ];

  function handleNo() {
    noCount++;
  }

  function handleYes() {
    answered = true;
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
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
          src="https://media.tenor.com/VIChDQ6ejRQAAAAi/jumping-bear-hearts-no-png.gif"
          alt="Cute Bear"
          class="h-[200px] mx-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
        />
        <h1
          class="text-4xl md:text-6xl text-rose-500 font-heading mt-6 leading-tight drop-shadow-sm"
        >
          Will you be my Valentine?
        </h1>
        <p class="text-2xl text-rose-400 font-bold mt-2">
          {decodedName}
        </p>
      </div>

      <div class="flex flex-wrap justify-center items-center gap-4 mt-8">
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-black rounded-xl shadow-[0_4px_0_0_#15803d] active:shadow-none active:translate-y-1 transition-all"
          style="font-size: {noCount * 20 + 16}px; padding: {noCount * 10 +
            16}px {noCount * 20 + 32}px;"
          on:click={handleYes}
        >
          Yes
        </button>

        <button
          class="bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl px-8 py-4 shadow-[0_4px_0_0_#be123c] active:shadow-none active:translate-y-1 transition-all"
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
        src="https://media.tenor.com/f1xnRxTRxLAAAAAi/bears-hugging-hug.gif"
        alt="Bears Hugging"
        class="h-[300px] mx-auto object-contain drop-shadow-2xl"
      />
      <h1 class="text-5xl md:text-7xl text-rose-600 font-heading leading-tight">
        Yaaay!!!
      </h1>
      <p class="text-2xl text-rose-400 font-bold">
        I knew you would say yes! 🥰
      </p>

      <button
        class="mt-8 text-rose-400 hover:text-rose-600 font-bold underline"
        on:click={() => (window.location.href = "/")}
      >
        Make your own
      </button>
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
