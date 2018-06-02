var JS = JS || {};

JS.scripts = function(){
	this.initialize();
}

JS.scripts.prototype = {
	initialize:function(){
		this.bindEvents();
	},
	bindEvents: function(){
		$('.js-spanize').html(function (i, el) {
        //spanizeLetters.joinChars();
        var spanizer = $.trim(el).split("");
        return '<span>' + spanizer.join('</span><span>') + '</span>';
      });
	},
}



// (function($) {
// 	var s,
// 	spanizeLetters = {
// 		settings: {
// 			letters: $('.js-spanize'),
// 		},
// 		init: function() {
// 			s = this.settings;
// 			this.bindEvents();
// 		},
// 		bindEvents: function(){
// 			s.letters.html(function (i, el) {
//         //spanizeLetters.joinChars();
//         var spanizer = $.trim(el).split("");
//         return '<span>' + spanizer.join('</span><span>') + '</span>';
//       });
// 		},
// 	};
// 	spanizeLetters.init();
// })(jQuery);