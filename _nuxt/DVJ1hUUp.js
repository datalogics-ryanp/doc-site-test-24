import{d as p,c as e,e as i,D as d,n as c,E as m,G as _,i as C,w as r,H as a,h as l,g as f,t as $,I as b,C as D}from"./Mz-Y9fit.js";import"./CZGjZ0Ln.js";import{_ as N}from"./CQBa8IR4.js";import{r as u}from"./5G-Kgbn-.js";import"./Dnd51l0P.js";const B=p({__name:"CardHeader",props:{class:{}},setup(s){const t=s;return(o,n)=>(e(),i("div",{class:c(m(_)("flex flex-col gap-y-1.5 p-6",t.class))},[d(o.$slots,"default")],2))}}),H=p({__name:"CardTitle",props:{class:{}},setup(s){const t=s;return(o,n)=>(e(),i("h3",{class:c(m(_)("text-2xl font-semibold leading-none tracking-tight",t.class))},[d(o.$slots,"default")],2))}}),S=p({__name:"CardDescription",props:{class:{}},setup(s){const t=s;return(o,n)=>(e(),i("p",{class:c(m(_)("text-sm text-muted-foreground",t.class))},[d(o.$slots,"default")],2))}}),T=p({__name:"CardContent",props:{class:{}},setup(s){const t=s;return(o,n)=>(e(),i("div",{class:c(m(_)("p-6 pt-0",t.class))},[d(o.$slots,"default")],2))}}),V=p({__name:"CardFooter",props:{class:{}},setup(s){const t=s;return(o,n)=>(e(),i("div",{class:c(m(_)("flex items-center p-6 pt-0",t.class))},[d(o.$slots,"default")],2))}}),z={class:"group-has-[div]:mt-0 [&:not(:first-child)]:mt-5"},j=p({__name:"Card",props:{title:{},description:{},footer:{},content:{},to:{},target:{},icon:{}},setup(s){return(t,o)=>{const n=b,h=H,g=S,k=B,y=T,w=V,v=N,U=D;return e(),i("div",z,[C(U,{to:t.to,target:t.target},{default:r(()=>[C(v,{class:c(["relative h-full transition-all",[t.to&&"hover:bg-muted"]])},{default:r(()=>[t.icon||t.title||t.$slots.title||t.description||t.$slots.description?(e(),a(k,{key:0},{default:r(()=>[t.icon?(e(),a(n,{key:0,class:"mb-2",name:t.icon,size:"24"},null,8,["name"])):l("",!0),t.title||t.$slots.title?(e(),a(h,{key:1},{default:r(()=>[u(t.$slots,"title",{unwrap:"p"}),f(" "+$(t.title),1)]),_:3})):l("",!0),t.description||t.$slots.description?(e(),a(g,{key:2},{default:r(()=>[u(t.$slots,"description",{unwrap:"p"}),f(" "+$(t.description),1)]),_:3})):l("",!0)]),_:3})):l("",!0),t.content||t.$slots.content||t.$slots.default?(e(),a(y,{key:1},{default:r(()=>[u(t.$slots,"content",{unwrap:"p"}),u(t.$slots,"default",{unwrap:"p"})]),_:3})):l("",!0),t.footer||t.$slots.footer?(e(),a(w,{key:2},{default:r(()=>[u(t.$slots,"footer",{unwrap:"p"}),f(" "+$(t.footer),1)]),_:3})):l("",!0),t.to?(e(),a(n,{key:3,name:"lucide:arrow-up-right",class:"absolute right-4 top-4"})):l("",!0)]),_:3},8,["class"])]),_:3},8,["to","target"])])}}});export{j as default};
