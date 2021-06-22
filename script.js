AOS.init({
    duration : 1200
})

document.getElementById('circle1').addEventListener('click',() =>{
    var one = document.getElementById('image')
    one.setAttribute('class', 'size_of_image')
    one.src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/22/f1dc3292-8762-4cf8-ab18-dd43bf6f27511614017539062-Prebuzz_DK.gif"
})

document.getElementById('circle2').addEventListener('click',()=>{
    var two = document.getElementById('image')
    two.setAttribute('class','size_of_image1')
    two.style.backgroundColor = "red"
    two.src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/dc98a9ca-bc47-40c8-a41c-660c627b87c31614181869120-Men-Casual_DK.jpg"
})

document.getElementById('circle3').addEventListener('click',()=>{
    var three = document.getElementById('image')
    three.setAttribute('class','size_of_image2')
    three.src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/c7d4bb22-072e-4ef9-90b8-96ed2af285851614182002679-Loungewear-Dk.jpg"
})

document.getElementById('circle4').addEventListener('click',()=>{
    var four = document.getElementById('image')
    four.setAttribute('class','size_of_image3')
    four.src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/aa30273a-844e-4fb8-aac1-dade1e20a0e51614181937465-WW_DK.jpg"
})


document.getElementById('circle5').addEventListener('click',()=>{
    var five = document.getElementById('image')
    five.setAttribute('class','size_of_image4')
    five.src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/1ac68e40-1a04-453e-8e22-2ccfe52b76501614182060509-Kidswear-Dk.jpg"
})

document.getElementById('circle6').addEventListener('click',()=>{
    var six = document.getElementById('image')
    six.setAttribute('class','size_of_image5')
    six.src = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/593555b2-8fe8-4ebb-af2b-fc2ec812997d1614182100592-Beauty-Dk.jpg"
})


var i = 0;
var images = []

 images[0] = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/22/f1dc3292-8762-4cf8-ab18-dd43bf6f27511614017539062-Prebuzz_DK.gif"
 images[1] =  "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/dc98a9ca-bc47-40c8-a41c-660c627b87c31614181869120-Men-Casual_DK.jpg"
 images[2] = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/c7d4bb22-072e-4ef9-90b8-96ed2af285851614182002679-Loungewear-Dk.jpg"
 images[3] = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/aa30273a-844e-4fb8-aac1-dade1e20a0e51614181937465-WW_DK.jpg"
 images[4] = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/1ac68e40-1a04-453e-8e22-2ccfe52b76501614182060509-Kidswear-Dk.jpg"
 images[5] = "https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/24/593555b2-8fe8-4ebb-af2b-fc2ec812997d1614182100592-Beauty-Dk.jpg"


function changeImg(){
    var slid = document.getElementById('image')
    slid.setAttribute('class','slider')
    slid.src = images[i] 
    if(i<images.length-1){
        i++
    }else{
        i=0
    }
    setTimeout('changeImg()',5000)
}
window.onload = changeImg