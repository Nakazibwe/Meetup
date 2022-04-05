import React from "react";
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetups = () => {
  const mydata = [
    {
    address: "grgrgrgrg",
    description: "hrhrrhrhrhr",
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    title: "gRACE"

    }
  ]
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    fetch('https://meetups-9d695-default-rtdb.firebaseio.com/meetups.json')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const meetups = [];
        for(const key in data){
         const  meetup = {
             id: key,
            ...data[key]
            
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetups;
