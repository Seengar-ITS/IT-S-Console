import React,{useEffect,useState}from'react';import{supabase}from'../lib/supabase.js';import{requireAuth,getUser}from'../lib/auth.js';import*as S from'../styles.js';
export default function ApiKeysMgr(){
  const[keys,setKeys]=useState([]);const[n,setN]=useState('');
  useEffect(()=>{requireAuth(window.location.href);supabase.from('api_keys').select('*').order('created_at',{ascending:false}).then(({data})=>setKeys(data||[]));  },[]);
  const gen=async()=>{const u=getUser();if(!u||!n)return;const pfx='its_'+Math.random().toString(36).slice(2,10);const h=pfx+Math.random().toString(36).slice(2,30);await supabase.from('api_keys').insert({user_id:u.sub,name:n,key_prefix:pfx,key_hash:h,is_active:true}).select().single();setN('');supabase.from('api_keys').select('*').order('created_at',{ascending:false}).then(({data})=>setKeys(data||[]));};
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},'API Keys'),
    React.createElement('div',{style:{...S.card,display:'flex',gap:'0.75rem'}},React.createElement('input',{style:S.input,placeholder:'Key name',value:n,onChange:e=>setN(e.target.value)}),React.createElement('button',{style:S.btn,onClick:gen},'Generate')),
    keys.map(k=>React.createElement('div',{key:k.id,style:S.card},React.createElement('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},React.createElement('h2',{style:S.h2},k.name||'Unnamed'),React.createElement('span',{style:S.badge(k.is_active?'#22c55e':'#64748b')},k.is_active?'Active':'Inactive')),React.createElement('p',{style:{...S.muted,fontFamily:'monospace'}},k.key_prefix+'••••••••')))
  );
}