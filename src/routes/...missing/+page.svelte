<script>
  export let status = 404;
  export let error = new Error("Page Not Found");
</script>

<h1>{status}</h1>
<p>{error.message}</p>
<a href="/">Go to Home</a>
