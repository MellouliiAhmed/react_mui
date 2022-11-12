import React from "react";
import { Card , CardHeader,CardContent, IconButton, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function NoteCard({ note ,handleDelete }){
    return(
        <div>
            <Card elevation={3}>
                <CardHeader 
                action={
                    <IconButton onClick={()=> handleDelete(note.id)}>
                        <DeleteIcon />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
                />
                <CardContent>
                    <Typography
                    variant='body2'
                    color='textSecondary'
                    >
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}