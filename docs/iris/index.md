# Analiza Danych EDA Irysów: Eksploracja Domenowa

**07-03-2025**

Iris EDA to mój pierwszy projekt analityczny, stworzony w ramach kursu Data Science „Od zera do AI". Zbiór danych o irysach to klasyk w świecie data science – i choć pozornie prosty, kryje w sobie zaskakująco wiele. W tej analizie badam rozkłady cech, zależności między zmiennymi i różnice między gatunkami. Dobry punkt startowy, żeby zobaczyć, jak dużo można wyciągnąć z kilkuset wierszy danych.

<a href="iris.ipynb" class="md-button md-button--primary">Pobierz Notebook</a>

<iframe
    id="content"
    src="iris.html"
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