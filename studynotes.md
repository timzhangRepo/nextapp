## Next.JS section

RSC mode: React Server component 

SSR RSC should go togther,server component only render once

'use client' directive for client side components

## CSR (Client-Side Rendering), 
server                                  |Frist Paint -> Query data
client -> download JS + render selecton |                          -> render content |Content Painted

## SSR (Server-Side Rendering), 
server Query Data -> render app |
client                          | frist paint & content painted -> download JS -> hydrate

## RSC (React Server Components): (shrink JS size by keeping server side .js that only needs to be render one time, and send .js that need to be re-rendered)

## SSR + SRC
server  Query Data -> render app | 
client                           | first paint & content painted -> download JS (smaller size) -> hydrade  


## Routing, App Router
Next uses file based routing system,

app里面放folder，folder下define page即可。routing是根据folder名称

By having a special name for page files, 
Only the content inside the page file will be publicly accessible. 

## 
Layout 用于Side Panel，放在左边， side panel 里放link