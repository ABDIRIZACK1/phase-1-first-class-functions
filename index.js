// The receivesAFunction function
function receivesAFunction(callback) {
          // Call the callback function
          callback();
        }
        
        // The returnsANamedFunction function
        function returnsANamedFunction() {
          // Define and return a named function
          return function namedFunction() {
            console.log("This is a named function");
          };
        }
        
        // The returnsAnAnonymousFunction function
        function returnsAnAnonymousFunction() {
          // Return an anonymous function
          return function() {
            console.log("This is an anonymous function");
          };
        }
        
        // Test the functions
        receivesAFunction(() => console.log("Callback function called"));
        const namedFunction = returnsANamedFunction();
        const anonymousFunction = returnsAnAnonymousFunction();
        
        namedFunction(); 
        anonymousFunction();
        