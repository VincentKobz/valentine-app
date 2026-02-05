import { writable, derived } from "svelte/store";
import translations from "./translations";

export const locale = writable("en");

function getNested(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}

export const t = derived(locale, ($locale) => (key) => {
  const translation = getNested(translations[$locale], key);
  return translation || key;
});

// Also export raw dictionaries if needed for arrays (like noPhrases)
export const dict = derived(locale, ($locale) => translations[$locale]);
