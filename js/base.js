$(document).ready(function(){
    setInterval(function(){
        $('.aniSlide').animate({
            "marginLeft" : "-=1200"
        },400,function(){
            $('.aniSlide > div:first-child').appendTo($('.aniSlide'))
            $('.aniSlide').css('margin-left',0)
        })
    },3000)

})


    // $('body').addClass('cccc') 바디에 테스트를 넣어 확인한다!
    //slide
    //setInterval() ->주기적으로 처리하는 명령을 담아주는 함수 / 화면이 열리고 지정한 시간 뒤에 실행
    //=주기적인 시간이 흐르고 실행된다는 뜻. ex> 3000이라고 지정하면 화면이 열리고 3000뒤에 실행된다
    //setTimeout() ->특정시간이 흐르고 단 한번만 실행한다
    //count 라는 공간에 0이라는 숫자를 저장

    //**********웹기능사 시험용 슬라이드 */

    // var count = 0;
    // setInterval(function(){
    //     count++;
    //     count %= 3
    //     $('.anSlide').animate({
    //         "marginLeft" : -1200 * count
    //     },400,function(){})
    // },3000)

//*************설명 */

    // var count =0 ;  
    // setInterval(function(){   
    //     count++; //주기적으로 하나씩 증가한다는 뜻
    //     count = count % 5; //나머지를 구하는 연산자
    //     $('body').append(count);
    // }, 1000)
