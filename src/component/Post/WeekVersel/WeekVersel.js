import React from 'react'
import bible from'../../../assets/bible1.png'
import next1 from'../../../assets/next1.png'
import book from'../../../assets/book.png'

const WeekVersel = () => {
    return(
<div className="item item--11">
        <hr/>
        <h2>Verse of the week</h2>

    <div className="item-versel">
        <div className="item-other">
        <h3>Verse of the Day</h3>
        <br/> 
        <img src={book} alt="" srcSet="" width="80%"   className="verse-yesterday"/>
        <br />
              <p style={{fontSize:'16px', color:'black'}}> Reading 1, Acts 25:13-21</p>
                <p style={{fontSize:'16px', color:'black'}}>Responsorial Psalm, Psalms 103:1-2, 11-12, 19-20</p>
                <p style={{fontSize:'16px', color:'black'}}>Gospel, John 21:15-19</p>
        
        
       </div> 
        </div>
       

</div>




)
}
export default WeekVersel
