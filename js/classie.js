/*
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
(function(f)
{
	function b(g){return new RegExp("(^|\\s+)"+g+"(\\s+|$)")}
	var c,a,d;if("classList" in document.documentElement)
	{
		c=function(h,g){return h.classList.contains(g)};
		a=function(h,g){h.classList.add(g)};
		d=function(h,g){h.classList.remove(g)}
	}
	else
	{
		c=function(h,g){return b(g).test(h.className)};
		a=function(h,g){if(!c(h,g)){h.className=h.className+" "+g}};
		d=function(h,g){h.className=h.className.replace(b(g)," ")}
	}
	function e(h,g)
	{
		var i=c(h,g)?d:a;i(h,g)
	}
	f.classie={hasClass:c,addClass:a,removeClass:d,toggleClass:e,has:c,add:a,remove:d,toggle:e}})(window);