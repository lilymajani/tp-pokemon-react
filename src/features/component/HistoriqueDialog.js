import React from "react";
import {useSelector} from "react-redux";
import {selectTypeHistoric} from "../document/documentSlice";
import {Dialog,DialogTitle,DialogContent,DialogActions,Button,List,ListItem} from "@material-ui/core";

export const HistoriqueDialog = ({open,onClose}) => {

    const hisoric = useSelector(selectTypeHistoric);

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog open={open} aria-labelledby={"simple-dialog-title"}>
            <DialogTitle id={"simple-dialog-title"}>Historique</DialogTitle>
            <DialogContent>
                <List>
                    {hisoric.map((h) => (
                        <ListItem>{h}</ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color={"primary"}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
};
