# software_doc_design_patterns

1) you need to install nodejs https://nodejs.org/en/ and NPM(if needed)
2) clone my repo
3) change dir to cloned app
4) run npm install command
there is an endpoint (http://{yourhost}:8080/city_data/event-hub) for sending data to eventhub
5) create eventhub on Azure and define environment variable 'EVENT_HUBS_URL'
6) create a .env file in your project there you defile EVENT_HUBS_URL="your Connection string–primary key" and another variable PRINT_STRATEGY='EVENT_HUBS'
After this you should run npm run dev - it will run the app
Also you need to make request, you can use for it Postman
