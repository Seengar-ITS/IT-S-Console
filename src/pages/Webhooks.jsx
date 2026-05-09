import React,{useEffect,useState}from'react';import{supabase}from'../lib/supabase.js';import{requireAuth}from'../lib/auth.js';import*as S from'../styles.js';
export default function Webhooks(){
  const[wh,setWh]=useState([]);const[url,setUrl]=useState('');
  useEffect(()=>{requireAuth(window.location.href);supabase.from('webhooks').select('*').then(({data})=>setWh(data||[]));  },[]);
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'Webhooks'),
    React.createElement('div',{style:{...S.card,display:'flex',gap:'0.75rem',marginBottom:'1rem'}},React.createElement('input',{style:S.input,placeholder:'https://your-endpoint.com/hook',value:url,onChange:e=>setUrl(e.target.value)}),React.createElement('button',{style:S.btn},'Add')),
    wh.length===0&&React.createElement('p',{style:S.muted},'No webhooks configured.'),wh.map(w=>React.createElement('div',{key:w.id,style:S.card},React.createElement('p',null,w.url),React.createElement('p',{style:S.muted},'Events: '+(w.events||[]).join(', ')||'All')))
  );
}