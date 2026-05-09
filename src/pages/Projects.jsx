import React,{useEffect,useState}from'react';import{supabase}from'../lib/supabase.js';import{requireAuth}from'../lib/auth.js';import*as S from'../styles.js';
export default function Projects(){
  const[projects,setProjects]=useState([]);
  useEffect(()=>{requireAuth(window.location.href);supabase.from('console_projects').select('*').order('created_at',{ascending:false}).then(({data})=>setProjects(data||[]));  },[]);
  return React.createElement('div',{style:S.page},
    React.createElement('div',{style:{display:'flex',justifyContent:'space-between',marginBottom:'1.5rem'}},React.createElement('h1',{style:{...S.h1,marginBottom:0}},'Projects'),React.createElement('button',{style:S.btn,onClick:()=>window.location.href='/projects/new'},'+ New Project')),
    projects.length===0&&React.createElement('div',{style:S.card},React.createElement('p',{style:S.muted},'No projects yet.')),
    projects.map(p=>React.createElement('div',{key:p.id,style:{...S.card,cursor:'pointer'},onClick:()=>window.location.href='/projects/'+p.id},React.createElement('h2',{style:S.h2},p.name),React.createElement('p',{style:S.muted},p.description||'—')))
  );
}