const button = document.getElementById("btn")
const current_color = document.getElementById("color")
let simple_selected = true
let hex_selected = false
const simple_link = document.getElementById("Simple")
const hex_link = document.getElementById("Hex")

const cssColors = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure",
    "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood",
    "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan",
    "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta",
    "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", 
    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", 
    "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", 
    "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", 
    "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", 
    "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", 
    "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", 
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", 
    "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", 
    "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", 
    "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", 
    "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", 
    "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", 
    "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", 
    "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", 
    "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", 
    "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
  ];
  
button.addEventListener("click" , function()
{
    if (simple_selected)
    {
        const randomColor = cssColors[Math.floor(Math.random() * cssColors.length)];
        document.body.style.backgroundColor = randomColor;
        current_color.textContent = randomColor.toUpperCase();
    }
    else
    {
        const hexColor = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + hexColor;
        current_color.textContent = "#" + hexColor.toUpperCase();
    }
})

simple_link.addEventListener("click" , function()
  {
    simple_selected = true
    hex_selected = false
    simple_link.style.color = "rgb(59, 141, 234)";
    hex_link.style.color = "black";
  })
  
hex_link.addEventListener("click", function()
{
    hex_selected = true
    simple_selected = false
    simple_link.style.color = "black";
    hex_link.style.color = "rgb(59, 141, 234)";
})