<script>import { fade } from 'svelte/transition';
export let transitionDuration;
export let imagePreset;
</script>

<div role="button" tabindex="0" class="svelte-lightbox-main" class:fullscreen={imagePreset === 'fullscreen'} class:scroll={imagePreset === 'scroll'}
     transition:fade={{ duration: transitionDuration }} on:click {...$$restProps}>
    <slot/>
</div>

<style>
     div.svelte-lightbox-main {
         position: relative;
         max-width: 100%;
         max-height: 100%;
         height: auto;
         width: auto;
         background-color: transparent;
    }
     div.svelte-lightbox-main.fullscreen {
	     height: inherit;
	     width: inherit;
         max-height: inherit;
         max-width: inherit;
     }
</style>