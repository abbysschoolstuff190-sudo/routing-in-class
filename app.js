const url = require('url');
const availableTimes = {
    Monday: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"],
    Tuesday: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"],
    Wednesday: ["1:00", "1:30", "2:00", "2:30", "3:00", "4:00", "4:30"],
    Thursday: ["1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"],
    Friday: ["1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30"],
};
const appointments = [
    {name: "James", day: "Wednesday", time: "3:30" },
    {name: "Lillie", day: "Friday", time: "1:00" }];

const myserver = http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('<html> <body> <p> <strong> Hello World! </strong> </p> <p> Good Morning Class
 </p> </body> </html>'); //write (send) a response to the client
 res.end(); //end the response
});
myserver.listen(80); //the server object listens on port 80
