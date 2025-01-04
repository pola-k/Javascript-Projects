const gallery = document.getElementById("gallery")
const prev_btn = document.getElementById("prev_btn")
const next_btn = document.getElementById("next_btn")
const image = document.getElementById("image")
const gallery_div = document.getElementById("gallery_div")

const width = image.getBoundingClientRect().width
const computedStyle = window.getComputedStyle(image)
const marginLeft = parseFloat(computedStyle.marginLeft)
const marginRight = parseFloat(computedStyle.marginRight)
const galleryStyle = window.getComputedStyle(gallery_div)
const gridGap = parseFloat(galleryStyle.gap || galleryStyle.gridGap) || 0

totalWidth = width + marginLeft + marginRight + gridGap

gallery.addEventListener("wheel" , (evt) =>
{
    evt.preventDefault()
    gallery.scrollLeft += evt.deltaY
    gallery.style.scrollBehavior = "auto"
})

next_btn.addEventListener("click", function()
{
    gallery.style.scrollBehavior = "smooth"
    gallery.scrollLeft += totalWidth
})

prev_btn.addEventListener("click", function()
{
    gallery.style.scrollBehavior = "smooth"
    gallery.scrollLeft -= totalWidth
})

let autoScroll = setInterval(() => 
{
    const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;
    gallery.style.scrollBehavior = "smooth"
    
    if (gallery.scrollLeft >= maxScrollLeft) 
    {
        gallery.scrollLeft = 0
    } 
    else 
    {
        gallery.scrollLeft += totalWidth
    }
}, 3000)