import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import "./Modules.css";

const modules = [
    {
        modNum: 1, name: 'Introduction to the Course',
        content: [
            {
                name: 'Day 1 Presentation',
                type: 'pptx',
                page: '01-01-intro.pptx'
            },
            {
                name: 'Course Grading Scale',
                type: 'xlsx',
                page: 'grading.xlsx'
            }
        ]
    },
    {
        modNum: 2, name: 'Introduction to Design',
        content: [
            {
                name: 'In Class Activity Day 1',
                type: 'html',
                page: 'inclass_03.html'
            },
            {
                name: 'Day 1 Presentation: Design Principles',
                type: 'pptx',
                page: '06-01-design-principles-p1.pptx'
            },
            {
                name: 'Day 2 Presentation: Color Principles',
                type: 'pptx',
                page: '06-03-design-principles-color.pptx'
            }
        ]
    },
    {
        modNum: 3, name: 'Project 1 Info',
        content: [
            {
                name: 'Project 1 Description',
                type: 'html',
                page: 'project1.html'
            },
            {
                name: 'HTML Tutorial',
                type: 'html',
                page: 'tutorial1.html'
            },
            {
                name: 'CSS Tutorial',
                type: 'html',
                page: 'tutorial2.html'
            },
            {
                name: 'JavaScript Tutorial',
                type: 'html',
                page: 'tutorial4.html'
            }
        ]
    }
];

function Modules() {
    const {className} = useParams();
    useEffect(()=> {}, [className]);

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