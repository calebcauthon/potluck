(function(name,path,ctx){var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
})('KeenAsync','https://d26b395fwzu5fz.cloudfront.net/keen-tracking-1.4.2.min.js',this);

KeenAsync.ready(function(){
  var client = new KeenAsync({
    projectId: '5b402e9dc9e77c00010b6003',
    writeKey: '4AE4648B3F6D480915B8B13110A193BB21FA317ADF82D95F619A71BCFDBF147ED537C54B982FF4DCF2762CEFCF49C5F5833DF0E6BDAC25A22A48F6C1E6BCBECFC3E69E188FA7F60951464A2B4C8B4274977F42123CB49FDA6029D3FE1D18FF6B'
  });

  client.initAutoTracking();
});