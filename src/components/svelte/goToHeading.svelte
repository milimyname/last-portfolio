<script lang="ts">
  import { onMount } from "svelte";


  // Scroll to the heading by id
  export let id: string;

  // Depth of the heading
  export let depth: number;

  $: liClass = depth > 1 ? `pl-${2 * depth}` : 'border-b border-black text-right mb-4 text-black';
  
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const heading = document.getElementById(id);
    // Scroll to element
    heading?.scrollIntoView({ behavior: "smooth" });
  };

  // Get heading that is in view
  const getActiveHeading = () => {
    const headings = document.querySelectorAll("h2, h3, h4, h5, h6");
    const headingInView = Array.from(headings).find((heading) => {
      const { top, bottom } = heading.getBoundingClientRect();
      return top >= 0 && bottom <= window.innerHeight;
    });
    return headingInView;
  };

  // Set active heading to li element
  const setActiveHeading = () => {
    const headingInView = getActiveHeading();
    const headingInViewId = headingInView?.getAttribute("id");

    // Find li element with the same text content as the heading id in view
    const activeHeading = document.querySelector(`li[id="${headingInViewId}"]`);

    // Remove active class from all li elements and change color to grey
    const allHeadings = document.querySelectorAll("li");
    allHeadings.forEach((heading) => {
      heading.classList.remove("text-black", 'text-xl');
      heading.classList.add("text-gray-600");
    });

    // Add active class to li element
    activeHeading?.classList.add("text-black", 'text-xl');
    activeHeading?.classList.remove("text-gray-600");
    
  };

  // Set active heading on scroll
  onMount(() => {
    window.addEventListener("scroll", setActiveHeading);
  });


</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li on:click={(e) => handleClick(e)} class={liClass} id={id}>
  {#if depth === 1}
    Top
  {:else}
    {id}
  {/if}
</li>
