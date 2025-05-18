//**********************            ## Bonus Challenges          ***************** */
/*
1. Implement basic request logging (timestamp, method, URL)
2. Add a route to search students by name
*/

/* logging 
 when the server receives a request, it should log the following information:
- Timestamp
- Method
- URL

*/




// import data
const data=require('./students.json');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
})

// Route to search students by name ... /students/search?name=Carol
const port = 3000;  
app.get('/students/search', (req, res) => {
  const nameQuery = req.query.name?.toLowerCase();

  if (!nameQuery) {
    return res.status(400).json({ error: 'Please provide a name query parameter' });
  }

  const result = data.filter(student =>
    student.name.toLowerCase().includes(nameQuery)
  );

  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

