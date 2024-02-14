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

In next.js page can not be used on their own, it has to be used by layouts (wrapper)

