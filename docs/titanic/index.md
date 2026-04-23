# Titanic EDA – dane, które mówią więcej niż film

**27-03-2025**

Titanic EDA to mój drugi projekt analityczny z kursu Data Science „Od zera do AI". Po irysach – czas na coś z większym ładunkiem emocjonalnym. Dane o pasażerach Titanica to kolejny klasyk w świecie data science, ale tym razem za liczbami stoją prawdziwe historie. W tej analizie badam, co wpływało na szanse przeżycia – płeć, wiek, klasa podróży i nie tylko.

<a href="titanic.ipynb" class="md-button md-button--primary">Pobierz Notebook</a>

<iframe
    id="content"
    src="titanic.html"
    width="100%"
    style="border:1px solid black;overflow:hidden;"
></iframe>
<script>
function resizeIframeToFitContent(iframe) {
    iframe.style.height = (iframe.contentWindow.document.documentElement.scrollHeight + 50) + "px";
    iframe.contentDocument.body.style["overflow"] = 'hidden';
}
window.addEventListener('load', function() {
    var iframe = document.getElementById('content');
    resizeIframeToFitContent(iframe);
});
window.addEventListener('resize', function() {
    var iframe = document.getElementById('content');
    resizeIframeToFitContent(iframe);
});
</script>

