import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import "./Modules.css";
import { GetClassModules } from "../../data/ModulesData";

function Modules() {
    const {className} = useParams();
    const [open, setOpen] = useState(false);
    const [modules, SetModules] = useState([])

    useEffect(()=> {
        SetModules(GetClassModules(className))
    }, [className]);

    const handleClick = (fileName) => {

        // using Java Script method to get PDF file
        fetch(`../../../public/otherContent/${fileName}`).then((response) => {
            response.blob().then((blob) => {

                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);

                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = fileName;
                alink.click();
            });
        });
    };

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
                                    : (<ListItemButton key={indexContent} onClick={() => handleClick(content.page)} sx={{ pl: 4 }}>
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
        </div>
    );
}

export default Modules;