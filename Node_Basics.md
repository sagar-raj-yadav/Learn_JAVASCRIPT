1.what is Node Js?
--Nodejs is a javascript runtime environment for executing javascript code on server side. 

=>what JS do on the server side?
authentication,authorization,database management(CRUD),input validation,error handling

2.client side rendering ->
server sirf empty HTML and JS file send karta h.Browser me JavaScript execute hota hai and then whole page will be loaded.
->Not SEO friendly, First Time page load hone ka time zyada hota hai 

3.server side rendering ?
server pe HTML page generate hota hai aur wo direct browser ko send kar deta hai. Browser ko sirf HTML ko render karna hota hai, 
->Better SEO friendly, First Time page load hone ka time kum hota hai 

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

6.Node js is good for ->real time application,light weight ,suitable for I/O heavy operations and scalable,microservice based architecture,Node js provide Api that directly read and write Local File system.

Node js is not good for->application that uses heavy cpu processing .(for such scenerios use multi-threaded like JAVA )

7.what is node_modules? ->it contains all dependencies of my project.

NPM-> it manages the dependencies of my project.
package.json ->contains metadata of my project

8.function vs module?
Function->ye ek block of code hai jo ek specific task perform karta hai.
Module->ye ek file hai jo multiple function ko export karta hai.

9.Top 5 built in modules?
fs,path,os,events,http

10.HTTP -> ye ek protocol hai ,used for communication.
methods used-> GET,POST,PUT..

11.REST->used for design API.
Inn saare methods ko kaise use krna h wo REST decide karta h.

12.protocol->set of rules jo ye decide karta hai ki 2 system apas me communicate kaise karnege
ex:HTTPS(use SSL to encrypt data) , HTTP , TCP(it check haar message properly send ho nhi to fir se send kro)

13.How DNS works?
i.search google.com
ii.Browser apne cache me check karta hai ki iss request ke corresponding IP mere paaas hai ya nhi ,Agar mil gya to directly browser hi goole ha IP return kar dega
iii.else , request send to->DNS server
iv.DNS ko haar URL ke corresponding IP address pata hota h
v.DNS return corrresponding IP address to browser
vi.Browser will go to that IP address.

13.


