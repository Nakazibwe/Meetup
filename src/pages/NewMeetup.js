import React from 'react'
import { useNavigate } from "react-router-dom";
import NewMeetupForm from '../components/meetups/NewMeetupForm'
const NewMeetup = () => {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) =>{
    fetch('https://meetups-9d695-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers:{
        'Content-Type': 'application/json'

      }
    }).then(()=>{
      navigate('/');
    })
  }
  return (
    <div>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    </div>
  )
}

export default NewMeetup;