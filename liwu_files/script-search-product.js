function setSearchCriteria()
{
    if (document.getElementById("parentid2022"))
    {
        document.getElementById("sc1").value = document.getElementById("parentid2022").value;
        document.getElementById("sc2").value = document.getElementById("parentid2024").value;
        document.getElementById("sc3").value = document.getElementById("price-range").value;
        document.getElementById("tag").value = document.getElementById("tag-advanced").value;
    }
    else
    {
        document.getElementById("sc1").value = "";
        document.getElementById("sc2").value = "";
        document.getElementById("sc3").value = "";
    }
    document.getElementById("formsearch").submit();
}
