(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{37:function(e,t,s){},38:function(e,t,s){},59:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(29),i=s.n(c),r=(s(37),s(8)),o=s(2),l=(s(38),s(1));var m=function(e){return console.log(e),Object(l.jsxs)("div",{className:"about_container",children:[Object(l.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(l.jsx)("span",{children:"- George Orwell, 1984"})]})},j=s(17),u=s.n(j),d=s(30),h=s(11),v=s(12),b=s(14),p=s(13),O=s(31),x=s.n(O);s(59);var f=function(e){var t=e.title,s=e.year,a=e.summary,n=e.poster,c=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(r.b,{to:{pathname:"/movie-detail",state:{year:s,title:t,summary:a,poster:n,genres:c}},children:[Object(l.jsx)("img",{src:n,alt:t,title:t}),Object(l.jsxs)("div",{className:"movie_data",children:[Object(l.jsx)("h3",{classsName:"movie_title",children:t}),Object(l.jsx)("h5",{classsName:"movie_year",children:s}),Object(l.jsx)("ul",{className:"movie_genres",children:c.map((function(e,t){return Object(l.jsx)("li",{classsName:"movie_genre",children:e},t)}))}),Object(l.jsxs)("p",{classsName:"movie_summary",children:[a.slice(0,180),"..."]})]})]})})},y=(s(65),function(e){Object(b.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(h.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var s,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:s.map((function(e){return Object(l.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e)}))})})}}]),s}(n.a.Component));s(66);var g=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/about",children:"About"})]})},_=(s(67),function(e){Object(b.a)(s,e);var t=Object(p.a)(s);function s(){return Object(h.a)(this,s),t.apply(this,arguments)}return Object(v.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0==t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(this.props),e.state?Object(l.jsxs)("div",{className:"movieDetail",children:[Object(l.jsx)("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),Object(l.jsx)("h1",{className:"movie_titile",children:e.state.title}),Object(l.jsx)("h2",{className:"movie_year",children:e.state.year}),Object(l.jsx)("h3",{children:Object(l.jsx)("ul",{className:"movie_genres",children:e.state.genres.map((function(e,t){return Object(l.jsx)("li",{classsName:"movie_genre",children:e},t)}))})}),Object(l.jsx)("p",{classsName:"movie_summary",children:e.state.summary})]}):null}}]),s}(n.a.Component));var N=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(g,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(o.a,{path:"/about",component:m}),Object(l.jsx)(o.a,{path:"/movie-detail",component:_})]})};i.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.9de01339.chunk.js.map