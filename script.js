let hClicks = 0;

function h_OnClick()
{
    // Increase clicks
    hClicks++

    // Show H Gif when h is clicked 3 times
    if(hClicks == 3)
    {
        document.getElementById("hgif").hidden = false;
    }
}