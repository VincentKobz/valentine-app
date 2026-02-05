<script>
  import { t } from "../lib/i18n";

  let partnerName = "";
  let generatedUrl = "";
  let copied = false;

  function generateValentineLink() {
    if (!partnerName.trim()) return;
    const encodedName = encodeURIComponent(partnerName.trim());
    generatedUrl = `${window.location.origin}${window.location.pathname}#${encodedName}`;
    copied = false;
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(generatedUrl);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<div class="w-full max-w-md mx-auto px-4">
  <div
    class="bg-amber-50 rounded-xl shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] border-4 border-white overflow-hidden p-8 space-y-8 text-center relative"
  >
    <!-- Cute Header -->
    <div class="space-y-4">
      <div class="text-5xl animate-bounce">💌</div>
      <h1 class="text-4xl text-rose-500 font-heading leading-tight">
        {$t("home.header")}
      </h1>
      <p class="text-rose-400 font-bold text-lg">{$t("home.subheader")}</p>
    </div>

    <!-- Input Section -->
    <div class="space-y-6">
      <div class="text-left space-y-2">
        <label
          for="name"
          class="block text-rose-400 font-black uppercase text-xs tracking-widest ml-1"
        >
          {$t("home.label")}
        </label>
        <input
          type="text"
          id="name"
          bind:value={partnerName}
          placeholder={$t("home.placeholder")}
          class="w-full bg-white border-2 border-rose-100 rounded-xl px-4 py-3 text-lg font-bold text-rose-500 placeholder:text-rose-200 focus:outline-none focus:border-rose-400 focus:ring-4 focus:ring-rose-100 transition-all"
        />
      </div>

      <button
        on:click={generateValentineLink}
        disabled={!partnerName.trim()}
        class="w-full bg-rose-500 hover:bg-rose-600 active:translate-y-1 active:shadow-none text-white font-black text-xl py-4 rounded-xl shadow-[0_4px_0_0_#be123c] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:bg-rose-300"
      >
        {$t("home.button")}
      </button>
    </div>

    <!-- Result Section -->
    {#if generatedUrl}
      <div
        class="pt-6 border-t-2 border-rose-100/50 space-y-4 animation-slide-up"
      >
        <p class="text-rose-400 font-bold">{$t("home.result")}</p>

        <div
          class="bg-white p-2 rounded-lg border-2 border-rose-100 flex flex-col sm:flex-row gap-2"
        >
          <input
            readonly
            value={generatedUrl}
            class="flex-1 text-sm bg-transparent text-slate-500 font-semibold focus:outline-none px-2"
          />
          <button
            on:click={copyToClipboard}
            class="bg-rose-100 hover:bg-rose-200 text-rose-600 px-4 py-2 rounded-md font-bold text-sm transition-colors"
          >
            {#if copied}{$t("home.copied")}{:else}{$t("home.copy")}{/if}
          </button>
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .animation-slide-up {
    animation: slideUp 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  }
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
