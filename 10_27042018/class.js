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
      
      class MyDiv extends React.Component {
          render (){
              return <div>
                        <div>My head is {this.props.head}</div>
                        <div>My body is {this.props.body}</div>
                        <div>---------</div>
                        <div> {"*".repeat(this.props.length) }</div>
                     </div>;
          }
      }  

      ReactDOM.render(
        <MyDiv head="111" body="222" length="15" />,
        document.querySelector('.cont')
      );
    </script>
    
    <hr>
    
 </body>
</html>