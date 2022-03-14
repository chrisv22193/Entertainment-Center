import React, { useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'
import axios from 'axios';
import { img_500, unavailable, unavailableLandscape } from '../../Config/config';
import { ConstructionOutlined, YouTube } from '@mui/icons-material';
import "./ContentModal.css"

const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      width: "90%",
      height: "80%",
      backgroundColor: "#393944",
      border: "1px solid #282c34",
      borderRadius: 10,
      color: "white",
      boxShadow: 5,
      spacing: [1, 1, 3],
    },
}));

export default function ContentModal({children, media_type, id}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState();
    const [video, setVideo] = useState()
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const fetchData = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        setContent(data)
    }

    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        )
        setVideo(data.results[0]?.key)
    }

    useEffect(() => {
      fetchData()
      fetchVideo()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

  return (
    <>
      <div className='media' onClick={handleOpen}>{children}</div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            // BackdropComponent={Backdrop}
            // BackdropProps={{
            //     timeout: 500,
            // }}
        >
        <Fade in={open}>
            {content && (
                <div className={classes.paper}>
                    <div className="contentModal">
                        <img
                            alt={content.name || content.title} 
                            className='contentModal_portrait'
                            src={content.poster_path
                                ?`${img_500}/${content.poster_path}` 
                                : unavailable}
                        />
                        <img
                            alt={content.name || content.title} 
                            className='contentModal_landscape'
                            src={content.backdrop_path
                                ?`${img_500}/${content.backdrop_path}` 
                                : unavailable}
                        />
                        <div className='contentModal_about'>
                            <span className='contentModal_title'>
                                {content.name || content.title}(
                                    {(
                                        content.first_air_date ||
                                        content.release_date ||
                                        "-----"
                                    ).substring(0,4)}
                                )
                            </span>
                            {content.tagline && (
                                <i className="tagline">{content.tagline}</i>
                            )}
                            <span className='contentModal_overview'>
                                {content.overview}
                            </span>
                            <div></div>
                            <Button
                                variant='contained'
                                startIcon={<YouTube/>}
                                color="error"
                                target="_blank"
                                href={`http://www.youtube.com/watch?v=${video}`}
                            >
                                <b>Watch the Trailer</b>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </Fade>
      </Modal>
    </>
  );
}