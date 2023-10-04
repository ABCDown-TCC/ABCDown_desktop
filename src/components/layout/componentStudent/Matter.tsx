interface MatterProps {
  activityName?: string;
  description?: string;
  evaluation?: string;
  onClick?: () => void,
}


function Matter(props: MatterProps) {
  return (
    <div style={{
      border: '2px solid #F0754E',
      padding: '10px',
      width: '40%',
      borderRadius: '10px',
      height: '25vh',
      //backgroundColor:'pink',
      display:'flex',
      justifyContent:'space-evenly',
      flexDirection:'column'
    }}>
      <span style={{ fontWeight: 'bold',
     // backgroundColor:'purple',
       height:'10%'}}>{props.activityName}</span>
      <div  style={{ //backgroundColor:'blue' ,
      height:'50%',overflowY: 'auto'}}>
      <p  style={{ width:'100%',height:'max-content'}}>

{props.description}
      </p>


      </div>

      <div style={{
      display:'flex',
      flexDirection:'column',
      height:'max-content',
      //backgroundColor:'red',

    }}>
      <div style={{ //backgroundColor:'red',
    }}>
        <span>avaliacao: </span>
        <span style={{
          fontSize: '24px',
          color: 'gold',
          //backgroundColor: 'red',
        }}>★★★★★</span>
      </div>
      <div style={{     // backgroundColor:'green', 
      display:'flex',justifyContent:'flex-end'}}>
      <button
       onClick={props.onClick}
  style={{
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize:'1.2rem'
  }}
>
  Ver+
</button>

      </div>
    </div>

    </div>

  );
}
export default Matter;