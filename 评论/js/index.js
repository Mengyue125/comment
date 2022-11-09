// JavaScript Document
$(function(){
	$(".container span").each(function(i,ele){
		$(".container span").eq(i).addClass("in")
	})
	
	$(".card").hide();
	setTimeout(function(){
		$(".container").fadeOut();
		$(".main").fadeIn();
		$(".card").eq(0).fadeIn();
		var index = 0;
		var timer = setInterval(function(){
			index++;
			$(".card").eq(index).fadeIn();
			if(index == 3){
				clearInterval(timer)
			}
		},2000)
	},3000)
	$(".main").hide();
	
	$(".card a").click(function(){
		$(".main").hide();
		$(".cake").show();
		const timeline = gsap.timeline({
		  duration: 0.3 });


		timeline.fromTo('.cake-topping', {
		  yPercent: -300,
		  opacity: 0.5 },
		{
		  yPercent: 0,
		  opacity: 1 });


		timeline.to('.candle-container', {
		  opacity: 1 });


		timeline.to('.flame-wrap', {
		  scale: 1,
		  ease: "back.out" });


		timeline.to('.greeting', {
		  scale: 1,
		  ease: "back.out" });


		timeline.to('.star', {
		  opacity: 0.5,
		  stagger: 0.05,
		  onComplete: function () {
			gsap.to('.star', {
			  scale: 0.25,
			  repeat: -1,
			  stagger: 0.1,
			  yoyo: true,
			  yoyoEase: "power1.out" });

		  } });
	})
	$(".cake").click(function(){
		$(".cake").hide();
		$(".comment").show();
		$("body").css("background","black");
	})
	
	var arr = ['你是真傻逼','滚滚滚！','真该死啊你',"早点死","快点滚"]
	
	setInterval(function(){
		let pageWidth = $(window).width();
		let pageHeight = $(window).height();
		var span = $("<span></span>");
		var i = Math.floor(Math.random()*3);
		var txt = arr[i];
		var speed = Math.floor(Math.random()*6+2)
		var seconds = speed+"000"
		span.html(txt)
		$(".comment").append(span);
		console.log(pageHeight,pageWidth)
		span.css({
			top:(Math.random())*pageHeight,
			animation: "dh "+speed+"s linear both",
		})
		setTimeout(function(){
			span.remove();
		},seconds)
	},50)
})