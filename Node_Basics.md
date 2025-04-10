1.what is Node Js?
Nodejs is a javascript runtime environment for executing javascript code on server side. 

2.client side rendering ->
HTML page aur data , browser (client) ke side generate hota hai, na ki server pe, server sirf empty HTML and JS file send karta h.Browser me JavaScript execute hota hai, aur data fetch karke final HTML page generate hota hai.

3.server side rendering ?
Server-side rendering ek process hai jisme server pe HTML page generate hota hai aur wo direct browser ko bheja jata hai. Browser ko sirf HTML ko render karna hota hai, 

4.single threaded?
Ek time pe sirf ek hi task perform hoga.And haar task sequentially perform hoga .second task tab tak execute nhi hoga jab tak first task complete na ho jaye.

5.event, event emitter, event queue, event loop,  event-driven architecture 

i.Event->any action (button click,data fetching,data receiving,database query execution)

ii.Event emitter->ye event generate karta hai and listener ko batata hai ki koi event hua h.

iii.Event queue->saara event ek queue me rahta hai and sequentially execute hota h.

iv.Event loop->Event loop ek infinite loop hai jo continuously event queue check karta hai aur kaam execute karta hai.
Example:-
User ne server se data maanga (event).
Server ne bola: "Data ready hone do, tab tak dusra kaam kar lo."Ab event loop continuously check karte rahega ki data download hua ya nhii. Now, Event loop ne dekha ki data download ho gaya, toh user ko response de dega.

v.Event-driven architecture ->Pura system hai jo events ke aane par kaam karta hai and wo saara kaam efficiently aur asynchronously hota h.

6.Node js is good for ->real time application,light weight and scalable,microservice based architecture.

Node js is not good for->application that uses heavy cpu processing .(for such scenerios use multi-threaded like JAVA )

7.what is node_modules? ->it contains all dependencies of my project.

NPM-> it manages the dependencies of my project.
package.json ->contains metadata of my project

8.function vs module?
Function->ye ek block of code hai jo ek specific task perform karta hai.
Module->ye ek file hai jo multiple function ko export karta hai.

9.Top 5 built in modules?
fs,path,os,events,http

10.HTTP -> ye ek protocol hai jo web browsers aur web servers ke beech data transfer karne ke liye use hota hai.

11.Express js supports template engine? 
Template engine like EJS, Pug.. Template engine  dynamic  HTML page generate karke deta hai ,issse hum directly HTML page client side pe render  karwa sakte h.

