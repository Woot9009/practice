$(function(){
    //1페이지 책이미지 슬라이드 & 책이미지에 맞는 정보 및 독자포스트 출력
    let showNum=0;
    let pagerNum=0;

    //슬라이드 페이저
    $(".pager").click(function(){
        showNum=parseInt($(this).parent("li").index());
        pagerNum=showNum;

        $(".p1Books").stop().animate({left:showNum*-360},500);
        $(".pager").stop().animate({width:"40px", borderRadius:"5px", backgroundColor:"#472826"},300);
        $(this).stop().animate({width:"60px", borderRadius:"3px", backgroundColor:"#fbdba9"},300);

        $(".mainBookInfo").fadeOut();
        $(".mainBookInfo").eq(pagerNum).fadeIn();
    });

    //슬라이드 좌우버튼
    $(".rightBtn").click(function(){
        pagerNum++;
        if(pagerNum>5){
            $(".p1Books").stop().animate({left:pagerNum*-360},500,function(){
                $(".p1Books").css({left:0});
            });
            $(".pager").stop().animate({width:"40px", borderRadius:"5px", backgroundColor:"#472826"},300);
            $(".pager:first").stop().animate({width:"60px", borderRadius:"3px", backgroundColor:"#fbdba9"},300);
            $(".mainBookInfo").fadeOut();
            $(".mainBookInfo:first").fadeIn();
            pagerNum=0;
        }else{
            $(".pager").eq(pagerNum).trigger("click");
        }
    });

    $(".leftBtn").click(function(){
        pagerNum--;
        if(pagerNum<0){
            $(".p1Books").css({left:"-2160px"});
            pagerNum=5;
            $(".p1Books").stop().animate({left:pagerNum*-360},500);
            $(".pager").stop().animate({width:"40px", borderRadius:"5px", backgroundColor:"#472826"},300);
            $(".pager:last").stop().animate({width:"60px", borderRadius:"3px", backgroundColor:"#fbdba9"},300);
            $(".mainBookInfo").fadeOut();
            $(".mainBookInfo:last").fadeIn();
        }else{
            $(".pager").eq(pagerNum).trigger("click");
        }
    });

    //2.5초마다 자동 슬라이드 //책이미지 or 독자포스트에 마우스 올리면 슬라이드 일시정지
    let rolling=setInterval(rightClick,2500);
    function rightClick(){
        $(".rightBtn").trigger("click");
    }
    $("#mainBook, .slideBtn, .comment").hover(
        function(){clearInterval(rolling);},
        function(){rolling=setInterval(rightClick,2500);}
    );


    //2페이지 정렬
    //정렬탭에 마우스 올리면 정렬기준 드롭다운
    $("#array").hover(
        function(){$("#array>li ul").slideDown();},
        function(){$("#array>li ul").slideUp();}
    );
    
    let arrayMyPosts=[
        {postIndex:0, writer:'유발 하라리', booktitle:'사피엔스'},
        {postIndex:1, writer:'유현준', booktitle:'도시는 무엇으로 사는가'},
        {postIndex:2, writer:'김훈', booktitle:'하얼빈'},
        {postIndex:3, writer:'주제 사라마구', booktitle:'눈먼 자들의 도시'},
        {postIndex:4, writer:'어니스트 헤밍웨이', booktitle:'무기여 잘있거라'},
        {postIndex:5, writer:'김상욱', booktitle:'떨림과 울림'},
        {postIndex:6, writer:'백석', booktitle:'여우난골족'},
        {postIndex:7, writer:'김세환', booktitle:'밀리터리 세계사'},
    ];

    //등록순서 내림차순 정렬
    $("#arrayNewest").click(function(){
        $(".mybook").fadeOut(200,function(){
            arrayMyPosts.sort((a,b)=>(b.postIndex - a.postIndex));
            $(".mybook").each(function(idx){
                $(".mybook").eq(idx).children("a").children("img").attr({src:"images/b"+(arrayMyPosts[idx].postIndex+1)+".jpg"});
                $(".mybook").eq(idx).children("h4").text(arrayMyPosts[idx].booktitle);
                $(".mybook").eq(idx).children("p").text(arrayMyPosts[idx].writer);
            });
        });
        $(".mybook").fadeIn(800);
    });

    //등록순서 오름차순 정렬
    $("#arrayLastest").click(function(){
        $(".mybook").fadeOut(200,function(){
            arrayMyPosts.sort((a,b)=>(a.postIndex - b.postIndex));
            $(".mybook").each(function(idx){
                $(".mybook").eq(idx).children("a").children("img").attr({src:"images/b"+(arrayMyPosts[idx].postIndex+1)+".jpg"});
                $(".mybook").eq(idx).children("h4").text(arrayMyPosts[idx].booktitle);
                $(".mybook").eq(idx).children("p").text(arrayMyPosts[idx].writer);
            });
        });
        $(".mybook").fadeIn(800);
    });
    
    $("#arrayNewest").trigger("click");

    //작가이름 오름차순 정렬
    $("#arrayWriter").click(function(){
        $(".mybook").fadeOut(200,function(){
            arrayMyPosts.sort((a,b)=>{
                if(a.writer>b.writer) return 1;
                if(a.writer<b.writer) return -1;
                return 0;
            });
            $(".mybook").each(function(idx){
                $(".mybook").eq(idx).children("a").children("img").attr({src:"images/b"+(arrayMyPosts[idx].postIndex+1)+".jpg"});
                $(".mybook").eq(idx).children("h4").text(arrayMyPosts[idx].booktitle);
                $(".mybook").eq(idx).children("p").text(arrayMyPosts[idx].writer);
            })
        });
        $(".mybook").fadeIn(800);
    });

    //책제목 오름차순 정렬
    $("#arrayBooktitle").click(function(){
        $(".mybook").fadeOut(200,function(){
            arrayMyPosts.sort((a,b)=>{
                if(a.booktitle>b.booktitle) return 1;
                if(a.booktitle<b.booktitle) return -1;
                return 0;
            });
            $(".mybook").each(function(idx){
                $(".mybook").eq(idx).children("a").children("img").attr({src:"images/b"+(arrayMyPosts[idx].postIndex+1)+".jpg"});
                $(".mybook").eq(idx).children("h4").text(arrayMyPosts[idx].booktitle);
                $(".mybook").eq(idx).children("p").text(arrayMyPosts[idx].writer);
            })
        });
        $(".mybook").fadeIn(800);
    });

    
    $("html a").click(function(e){
        e.preventDefault();
    });
});