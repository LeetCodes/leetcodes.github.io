import('https://dev.jspm.io/cash-dom').then(({ default: $ }) => $(function () {
   function Jack() { }
   Jack.prototype.farFetch = (url) => new Promise((s, j) => {
      let q = new XMLHttpRequest()
      q.onreadystatechange=()=>q.readyState==4?((q.status>=200)&&(q.status<300))?s(q):j({status:q.status,statusText:q.statusText}):void 0
      q.open('GET', url, true)
      q.send()
   })
   Jack.prototype.iPromise = (t,fn)=>(typeof t=='string'?[t]:t).reduce((p, i) => p.then(() => fn(i)), Promise.resolve())
   Jack.prototype.scURL = (n,g=[],_='https://api.soundcloud.com/')=>`${(!n.includes(_)?_:'')}${n}?${([['client_id', 'LBCcHmRB8XSStWL6wKH2HPACspQlXg2P'], ...g]).map(e=>`${e[0]}=${e[1]}`).join('&')}`
   Jack.prototype.scRIP = function(u){ return this.iPromise(u, ()=> new Promise(s => (typeof u=='string'?[u]:u).forEach(u => this.farFetch(this.scURL('resolve', [['url', u]])).then(x=>JSON.parse(x.response)).then(j=>Object.entries(j).forEach(([k, v]) => (k=='tracks'?v.forEach(t=>(this.tracks=this.tracks||[]).push(this.scURL(t.stream_url))):(k=='stream_url'?(this.tracks=this.tracks||[]).push(this.scURL(v)):void 0)))).then(()=>s([...new Set(this.tracks)]))))) }
   
    const ripper = new Jack()
    ripper.scRIP([
       'https://soundcloud.com/leetcodes/sets/remixes-of-in-game-music',
       'https://soundcloud.com/groove-delight/groove-delight-dance-floor', 
       'https://soundcloud.com/krash_music/groove-delight-krash-wonderwall'
    ])
       .then(t=>t.forEach(mp3=>$(`<audio preload="metadata" controls src="${mp3}"></audio>`).appendTo(document.body)))
}))
