<!DOCTYPE html>
<html>
 <head>
  <title>ReactLearn2</title>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>  <!-- подключить транспайлер -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/umd/react.production.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.0.0/umd/react-dom.production.min.js"></script>
 </head>
 <body>
    <div class="cont"></div>
    <script type="text/babel">
      const Stars = ({length}) => <span>{ Array.from({length}, (v, i) => ++i).map (() => '*') }</span>;

      ReactDOM.render(
        <Stars length={window.location.search.slice(1,)}/>,
        document.querySelector('.cont')
      );
    </script>
    
    <hr>
    
 </body>
</html>