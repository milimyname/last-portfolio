<script lang='ts'>
  import { onMount } from "svelte";


  // Add classes to pre elements
  onMount(() => {
    const preElements = document.querySelectorAll('pre');
    preElements.forEach((pre) => {
      pre.classList.add('relative');
      pre.classList.add('p-4');
      pre.classList.add('flex');
      pre.classList.add('rounded-lg');
      pre.classList.add('my-4');
    });
  });
 
  const handleClick = (e: MouseEvent & {currentTarget: EventTarget & HTMLButtonElement;}) => {
    // Get all parent elements's sibl of the button that have a class of "copy"
    const preElement = e.currentTarget?.closest('pre')?.querySelectorAll('.line');

    // If there are no code elements, return
    if(!preElement) return;

    // Get the text of the code elements
    const copyText = Array.from(preElement).map((line) => line.textContent).join('\n');

    // Save the text to the clipboard
    navigator.clipboard.writeText(copyText);
  };

</script>


<button on:click={(e)=>handleClick(e)} class="text-white absolute right-4">Copy</button>

