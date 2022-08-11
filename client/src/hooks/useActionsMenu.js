import { useState} from 'react';

export const ActionsMenu = () => {

    const [open, setOpen] = useState(false);

    const handleActionsMenu = () => {
        setOpen(!open);
    }

    return {
        open,
        handleActionsMenu
    }

}


