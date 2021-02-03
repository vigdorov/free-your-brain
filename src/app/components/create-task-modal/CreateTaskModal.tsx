import React, {FC, memo, useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {format} from 'date-fns';
import {useFormik} from 'formik';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Task} from '_types/common';
import {VIEW_DATE_TIME} from '_consts/common';
import {buildPath} from '_utils/buildPath';
import {Icon, PageType} from '_enums/common';
import {Button, TextField, MenuItem} from '@material-ui/core';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import {LABELS} from '../../consts';

type Props = {
    isOpen: boolean;
};

const now = format(new Date(), VIEW_DATE_TIME);

const CreateTaskModal: FC<Props> = ({isOpen}) => {
    const history = useHistory();
    const form = useFormik<Partial<Task>>({
        initialValues: {
            title: '',
            body: '',
            start_at: now,
            end_at: '',
            icon: Icon.AcUnit
        },
        onSubmit: () => {
            // В аргументах приходят values. Ждем задачи со сторами для формы
        }
    });

    const handleClose = useCallback(() => {
        history.push(buildPath({pageType: PageType.Main}));
    }, [history]);

    return (
        <Dialog open={isOpen}>
            <form onSubmit={form.handleSubmit}>
                <DialogTitle id="form-dialog-title">{LABELS.CREATE_TASK}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        value={form.values.title}
                        id="title"
                        onChange={form.handleChange}
                        margin="dense"
                        label={LABELS.TITLE}
                        fullWidth
                    />
                    <TextField
                        value={form.values.body}
                        id="body"
                        onChange={form.handleChange}
                        margin="dense"
                        label={LABELS.DESCRIPTION}
                        rowsMax={4}
                        multiline
                        fullWidth
                    />
                    <TextField
                        value={form.values.icon}
                        id="icon"
                        name="icon"
                        onChange={form.handleChange}
                        margin="dense"
                        label={LABELS.ADD_ICON}
                        select
                        fullWidth
                    >
                        <MenuItem value={Icon.AcUnit}>
                            <AccessAlarmIcon fontSize="default" />
                        </MenuItem>
                        <MenuItem value={Icon.Apple}>
                            <AddIcCallIcon fontSize="default" />
                        </MenuItem>
                        <MenuItem value={Icon.Apartment}>
                            <AirplanemodeActiveIcon fontSize="default" />
                        </MenuItem>
                    </TextField>
                    <TextField
                        id="start_at"
                        value={form.values.start_at}
                        label={LABELS.START_AT}
                        type="datetime-local"
                        onChange={form.handleChange}
                        margin="dense"
                        InputLabelProps={{
                            shrink: true
                        }}
                        fullWidth
                    />
                    <TextField
                        id="end_at"
                        value={form.values.end_at}
                        label={LABELS.END_AT}
                        type="datetime-local"
                        onChange={form.handleChange}
                        margin="dense"
                        InputLabelProps={{
                            shrink: true
                        }}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" type="button">
                        {LABELS.CANCEL}
                    </Button>
                    <Button color="primary" type="submit">
                        {LABELS.CREATE}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default memo(CreateTaskModal);
