import React,{useEffect,useState}from'react';import{supabase}from'../lib/supabase.js';import{requireAuth}from'../lib/auth.js';import*as S from'../styles.js';
export default function Project(){
  const id=window.location.pathname.split('/')[2];
  const[proj,setProj]=useState(null);const[keys,setKeys]=useState([]);
  useEffect(()=>{requireAuth(window.location.href);supabase.from('console_projects').select('*').eq('id',id).single().then(({data})=>setProj(data));supabase.from('api_keys').select('*').eq('project_id',id).then(({data})=>setKeys(data||[]));  },[id]);
  if(!proj)return React.createElement('div',{style:S.page},React.createElement('p',{style:S.muted},'Loading...'));
  return React.createElement('div',{style:S.page},React.createElement('h1',{style:S.h1},proj.name),React.createElement('p',{style:{...S.muted,marginBottom:'1.5rem'}},proj.description||'—'),React.createElement('h2',{style:S.h2},'API Keys'),keys.length===0&&React.createElement('p',{style:S.muted},'No keys yet.'),keys.map(k=>React.createElement('div',{key:k.id,style:S.card},React.createElement('p',null,k.name||'Unnamed'),React.createElement('p',{style:{...S.muted,fontFamily:'monospace'}},k.key_prefix+'****'))));
}