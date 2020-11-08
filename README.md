Add a functions folder declaration in netlify.toml file

Give the following command to create a function:

netlify functions:create hello

Edit the created function

Add useEffect hook in index.tsx

You can also Start the Local Server:

netlify dev

/////////////////////////////////////////////////////////

Adding library random names to functions

Now we will add a dependency package in the netlify function

cd functions/hello

npm init

npm i --save random-name

