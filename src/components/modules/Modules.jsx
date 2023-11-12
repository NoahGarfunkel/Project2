import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "./Modules.css";
import { GetClassModules } from "../../data/ModulesData";

function Modules() {
    const {className} = useParams();
    const [open, setOpen] = useState(false);
    const [modules, SetModules] = useState([])

    useEffect(()=> {
        SetModules(GetClassModules(className))
    }, [className]);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div className="Modules">
            <h1>Modules</h1>
            <List>
                {modules.map((module, index) => (
                    <List key={index}>
                        <ListItem>
                            <ListItemIcon>
                                <FolderIcon color="primary"/>
                            </ListItemIcon>
                            <ListItemText primary={`Module ${module.modNum}: ${module.name}`} />
                        </ListItem>
                        <List>
                            {module.content.map((content, indexContent) => (
                                content.type === 'html'
                                    ? (<ListItem key={indexContent} sx={{ pl: 4 }}
                                                button component={Link} to={`/canvas/class/${className}/assignments/${content.page}`}>
                                        <ListItemIcon>
                                            <FileOpenIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${content.name} (.html)`}  />
                                    </ListItem>)
                                    : (<ListItemButton key={indexContent} onClick={handleClick} sx={{ pl: 4 }}>
                                        <ListItemIcon>
                                            <FileDownloadIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary={`${content.name} (.${content.type})`} />
                                       </ListItemButton>)
                            ))}
                        </List>
                    </List>
                ))}
            </List>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={'File downloaded'}
                action={action}
            />
        </div>
    );
}

export default Modules;