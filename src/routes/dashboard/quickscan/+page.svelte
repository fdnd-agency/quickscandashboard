<script>
    let { data } = $props();
</script>

<!-- Tijdelijk: toont de geparste data om te checken of het inladen werkt.
     JSON.stringify maakt het object leesbaar, 2 = inspringing) -->
<pre>{JSON.stringify(data.parsed.data, null, 2)}</pre>
