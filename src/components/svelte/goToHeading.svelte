<script lang="ts">
  // Scroll to the heading by id

  export let id: string;

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    const heading = document.getElementById(id);
    heading?.scrollIntoView({ behavior: "smooth" });
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li on:click={(e) => handleClick(e)} class="min-w-max">{id}</li>
