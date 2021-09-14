
import { useState, useEffect } from "react";
import ReviewList from "./Reusables/ReviewList";

const Reviews = () => {

const [reviews, setReviews] = useState(null);
const [title, setTitle] = useState('');
const [rating, setRating] = useState('');
const [body, setBody] = useState('');
const [date, setDate] = useState('')
const [name, setName] = useState('')


useEffect(() => {
    
    fetch('http://localhost:8000/reviews')
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        setReviews(data)
    })
},[])

const postReview = (e) => {
 e.preventDefault()

 const review = { title, rating, body, date, name}

 fetch('http://localhost:8000/reviews', {
     method: 'POST',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify(review)
 }).then(() => {
     console.log('new review added')
     
 })

 
}

    return ( 

            <div className="content-container reviews">

              <h1 className='reviews-header'> Our Customers Comments!</h1>
                        <div className="reviews-box">
                           {reviews && <ReviewList reviews={reviews} />}
                         </div>

                <h2 style={{ marginTop: '50px'}}  className="reviews-header">Leave your own Comment?
                </h2>
                <h6 style={{ 
                    color: 'white',
                    marginTop: '-20px',
                    textAlign: 'center',
                    fontSize: '0.5rem'
                    }}>All Comments Good and Bad will be added to our site for everyone to see,<br/> however any rude or distasteful comments will be removed.</h6>
                <form className="reviewForm-wrapper" onSubmit={postReview}>
                <div className="form-seperator">
                <label>Review Title</label>
                <input 
                 className="reviews-input"
                 type="text"
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value) }/>
                 </div>
                 <label>Name</label>
                <input
                 className="reviews-input-date" 
                 type="text"
                 required 
                 value={name}
                 onChange={(e) => setName(e.target.value)} />
                <div className="checkbox-wrapper">
                <label>Rating</label>
                 <select value={rating}
                  onChange={(e) => setRating(e.target.value)}>
                      <option value="Excellent">Excellent</option>
                      <option value="Pretty good">Pretty good</option>
                      <option value="Alright">Alright</option>
                      <option value="Not good">Not good</option>
                      <option value="Terrible">Terrible</option>
                 </select>
                </div>
                <div className="form-seperator">
                <label>What did you think</label>
                <textarea 
                 style={{ borderRadius: '3px'}}
                 name="body"
                 required 
                 value={body}
                 cols="30" rows="10"
                 maxLength="130"
                 onChange={(e) => setBody(e.target.value)}>
                 </textarea>
                 </div>
                 <div className="form-seperator">
                <label>Date you dined</label>
                <input
                 className="reviews-input-date" 
                 type="text"
                 required 
                 value={date}
                 onChange={(e) => setDate(e.target.value)} />
                </div>
                <button style={{ 
                    width: '100px',
                    padding: '5px 10px',
                    fontFamily: 'love ya like a sister',
                    borderRadius: '3px',
                    marginTop: '10px',
                    cursor: 'pointer',
                    border: 'none',
                    outline: 'none',
                    backgroundColor: 'white'
                }}type="submit">Submit</button>
                </form>
            

            </div>
     );
}
 
export default Reviews;