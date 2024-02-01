var arr = [
  {
    dp: "https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bp: "https://images.unsplash.com/photo-1616469829935-c2f33ebd89b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5zdGFncmFtfGVufDB8fDB8fHww",
  },
  {
    dp: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    bp: "https://images.unsplash.com/photo-1541877944-ac82a091518a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHlvdSUyMHR1YmUlMjBhcHB8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    bp: "https://images.unsplash.com/photo-1616469829167-0bd76a80c913?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1611162617263-4ec3060a058e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    bp: "https://images.unsplash.com/photo-1616469829754-c3fa77b47f74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25hcGNoYXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
    bp: "https://images.unsplash.com/photo-1610548822783-33fb5cb0e3a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hhdHNhcHB8ZW58MHx8MHx8fDA%3D",
  },
  {
    dp: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    bp: "https://images.unsplash.com/photo-1592096626141-3c7ef0472fdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmJ8ZW58MHx8MHx8fDA%3D",
  },
];

var clutter = "";

arr.forEach(function (elem, index) {
  clutter += `<div id="story">
    <img id = "${index}" src= ${elem.dp} alt="">
</div>`;
});

var storiyan = document.querySelector("#storiyan");
var full = document.querySelector("#full");
var growth = document.querySelector("#growth");
var cross = document.querySelector("#full i ")

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
  full.style.display = "block";
  full.style.backgroundImage = `url(${arr[dets.target.id].bp})`;

  var grow = 0 

  var int = setInterval(() => {
    if (grow <= 100) {
      let num = grow++;
      growth.style.width = `${num}%`;
    }
  }, 50);

  setTimeout(function () {
    full.style.display = "none";
    clearInterval(int);
    location.reload();
  }, 5000);

   cross.addEventListener("click",()=>{
    full.style.display = "none";
    location.reload();
})
    
});
