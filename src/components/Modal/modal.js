import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const Modal = ({handleClose, open, children, title}) => {
    return(
        <Dialog onClose={handleClose} open={open}>
            <DialogContent>
                <h4>{title}</h4>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default Modal