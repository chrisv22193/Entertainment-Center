import { Badge } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import { img_300, unavailable } from "../../Config/config"
import ContentModal from '../ContentModal/ContentModal';
import "./SingleContent.css";

const useStyles = makeStyles((theme) => ({
  badge:{
    fontWeight: "bold",
    fontSize: "14px",
  }
}))

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
const classes = useStyles()

  return (
    <ContentModal media_type={media_type} id={id}>
        <Badge 
          classes={{ badge: classes.badge }} 
          badgeContent={vote_average} 
          color={
            vote_average >= 8.8 ? "success"
            : vote_average >= 7.5 ? "primary" 
            : vote_average > 6.5 ? "warning" 
            : "error"
          }/>
        <img 
            className='poster' 
            src={ poster? `${img_300}/${poster}` : unavailable }  
            alt={title}/>
        <b className='title'> { title } </b>
        <span className='subTitle'>
            {media_type === "tv" ? "TV Series" : "Movie"}
            <span className='subTitle'> {date} </span>
        </span>
    </ContentModal>
  )
}

export default SingleContent