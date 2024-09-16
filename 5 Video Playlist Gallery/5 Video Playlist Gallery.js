let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video')
let title = document.querySelector('.main-video .title')

listVideo.forEach(video =>{
    video.addEventListener('click', ()=>{
        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');

        if(video.classList.contains('active')){
            let src = video.children[0].getAttribute('src');
            mainVideo.src = src;
            let text = video.children[1].textContent;
            title.textContent = text
        }
    })
})